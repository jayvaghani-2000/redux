import {createSlice, nanoid} from '@reduxjs/toolkit'

const initialState = [
  // posts: [],
  // status: 'idle', //'idle' | 'loading' | 'succeeded' | 'failed'
  // error: null
  {id: '1', title: 'learning redux toolkit', content: 'loraam loraam loraam loraam loraam loraam loraam loraam '},
  {id: '2', title: "slicled", content: 'coreom coreom coreom coreom coreom coreom coreom coreom coreom'}
]
const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    postAdded : {reducer: (state, action) => { state.push(action.payload) },
      prepare: (title, content) => {
        return ({payload:{id: nanoid(), title, content}})
      }
  }
  },
})

export const {postAdded} = postsSlice.actions

export const selectAllPost = (state) => {
  return state.posts
}

export default postsSlice.reducer