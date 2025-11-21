"use client";

import type { ResumeData } from "@/lib/types/resume";

interface MinimalTemplateProps {
  resume: ResumeData;
}

export default function MinimalTemplate({ resume }: MinimalTemplateProps) {
  const { personal, skills, experience, education, projects } = resume;

  return (
    <div className="p-10 max-w-3xl mx-auto font-light tracking-wide text-gray-900">
      
      {/* NAME + TITLE */}
      <header className="mb-10">
        <h1 className="text-4xl font-light">{personal.fullName}</h1>
        <p className="text-lg text-gray-600 mt-1">{personal.title}</p>

        <div className="mt-4 text-sm text-gray-700 leading-6">
          <p>{personal.email}</p>
          <p>{personal.phone}</p>
          <p>{personal.location}</p>
        </div>
      </header>

      {/* SUMMARY */}
      {personal.summary && (
        <section className="mb-10">
          <h2 className="uppercase text-xs tracking-widest text-gray-500 mb-1">
            Summary
          </h2>
          <p className="text-gray-800 leading-relaxed">{personal.summary}</p>
        </section>
      )}

      {/* SKILLS */}
      {skills.length > 0 && (
        <section className="mb-10">
          <h2 className="uppercase text-xs tracking-widest text-gray-500 mb-2">
            Skills
          </h2>
          <div className="flex flex-wrap gap-3">
            {skills.map((s, i) => (
              <span
                key={i}
                className="text-sm text-gray-800"
              >
                {s.name}
              </span>
            ))}
          </div>
        </section>
      )}

      {/* EXPERIENCE */}
      {experience.length > 0 && (
        <section className="mb-10">
          <h2 className="uppercase text-xs tracking-widest text-gray-500 mb-4">
            Experience
          </h2>
          <div className="space-y-6">
            {experience.map((exp, i) => (
              <div key={i}>
                <p className="font-medium text-gray-900">{exp.role}</p>
                <p className="text-sm text-gray-600">
                  {exp.company} — {exp.duration}
                </p>
                <p className="text-sm text-gray-700 mt-1 leading-relaxed">
                  {exp.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* EDUCATION */}
      {education.length > 0 && (
        <section className="mb-10">
          <h2 className="uppercase text-xs tracking-widest text-gray-500 mb-4">
            Education
          </h2>
          <div className="space-y-6">
            {education.map((edu, i) => (
              <div key={i}>
                <p className="font-medium text-gray-900">{edu.degree}</p>
                <p className="text-sm text-gray-700">{edu.institution}</p>
                <p className="text-sm text-gray-600">{edu.duration}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* PROJECTS */}
      {projects.length > 0 && (
        <section className="mb-10">
          <h2 className="uppercase text-xs tracking-widest text-gray-500 mb-4">
            Projects
          </h2>
          <div className="space-y-6">
            {projects.map((proj, i) => (
              <div key={i}>
                <p className="font-medium text-gray-900">{proj.title}</p>
                <p className="text-sm text-gray-700 leading-relaxed">
                  {proj.description}
                </p>
                {proj.link && (
                  <a
                    href={proj.link}
                    className="text-sm text-blue-600 underline"
                  >
                    {proj.link}
                  </a>
                )}
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
