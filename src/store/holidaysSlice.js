import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { URI_API } from "../const/const";

export const fetchHolidays = createAsyncThunk(
    'holidays/fetchHolidays',
    async () => {
        const res = await fetch(URI_API)
        const data = await res.json()
        return data
    }
)

export const holidaysSlise = createSlice({
    name: 'holidays',
    initialState: {
        holidays: {},
        loading: ''
    },
    reducers: {},
    extraReducers: {
        [fetchHolidays.pending]: (state) => {
            state.loading = 'loading'
        },
        [fetchHolidays.fulfilled]: (state, action) => {
            state.loading = 'success'
            state.holidays = action.payload
        },
        [fetchHolidays.rejected]: (state) => {
            state.loading = 'failed';
            state.holidays = {}
        },
    }
});

export const { setHoliday } = holidaysSlise.actions;

export default holidaysSlise.reducer;