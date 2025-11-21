import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export type TemplateKey = 'classic' | 'modern' | 'minimal';

interface UIState {
    selectedTemplate: TemplateKey;
}

const initialState: UIState = {
    selectedTemplate: 'classic',
};

const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        setTemplate: (state, action: PayloadAction<TemplateKey>) => {
            state.selectedTemplate = action.payload;
        }
    }
});

export const { setTemplate } = uiSlice.actions;
export const uiReducer = uiSlice.reducer;
{/*export type {TemplateKey}*/}