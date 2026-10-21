import { createAsyncThunk } from "@reduxjs/toolkit";
import { endpoints } from "../apis";
import { apiConnector } from "../apiConnector";
import { setLoading, setSignupData } from "../slices/authSlice";

export const signup = createAsyncThunk('auth/signup', async ({name, email, role, password, industry}, thunkApi) => {
    try{
        thunkApi.dispatch(setLoading(true));

        const response = await apiConnector("POST", endpoints.SIGNUP_API, {name, email, role, password, industry});

        thunkApi.dispatch(setSignupData(response.data));

        return response.data;        
    }
    catch(error) {
        return thunkApi.rejectWithValue(error.response?.data?.message);
    }
    finally{
        thunkApi.dispatch(setLoading(false))
    }
});