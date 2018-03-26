import ReactDOM from 'react-dom';
import React from 'react';
import Title from './title/title';
import Navbar from './navbar/navbar';

let App = (
    <div>
        <Navbar title="React" color="blue"/>
        <div className="container">
            <Title/>
        </div>
    </div>
);

ReactDOM.render(App, document.getElementById("app"));