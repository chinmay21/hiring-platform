import { createAsyncThunk } from "@reduxjs/toolkit";
import { jobEndpoints } from "../apis";
import { apiConnector } from "../apiConnector";
import { setJobs, setFilteredJobs } from "../slices/jobSlice";

export const getFilteredJobs = createAsyncThunk('/jobs/getFilteredJobs', async(_,  thunkAPI) => {
    try{
        const response = await apiConnector("GET", jobEndpoints.FETCH_FILTERED_JOBS_API);

        console.log(response.data);

        return response.data;
    }
    catch(error) {
        return thunkAPI.rejectWithValue(error.response?.data?.message);
    }
});

export const getJobById = createAsyncThunk('/jobs/getJobById/', async(_, thunkAPI) => {
    try{
        const response = await apiConnector("GET", jobEndpoints.FETCH_JOB_API);

        console.log(response.data);

        return response.data;
    }
    catch(error) {
        return thunkAPI.rejectWithValue(error.response?.data?.message);
    }
})