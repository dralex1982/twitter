import './App.css';
import React, {useState} from 'react';
import Nav from "./components/Nav";
import Body from "./components/Body";
import {TwitterContext} from "./utils/twitterContext";

const App = () => {
    return (
        <div className={'app'}>
                <Nav/>
                <Body/>
        </div>
    );
}

export default App;
