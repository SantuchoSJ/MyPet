import {createReducer} from "@reduxjs/toolkit"

import {getUser} from "./thunks"

const initialState = {}

const userReducer = createReducer(initialState, {
    [getUser.fulfilled] : (state, action) =>  action.payload,
})


export default userReducer