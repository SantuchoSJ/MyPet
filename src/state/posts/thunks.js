import {createAsyncThunk} from "@reduxjs/toolkit"
import axios from "axios"
import BASE_URL from "../../utils/APIConfig"
import APP_ID from "../../utils/APIConfig"


export const getPosts = createAsyncThunk("GET_POSTS", ()=>{
    return  axios.get(`${BASE_URL}/post?limit=20`, { headers: { 'app-id': '60e09fb8ab6a422af6657b9c' } })
        .then((res)=> res.data)
        .catch((err)=>console.log(err))
})


export const getTagPosts = createAsyncThunk("GET_TAG_POSTS", (tagTitle)=>{
    return  axios.get(`${BASE_URL}/tag/${tagTitle}/post`, { headers: { 'app-id': '60e09fb8ab6a422af6657b9c' } })
        .then((res)=> res.data)
        .catch((err)=>console.log(err))
})
