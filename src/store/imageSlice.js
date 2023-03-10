import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { URI_API } from "../const/const";


export const fetchImage = createAsyncThunk(
    'image/fetchImage',
    async (holiday) => {
        const res = await fetch(`${URI_API}image/${holiday}`)
        const data = await res.json()
        return data
    }
);

export const fetchImageid = createAsyncThunk(
    'image/fetchImageid',
    async (id) => {
        const res = await fetch(`${URI_API}image/${id}`)
        const data = await res.json()
        return data
    }
);

const imageSlice = createSlice({
    name: 'image',
    initialState: {
        urlImg: '',
        idImg: '',
        loading: '',
    },
    reducers: {},
    extraReducers: {
        [fetchImage.pending]: state => {
            state.loading = 'loading';
        },
        [fetchImage.fulfilled]: (state, action) => {
            state.loading = 'success';
            state.urlImg = action.payload.urlImg;
            state.idImg = action.payload.idImg;
        },
        [fetchImage.rejected]: state => {
            state.loading = 'failed';
            state.urlImg = '';
            state.idImg = '';
        },
        [fetchImageid.pending]: state => {
            state.loading = 'loading';
        },
        [fetchImageid.fulfilled]: (state, action) => {
            state.loading = 'success';
            state.urlImg = action.payload.urlImg;
            state.idImg = action.payload.idImg;
        },
        [fetchImageid.rejected]: state => {
            state.loading = 'failed';
            state.urlImg = '';
            state.idImg = '';
        },
    }
})

export default imageSlice.reducer