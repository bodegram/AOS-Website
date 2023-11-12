import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth-slice";
import storage from 'redux-persist/lib/storage'
import {persistStore, persistReducer} from 'redux-persist'
import { combineReducers } from "@reduxjs/toolkit";


const persistConfig = {
    key: 'root',
    storage

}

const rootReducer = combineReducers({
    auth: authSlice.reducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
    reducer: persistedReducer
})


export default store