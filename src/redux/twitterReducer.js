import {CHANGE_STATS} from "./actions/statsAction";
import {CHANGE_AVATAR, CHANGE_NAME} from "./actions/userAction";

export const twitterReducer = (state, action) => {
    let user;
    switch (action.type) {
        case CHANGE_STATS:
            let res = state.stats[action.payload.statsType] + action.payload.sum;
            const stats = {...state.stats, [action.payload.statsType]: res < 0 ? 0 : res};
            return {...state, stats};
        case CHANGE_AVATAR:
            user = {...state.user, avatar: action.payload || state.user.avatar};
            return {...state, user};
        case CHANGE_NAME:
            user = {...state.user, name: action.payload || state.user.name};
            return {...state, user};
        default:
            return state;
    }
}