import React, {useContext} from 'react';
import UserAvatar from "./UserAvatar";
import {TwitterContext} from "../utils/twitterContext";

const UserStats = () => {

    const {user, stats, addNumber, subNumber} = useContext(TwitterContext);

    return (
        <div className={'user-stats'}>
            <div>
                <UserAvatar/>
                {user.name}
            </div>
            <div className={'stats'}>
                <div
                    onClick={() => {
                        addNumber('followers');
                    }}
                    onContextMenu={event => {
                        event.preventDefault();
                        subNumber('followers');
                    }}>
                    Followers: {stats.followers}</div>
                <div
                    onClick={() => {
                        addNumber('following');
                    }}
                    onContextMenu={event => {
                        event.preventDefault();
                        subNumber('following');
                    }}
                >Following: {stats.following}</div>
            </div>
        </div>
    );
};

export default UserStats;