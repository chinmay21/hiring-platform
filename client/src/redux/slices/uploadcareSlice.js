import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    uploadcareToken: null,
    uploadedResume: null,
    
}

const uploadcareSlice = createSlice({
    name:"uploadcare",
    initialState: initialState,
    reducers:{
        setuploadcareToken(state, value) {
            state.uploadcareToken = value.payload
        }
    }
})