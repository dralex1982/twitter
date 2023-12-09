import './App.css';
import React from 'react';
import Nav from "./components/Nav";
import Body from "./components/Body";

const App = () => {
    return (
        <div className={'app'}>
                <Nav/>
                <Body/>
        </div>
    );
}

export default App;
