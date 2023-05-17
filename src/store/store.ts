import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {api} from "../api/api";
import themeReducer from './reducers/theme/index'

const rootReducer = combineReducers({
    themeReducer,
    [api.reducerPath]: api.reducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: getDefaultMiddleware =>
            getDefaultMiddleware().concat(api.middleware)
    })
}

export const store = setupStore()

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']