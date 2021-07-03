import {createAsyncThunk} from "@reduxjs/toolkit"
import axios from "axios"
import BASE_URL from "../../utils/APIConfig"
import APP_ID from "../../utils/APIConfig"


export const getUser = createAsyncThunk("GET_USER", (userId)=>{
    return  axios.get(`${BASE_URL}/user/${userId}`, { headers: { 'app-id': '60e0af19079048244b4eb452' } })
        .then((res)=> res.data)
        .catch((err)=>console.log(err))
})