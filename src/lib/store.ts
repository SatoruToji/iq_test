import { configureStore } from '@reduxjs/toolkit'
import userReducer from './userSlice/UserSlice'
import componentVisible from './visibleSlice/VisibleSlice'

export const store = configureStore({
    reducer: {
        user: userReducer,
        visible: componentVisible
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch