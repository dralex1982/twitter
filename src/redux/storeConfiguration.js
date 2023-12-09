import {configureStore} from "@reduxjs/toolkit";
import account from './slice/userSlice'

const store = configureStore(
    {
        reducer: {account}
    }
);
export default store;