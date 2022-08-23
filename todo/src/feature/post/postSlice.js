import {createSlice, nanoid} from '@reduxjs/toolkit'
import {sub} from "date-fns"

const initialState = [
  // posts: [],
  // status: 'idle', //'idle' | 'loading' | 'succeeded' | 'failed'
  // error: null
  {
    id: '1',
    title: 'learning redux toolkit',
    content: 'loraam loraam loraam loraam loraam loraam loraam loraam ',
    date: sub(new Date(), {minutes: 10}).toISOString(),
    reaction: {
      thumbsUp: 0,
      wow: 0,
      heart: 0,
      rocket: 0,
      coffee: 0
    }
  },
  {
    id: '2',
    title: "slicled",
    content: 'coreom coreom coreom coreom coreom coreom coreom coreom coreom',
    date: sub(new Date(), {minutes: 5}).toISOString(),
    reaction: {
      thumbsUp: 0,
      wow: 0,
      heart: 0,
      rocket: 0,
      coffee: 0
    }
  }
]
const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    postAdded: {
      reducer: (state, action) => {
        state.unshift(action.payload)
      },
      prepare: (title, content, userId) => {
        return ({
          payload: {
            id: nanoid(),
            title,
            content,
            userId,
            date: new Date().toISOString(),
            reaction: {
              thumbsUp: 0,
              wow: 0,
              heart: 0,
              rocket: 0,
              coffee: 0
            }
          }
        })
      }
    },
    reactionAdd : (state, action) => {
      const {postId, reaction} = action.payload
      const existingPost = state.find(post => post.id === postId)
      if(existingPost) existingPost.reaction[reaction]++
    }
  },
})

export const { postAdded, reactionAdd } = postsSlice.actions

export const selectAllPost = (state) => {
  return state.posts
}

export default postsSlice.reducer