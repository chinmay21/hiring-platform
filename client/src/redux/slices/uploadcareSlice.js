import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    token: null,
    uploadedResume: null,
    tokenLoading: false,
    uploadLoading: false,
    error: null, 
}

const uploadcareSlice = createSlice({
    name:"uploadcare",
    initialState: initialState,
    reducers:{
        resetUploadcare: (state) => {
            state.token = null;
            state.uploadedResume = null;
            state.tokenLoading = false;
            state.uploadLoading = false;
            state.error = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(generateUploadToken.pending, (state) => {
                state.tokenLoading = true;
                state.error = null;
            })
            .addCase(generateUploadToken.fulfilled, (state, action) => {
                state.tokenLoading = false;
                state.token = action.payload;
            })
            .addCase(generateUploadToken.rejected, (state, action) => {
                state.tokenLoading = false;
                state.error = action.payload;
            })

    
            .addCase(uploadResume.pending, (state) => {
                state.uploadLoading = true;
                state.error = null;
                state.uploadedResume = null;
            })
            .addCase(uploadResume.fulfilled, (state, action) => {
                state.uploadLoading = false;
                state.uploadedResume = action.payload;
                state.token = null;
            })
            .addCase(uploadResume.rejected, (state, action) => {
                state.uploadLoading = false;
                state.token = null;
                state.error = action.payload;
            });
    },
});

export const { resetUploadcare } = uploadcareSlice.actions;

export default uploadcareSlice.reducer;