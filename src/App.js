import './App.css';
import React, {Component} from 'react';
import Nav from "./components/Nav";
import Body from "./components/Body";
import {TwitterContext} from "./utils/twitterContext";

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            user: {
                avatar: 'https://gravatar.com/avatar/0?d=monsterid',
                name: 'Monster'
            },
            stats: {
                followers: 1000,
                following: 100
            }
        }
    }

    changeAvatar = url => {
        const temp = {...this.state.user};
        temp.avatar = url || temp.avatar;
        this.setState({user: temp});
    }
    changeName = name =>{
        const temp = {...this.state.user};
        temp.name = name || temp.name;
        this.setState({user: temp});
    }

    render() {
        return (
            <div className={'app'}>
                <TwitterContext.Provider value={{
                    user: this.state.user,
                    stats: this.state.stats,
                    changeAvatar: this.changeAvatar,
                    changeName: this.changeName
                }}>
                    <Nav/>
                    <Body/>
                </TwitterContext.Provider>

            </div>
        );
    }
}

export default App;
