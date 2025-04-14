import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: 'visible',
    initialState: {
        isVisible: false
    },
    reducers: {
        show: function(state) {
            state.isVisible = true
        }
    }
})

export const { show } = slice.actions
export default slice.reducer    