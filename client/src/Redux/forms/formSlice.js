import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getForms = createAsyncThunk("posts/getPosts", async () => {
    
  return  axios.get('http://localhost:9000/admin/allForms').then((res)=>res.data.Forms)
});

const formSlice=createSlice(({
    name:"forms",
    initialState:{
        forms:[],
        loading:false,
        reject:false,
    },
    extraReducers:{
        [getForms.pending]:(state,action)=>{
            state.loading=true
            state.reject=false
        },
        [getForms.fulfilled]:(state,action)=>{
            state.loading=false
            state.reject=false
            state.forms=action.payload
        },
        [getForms.rejected]:(state,action)=>{
            state.loading=false
            state.reject=true
        }

    }
}))
export default formSlice.reducer