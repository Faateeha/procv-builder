import {configureStore} from '@reduxjs/toolkit';
import {resumeReducer} from '@/store/resumeSlice';
import { uiReducer } from '@/store/uiSlice';

export const store = configureStore({
    reducer: {
        resume: resumeReducer,
        ui: uiReducer,
    },
});

//Infer types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;