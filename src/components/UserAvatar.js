import React from 'react';
import {useSelector, useDispatch} from "react-redux";
import {changeAvatar, changeName} from "../redux/slice/userSlice";


const UserAvatar = ({size}) => {

    const {name,avatar} = useSelector(state => state.account.user);
    const dispatch = useDispatch();

    return (
        <img className={`user-avatar ${size}`} src={avatar} alt={name}
             onClick={() => {
                 let url = (prompt('Enter new avatar url: '));
                 dispatch(changeAvatar(url));
             }}
             onContextMenu={e => {
                 e.preventDefault();
                 let newName = (prompt('Enter new nickname: '));
                 dispatch(changeName(newName));
             }}/>
    );
};

export default UserAvatar;