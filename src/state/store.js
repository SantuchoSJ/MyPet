import {configureStore} from "@reduxjs/toolkit";
import logger from "redux-logger";
import postsReducer from "./posts/reducer"
import userReducer from "./users/reducer"




const store = configureStore({
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
    reducer: {
        posts: postsReducer,
        user: userReducer
    },
});


export default store