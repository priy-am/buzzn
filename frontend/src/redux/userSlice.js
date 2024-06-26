import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    user:null,
    otherUsers:null,
    profile:null
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    getUser:(state,action)=>{
      state.user = action.payload;
    },
    getOtherUser:(state,action)=>{
      state.otherUsers = action.payload;
    },
    getMyProfile:(state,action)=>{
      state.profile = action.payload;
  },

  },
})

export const { getUser, getOtherUser, getMyProfile } = userSlice.actions

export default userSlice.reducer