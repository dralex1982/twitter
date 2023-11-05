import React from 'react';
import {TwitterContext} from "../utils/twitterContext";

const UserAvatar = ({size}) => {
    return (
        <TwitterContext.Consumer>
            {value => <img className={`user-avatar ${size}`}
                           src={value.user.avatar}
                           alt={value.user.name}
                           onClick={() => value.changeAvatar(prompt('Enter new avatar url: '))}
                           onContextMenu={event => {
                               event.preventDefault();
                               value.changeName(prompt('Enter new nickname: '));
                           }}/>}
        </TwitterContext.Consumer>
    );
};

export default UserAvatar;