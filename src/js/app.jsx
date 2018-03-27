import ReactDOM from 'react-dom';
import React from 'react';
import Title from './title/title';
import Navbar from './navbar/navbar';
import Card from './card/card';
import CardList from './card/card-list';


let App = (
    <div>
        <Navbar title="React" color="blue"/>
        <div className="container">
            <Title/>
            <CardList/>
        </div>
    </div>
);

ReactDOM.render(App, document.getElementById("app"));