import { createSlice } from "@reduxjs/toolkit";
import { submitApplication } from "../operations/applicationAPI";

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
    },
    extraReducers: (builder) => {
        builder
            .addCase(submitApplication.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(submitApplication.fulfilled, (state, action) => {
                state.loading = false;
                state.application = action.payload;
            })
            .addCase(submitApplication.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload || action.error.message;
            })
    }
});

export const {setApplications} = applicationSlice.actions;
export default applicationSlice.reducer;