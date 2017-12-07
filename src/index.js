import React from 'react';
import ReactDOM from 'react-dom';

const user = {
  name: "Josh Chang",
  luckyNumber: luckyNumber()
};

function luckyNumber() {
    return Math.floor((Math.random() * 1000) +1)
}

let styles = {
    color: 'lightpink',
    fontWeight: 'bold'
};

function Greeting(props) {
    console.log(props);
    return <div className="container">
            <h1 style={styles}>A 'suh {props.person.name}</h1>
            <h2 className="text-muted" >Yo lucky number be {props.person.luckyNumber}!</h2>
        </div>
}

ReactDOM.render(
    <Greeting person={user}/>,
    document.getElementById('root')
);
