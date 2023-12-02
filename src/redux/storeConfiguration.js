import {twitterReducer} from "./twitterReducer";
import {createStore} from "redux";

const initialState =
    {
        user: {
            avatar: 'https://gravatar.com/avatar/0?d=monsterid',
            name: 'Monster'
        },
        stats: {
            followers: 1000,
            following: 100
        }
    };

export const store = createStore(twitterReducer, initialState);