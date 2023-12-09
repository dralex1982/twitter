import React from 'react';
import UserAvatar from "./UserAvatar";
import {useDispatch, useSelector} from "react-redux";
import {changeStats} from "../redux/slice/userSlice";

const UserStats = () => {

    const {followers, following} = useSelector(state => state.account.stats);
    const name = useSelector(state => state.account.user.name);
    const dispatch = useDispatch();

    return (
        <div className={'user-stats'}>
            <div>
                <UserAvatar/>
                {name}
            </div>
            <div className={'stats'}>
                <div
                    onClick={() => {
                        dispatch(changeStats({statsType: 'followers', sum: 1}));
                    }}
                    onContextMenu={event => {
                        event.preventDefault();
                        dispatch(changeStats({statsType: 'followers', sum: 1}));
                    }}>
                    Followers: {followers}</div>
                <div
                    onClick={() => {
                        dispatch(changeStats({statsType: 'following', sum: 1}));
                    }}
                    onContextMenu={event => {
                        event.preventDefault();
                        dispatch(changeStats({statsType: 'following', sum: 1}));
                    }}
                >Following: {following}</div>
            </div>
        </div>
    );
};

export default UserStats;