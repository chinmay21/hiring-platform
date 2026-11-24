import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    application:null,
    loading:false,
    error:null
}

const applicationSlice = createSlice({
    name:"application",
    initialState:initialState,
    reducers:{
        setApplications(state, value) {
            state.application = value.payload;
        },
    }
});

export const {setApplications} = applicationSlice.actions;
export default applicationSlice.reducer;