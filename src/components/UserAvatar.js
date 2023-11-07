import React, {useContext} from 'react';
import {TwitterContext} from "../utils/twitterContext";

const UserAvatar = ({size}) => {
    const {user, changeAvatar, changeName} = useContext(TwitterContext);
    return (
        <img className={`user-avatar ${size}`}
             src={user.avatar}
             alt={user.name}
             onClick={() => changeAvatar(prompt('Enter new avatar url: '))}
             onContextMenu={event => {
                 event.preventDefault();
                 changeName(prompt('Enter new nickname: '));
             }}/>
    );
};

export default UserAvatar;