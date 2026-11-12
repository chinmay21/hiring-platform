import { createSlice } from "@reduxjs/toolkit";
import { getFilteredJobs, getJobById } from "../operations/jobAPI";

const initialState = {
    jobs: [],
    filteredJobs: [],
    job: {},
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
        },
        setJob(state, value) {
            state.job = value.payload
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
                state.filteredJobs = action.payload.data;
            })

            .addCase(getFilteredJobs.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(getJobById.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getJobById.fulfilled, (state, action) => {
                state.loading = false;
                state.job = action.payload;
            })
            .addCase(getJobById.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
    }

});

export const {setJobs, setFilteredJobs, setJob} = jobSlice.actions;
export default jobSlice.reducer;