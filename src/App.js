import './App.css';
import React, {useState} from 'react';
import Nav from "./components/Nav";
import Body from "./components/Body";
import {TwitterContext} from "./utils/twitterContext";

const App = () => {
    const [user, setUser] = useState({
        avatar: 'https://gravatar.com/avatar/0?d=monsterid',
        name: 'Monster'
    });
    const [stats, setStats] = useState({
        followers: 1000,
        following: 100
    });

    const changeAvatar = url => setUser({avatar: url || user.avatar, name: user.name});
    const changeName = name => setUser(user=>
    ({...user, name: name || user.name}));

    const addNumber = property => {
        setStats(stats => {
            let res = stats[property]++;
            return {...stats, [property]: res}
        })
    };

    const subNumber = property => {
        setStats(stats => {
            let res = stats[property]--;
            return {...stats, [property]: [property] === 0 ? [property] : res}
        })
    };


    return (
        <div className={'app'}>
            <TwitterContext.Provider value={{
                user: user,
                stats: stats,
                changeAvatar: changeAvatar,
                changeName: changeName,
                addNumber: addNumber,
                subNumber: subNumber
            }}>
                <Nav/>
                <Body/>
            </TwitterContext.Provider>

        </div>
    );
}

export default App;
