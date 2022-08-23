import {createSlice} from "@reduxjs/toolkit";

const initialState = [{id:"0",name:'pele'},{id:"1",name:'sie'},{id:"2",name:'joly'}]

const usersSlice = createSlice({
  name:'users',
  initialState,
  reducers:{

  }
})

export const selectAllUsers = (state) => {
  return state.users
}

export default usersSlice.reducer