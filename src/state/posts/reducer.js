import {createReducer} from "@reduxjs/toolkit"

import {getPosts, getTagPosts} from "./thunks"

const initialState = []

const postsReducer = createReducer(initialState, {
    [getPosts.fulfilled] : (state, action) =>  action.payload.data,
    [getTagPosts.fulfilled] : (state, action) =>  action.payload.data,
})


export default postsReducer