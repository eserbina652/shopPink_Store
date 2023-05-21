import {createSlice} from "@reduxjs/toolkit";
import {Nullable} from "../../../utils/types";
import {IUser} from "../../../screens/profile/types";

interface IInitialState {
    user: Nullable<IUser>
}

const initialState: IInitialState = {
    user: null
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        onLogin: (state, action) => {
            state.user = action.payload
            return state
        }
    }
})

export const {onLogin} = authSlice.actions

export default authSlice.reducer