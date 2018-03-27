import ReactDOM from 'react-dom';
import React from 'react';
import Title from './title/title';
import Navbar from './navbar/navbar';
import Card from './card/card';
import CardList from './card/card-list';
import Clock from './clock/clock';

let App = (
    <div>
        <Navbar title="React" color="orange"/>
        <div className="container">
            <Title/>
            <CardList rowLenght="3" col="4"/>
        <Clock/>
        </div>
    </div>
);

ReactDOM.render(App, document.getElementById("app"));