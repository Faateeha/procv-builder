import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface PersonalInfo {
    fullName: string;
    tittle: string;
    email: string;
    phone: string;
    location: string;
    summary: string;
}

export interface ResumeState {
    personal: PersonalInfo;
}

const initialState: ResumeState = {
    personal: {
        fullName: '',
        tittle: '',
        email: '',
        phone: '',
        location: '',
        summary: '',
    },
};

const resumeSlice = createSlice({
    name: 'resume',
    initialState,
    reducers: {
        updatePersonal: (state, action: PayloadAction<Partial<PersonalInfo>>) => {
          state.personal = { ...state.personal, ...action.payload} ;

        }, 
    }
})
export const {updatePersonal} = resumeSlice.actions;
export const resumeReducer = resumeSlice.reducer;