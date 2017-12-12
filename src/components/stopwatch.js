import React, { Component } from 'react';
import Time from './format_time'

class Stopwatch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            status: 'stopped',
            start: null,
            elapsed: 0,
            message: ''
        };
        this.start = this.start.bind(this);
        this.stop = this.stop.bind(this);
        this.update = this.update.bind(this);
        this.reset  = this.reset.bind(this);
        this.timedMessage = this.timedMessage.bind(this);

        this.textStyle = {
            fontSize: "4.5vmin"
        }
    }

    start() {
        const {start, elapsed} = this.state;
        console.log(elapsed);
        let newStart = new Date().getTime();
        if(start) {
            newStart -= elapsed
        }
        this.setState({
            status: 'running',
            start: newStart
        });
        setTimeout(this.update, 10);
    }

    stop() {
        this.setState({
            status: 'stopped'
        })
    }

    reset() {
        this.setState({
            status: 'stopped',
            start: null,
            elapsed: 0,
            message: ''
        })
    }

    update() {
        let {status, start} = this.state;
        if(status === 'running') {
            this.timedMessage();
            this.setState({
                elapsed: new Date().getTime() - start
            });
            setTimeout(this.update, 10);
        }
    }

    timedMessage() {
        let {elapsed, message} = this.state;
        if (elapsed < 30000) {
            this.setState({
                message: "♨Blooming♨"
            });
        } else {
            this.setState({
                message: "Bloomed ✔ start brewin' ☕ !"
            });
        }
        if (elapsed >= 150000) {
            this.setState({
                message: "Enjoy your ☕ !"
            });
        }
    }


    render() {
        const {elapsed, message} = this.state;
        return (
            <div className="jumbotron">
                <h1 className="display-3"><Time elapsed={elapsed} /></h1>
                <hr className="my-3"/>
                <p className="lead text-center" style={this.textStyle}>{message}</p>
                <p className="text-center">
                    <button className="btn btn-outline-success mx-3" onClick={this.start}>Start</button>
                    <button className="btn btn-outline-danger mx-3" onClick={this.stop}>Stop</button>
                    <button className="btn btn-outline-warning mx-3" onClick={this.reset}>Reset</button>
                </p>
            </div>
        )
    }
}

export default Stopwatch;