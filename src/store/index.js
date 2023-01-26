import { configureStore } from '@reduxjs/toolkit';
import holidaysReducer from './holidaysSlice';
import imageReducer from './imageSlice';
import textReducer from './textSlice';


export const store = configureStore({
    reducer: {
        holidays: holidaysReducer,
        text: textReducer,
        image: imageReducer
    }
})
