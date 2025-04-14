import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface UserState {
    age: number
    city: string
    gender: string
}

const userSlice = createSlice({
    name: 'user',
    initialState: {
        age: 0,
        city: '',
        gender: '',
    },
    reducers: {
        setUserData: (state, action: PayloadAction<UserState>) => {
            return { ...state, ...action.payload }
        },
    },
})


export const { setUserData } = userSlice.actions
export default userSlice.reducer
