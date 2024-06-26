import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    tweets: null
}

export const userSlice = createSlice({
    name: 'tweet',
    initialState,
    reducers: {
        getAlltweet:(state, action)=>{
            state.tweets = action.payload;
        }
    }
})


export const { getAlltweet } = userSlice.actions

export default userSlice.reducer