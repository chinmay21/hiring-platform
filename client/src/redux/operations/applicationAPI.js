import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiConnector } from "../apiConnector";
import { applicationEndpoints } from "../apis";

export const submitApplication = createAsyncThunk('/application/apply', async({resumeUUID, jobId}, thunkApi) => {
    try{
        const response = await apiConnector("POST", applicationEndpoints.SUBMIT_APPLICATION_API.replace(":jobId", jobId), {resumeUUID});

        return response.data.data;
    }
    catch(error) {
        return thunkApi.rejectWithValue(error.response?.data?.message || "Unable to submit application");
    }
} );