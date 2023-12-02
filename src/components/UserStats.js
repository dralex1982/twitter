import React from 'react';
import UserAvatar from "./UserAvatar";
import {useDispatch, useSelector} from "react-redux";
import {changeStatsAction} from "../redux/actions/statsAction";

const UserStats = () => {

    const {user, stats} = useSelector(state => state);
    const dispatch = useDispatch();

    return (
        <div className={'user-stats'}>
            <div>
                <UserAvatar/>
                {user.name}
            </div>
            <div className={'stats'}>
                <div
                    onClick={() => {
                        dispatch(changeStatsAction('followers',1));
                    }}
                    onContextMenu={event => {
                        event.preventDefault();
                        dispatch(changeStatsAction('followers', -1));
                    }}>
                    Followers: {stats.followers}</div>
                <div
                    onClick={() => {
                        dispatch(changeStatsAction('following', 1));
                    }}
                    onContextMenu={event => {
                        event.preventDefault();
                        dispatch(changeStatsAction('following', -1));
                    }}
                >Following: {stats.following}</div>
            </div>
        </div>
    );
};

export default UserStats;