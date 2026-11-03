import { createSlice } from "@reduxjs/toolkit";
import { getFilteredJobs } from "../operations/jobAPI";

const initialState = {
    jobs: [],
    filteredJobs: [],
    loading: false,
    error: null
}

const jobSlice = createSlice({
    name:"job",
    initialState:initialState,
    reducers:{
        setJobs(state, value) {
            state.jobs = value.payload
        },
        setFilteredJobs(state, value) {
            state.filteredJobs = value.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getFilteredJobs.pending, (state) => {
                state.loading = true;
                state.error = null;
            })

            .addCase(getFilteredJobs.fulfilled, (state, action) => {
                state.loading = false;
                state.filteredJobs = action.payload.data
            })

            .addCase(getFilteredJobs.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
    }

});

export const {setJobs, setFilteredJobs} = jobSlice.actions;
export default jobSlice.reducer;