export type Skill = {name: string};
export type project = {title: string; description: string; link?: string};
export type Experience = { company: string; role: string; duration: string; description?: string };
export type Education = { institution: string; degree: string; duration?: string };

export interface ResumeData {
    personal: {
        fullName: string;
        title: string;
        email: string;
        phone: string;
        location: string;
        summary: string;
    };
    skills: Skill[];
    projects: project[];
    experience: Experience[];
    education: Education[];
}