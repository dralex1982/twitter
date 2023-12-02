import React from 'react';
import {useSelector, useDispatch} from "react-redux";
import {changeAvatarAction, changeNameAction} from "../redux/actions/userAction";


const UserAvatar = ({size}) => {

    const {name, avatar} = useSelector(state => state.user);
    const dispatch = useDispatch();

    return (
        <img className={`user-avatar ${size}`} src={avatar} alt={name}
             onClick={() => {
                 let url = (prompt('Enter new avatar url: '));
                 dispatch(changeAvatarAction(url));
             }}
             onContextMenu={e => {
                 e.preventDefault();
                 let newName = (prompt('Enter new nickname: '));
                 dispatch(changeNameAction(newName));
             }}/>
    );
};

export default UserAvatar;