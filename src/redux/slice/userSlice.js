import {createSlice} from "@reduxjs/toolkit";

const userSlice = createSlice(
    {
        name: 'account',
        initialState:
            {
                user: {
                    avatar: 'https://gravatar.com/avatar/0?d=monsterid',
                    name: 'Monster'
                },
                stats: {
                    followers: 1000,
                    following: 100
                }
            },
        reducers: {
            changeStats (state, action) {
                let res = state.stats[action.payload.statsType] += action.payload.sum;
               state.stats[action.payload.statsType] = res < 0 ? 0 : res;
            },
            changeAvatar(state, action) {
                const newAvatar = action.payload || state.user.avatar;
                state.user.avatar = newAvatar;
            },
            changeName(state, action) {
                const newName = action.payload || state.user.name;
                state.user.name = newName;
            },
        }
    }
);

export const {changeStats, changeAvatar, changeName} = userSlice.actions;
export default userSlice.reducer;