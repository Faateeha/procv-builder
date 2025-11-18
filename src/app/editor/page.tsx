"use client";
import ClientProvider from "@/components/ClientProvider";
import PersonalForm from "@/components/forms/personalForm";
import SkillsForm from "@/components/forms/SkillsForm";
import ExperienceForm from "@/components/forms/ExperienceForm";
import EducationForm from "@/components/forms/EducationForm";
import ProjectForm from "@/components/forms/ProjectForm";
import ResumePreview from "@/components/preview/ResumePreview";


export default function EditorPage() {
  return (
    <ClientProvider>
        <div className="p-6 grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/*left*/}
      <div className="space-y-8">
        <h1 className="text-2xl font-bold mb-4">Personal Information</h1>
        <PersonalForm />
        <h1 className="text-2xl font-bold">Skills</h1>
          <SkillsForm />

          <h1 className="text-2xl font-bold">Projects</h1>
          <ProjectForm />

          <h1 className="text-2xl font-bold">Experience</h1>
          <ExperienceForm />

          <h1 className="text-2xl font-bold">Education</h1>
          <EducationForm />
      </div>

      {/*right*/}
      <div className="bg-neutral-100 dark:bg-neutral-900 rounded-xl p-6">
        <h2 className="text-xl font-medium">Live preview</h2>
        <ResumePreview />
      </div>
    </div>
    </ClientProvider>
  );
}
