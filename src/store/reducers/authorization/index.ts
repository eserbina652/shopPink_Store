import {createSlice} from "@reduxjs/toolkit";
import {Nullable} from "../../../utils/types";
import {IUser} from "../../../api/types/userstypes";

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