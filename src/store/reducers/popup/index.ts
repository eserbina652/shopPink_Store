import {createSlice} from "@reduxjs/toolkit";
import {Nullable} from "../../../utils/types";
import {Product} from "../../../components/products/types";

interface IPopup {
    isOpen: boolean;
    removeById: Nullable<Product>
}

const initialState: IPopup = {
    isOpen: false,
    removeById: null
}

const popupSlice = createSlice({
    name: 'popup',
    initialState,
    reducers: {
        onOpenPopup: (state, action) => {
            state.isOpen = true
            state.removeById = action.payload
            return state
        },
        onClosePopup: (state) => {
            state.isOpen = false
            return state
        }
    }
})

export const {onOpenPopup, onClosePopup} = popupSlice.actions
export default popupSlice.reducer
