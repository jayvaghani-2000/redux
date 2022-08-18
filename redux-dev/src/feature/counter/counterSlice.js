import {createSlice} from '@reduxjs/toolkit'

const initalState = {
  count: 0
}

const counterSlice = createSlice({
  name: 'counter',
  initialState: initalState,
  reducers: {
    increment: (state) => {
      state.count += 1
    },
    decrement: (state) => {
      state.count -= 1
    },
    reset: (state) => {
      state.count = 0
    },
    incrementByAmt: (state, action) => {
      state.count += action.payload
    }
  }
})

export const {increment, decrement, reset, incrementByAmt} = counterSlice.actions;

export default counterSlice.reducer