import React, {Component} from 'react';

class FormatTime extends Component {
    constructor(props) {
        super(props);
        this.state = {
          hour: 0,
          min: 0,
          sec: 0,
          ms: 0
        };
        this.timerStyle = {
            display: 'table-cell',
            position: 'relative',
            width: "100vw",
            fontFamily: "HelveticaNeue-UltraLight, Helvetica, Arial",
            fontSize: "10vmin",
            textAlign: "center"
        };
    }

    leadingZero(number) {
        return number < 10 ? '0' + number : number;
    }

    trailingZero(number) {
        return number < 10 ? `${number}0` : number;
    }

    componentWillReceiveProps(nextProps) {
        const {elapsed} = nextProps;
        const sec = elapsed / 1000;
        const min = sec / 60;
        this.setState({
            hour: Math.floor(min/60),
            min: Math.floor(min % 60),
            sec: Math.floor(sec % 60),
            ms: Math.floor(elapsed % 100)
        })
    }

    render() {
        const { min, sec, ms} = this.state;
        return (
            <div style={this.timerStyle}>{this.leadingZero(min)}:{this.leadingZero(sec)}.{this.trailingZero(ms)}</div>
        )
    }


}

export default FormatTime;