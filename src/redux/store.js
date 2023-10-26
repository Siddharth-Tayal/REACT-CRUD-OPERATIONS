
import { combineReducers, configureStore } from "@reduxjs/toolkit"

//slices
import userReducer from "./slices/userSlices"

const rootReducer = combineReducers({
    user: userReducer,
})

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
    })
})
