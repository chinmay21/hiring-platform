import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiConnector } from "../apiConnector";
import { uploadcareEndpoints } from "../apis";

export const generateUploadToken = createAsyncThunk("uploadcare/generateUploadToken", async(_, thunkAPI) => {
    try{
        const response = await apiConnector("GET", uploadcareEndpoints.GENERATE_UPLOADCARE_TOKEN_API);

        return response.data.token;
    }
    catch(error) {
        return thunkAPI.rejectWithValue(error.response?.data?.message || "Unable to generate Uploadcare token");
    }
});

export const uploadResume = createAsyncThunk("uploadcare/uploadResume", async(resume, thunkAPI) => {
    try{
        const token = await thunkAPI.dispatch(
            generateUploadToken()
        )
        .unwrap();

        const formData = new FormData();
        
        formData.append(
            "UPLOADCARE_PUB_KEY",
            import.meta.env.VITE_UPLOAD_CARE_PUBLIC_KEY
        );

        formData.append("UPLOADCARE_STORE", "auto");
        formData.append("file", resume);

        const response = await fetch(
                "https://upload.uploadcare.com/base/",
                {
                    method: "POST",
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                    body: formData,
                }
        );
        
        const data = await response.json();

        if (!response.ok) {
            throw new Error(
                data.detail || data.error || "Resume upload failed"
            );
        }

        return {
            uuid: data.file,
            resumeURL: `${import.meta.env.VITE_UPLOADCARE_CDN_BASE}/${data.file}/${encodeURIComponent(resume.name)}`,
        };

    }
    catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }

})