import { configureStore } from "@reduxjs/toolkit";
import postReducer from "./../feature/post/postSlice"
import usersReducer from "./../feature/users/usersSlice"

export const store = configureStore({
    reducer: {
        posts: postReducer,
        users: usersReducer
    }
})
