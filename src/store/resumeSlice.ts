import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface PersonalInfo {
    fullName: string;
    title: string;
    email: string;
    phone: string;
    location: string;
    summary: string;
}
export interface Skill {
    name: string;
}

export interface Project {
    title: string;
    description: string;
    link: string;
}
export interface Experience {
    company: string;
    role: string;
    duration: string;
    description: string;
}
export interface Education {
    institution: string;
    degree: string;
    duration: string;
}

export interface ResumeState {
    personal: PersonalInfo;
    skills: Skill[];
    projects: Project[];
    experience: Experience[];
    education: Education[];
}

const initialState: ResumeState = {
    personal: {
        fullName: '',
        title: '',
        email: '',
        phone: '',
        location: '',
        summary: '',
    },
    skills: [],
    projects: [],
    experience: [],
    education: [],
};

const resumeSlice = createSlice({
    name: 'resume',
    initialState,
    reducers: {
        updatePersonal: (state, action: PayloadAction<Partial<PersonalInfo>>) => {
          state.personal = { ...state.personal, ...action.payload} ;

        },
        addSkill: (state, action: PayloadAction<Skill>) => {
      state.skills.push(action.payload);
    },
    removeSkill: (state, action: PayloadAction<number>) => {
      state.skills.splice(action.payload, 1);
    },
    addProject: (state, action: PayloadAction<Project>) => {
      state.projects.push(action.payload);
    },
    removeProject: (state, action: PayloadAction<number>) => {
      state.projects.splice(action.payload, 1);
    },
    addExperience: (state, action: PayloadAction<Experience>) => {
      state.experience.push(action.payload);
    },
    removeExperience: (state, action: PayloadAction<number>) => {
      state.experience.splice(action.payload, 1);
    },
    addEducation: (state, action: PayloadAction<Education>) => {
      state.education.push(action.payload);
    },
    removeEducation: (state, action: PayloadAction<number>) => {
      state.education.splice(action.payload, 1);
    }, 
    }
})
export const {updatePersonal, addSkill,
  removeSkill,
  addProject,
  removeProject,
  addExperience,
  removeExperience,
  addEducation,
  removeEducation,} = resumeSlice.actions;
export const resumeReducer = resumeSlice.reducer;