"use client";

import type { ResumeData } from "@/lib/types/resume";

interface MinimalTemplateProps {
  resume: ResumeData;
}

export default function MinimalTemplate({ resume }: MinimalTemplateProps) {
  const { personal, skills, experience, education, projects } = resume;

  return (
    <div className="p-8 space-y-6 text-black">
      {/* NAME + TITLE */}
      <div>
        <h1 className="text-3xl font-bold">{personal.fullName}</h1>
        <p className="text-lg text-gray-600">{personal.title}</p>
      </div>

      {/* CONTACT */}
      <div className="text-sm text-gray-700 space-y-1">
        <p>{personal.email}</p>
        <p>{personal.phone}</p>
        <p>{personal.location}</p>
      </div>

      {/* SUMMARY */}
      <div>
        <h2 className="text-xl font-semibold">Summary</h2>
        <p className="text-gray-700">{personal.summary}</p>
      </div>

      {/* SKILLS */}
      <div>
        <h2 className="text-xl font-semibold">Skills</h2>
        <ul className="flex flex-wrap gap-2">
          {skills.map((s, i) => (
            <li
              key={i}
              className="px-3 py-1 bg-gray-200 rounded text-sm"
            >
              {s.name}
            </li>
          ))}
        </ul>
      </div>

      {/* EXPERIENCE */}
      <div>
        <h2 className="text-xl font-semibold">Experience</h2>
        <div className="space-y-4">
          {experience.map((exp, i) => (
            <div key={i}>
              <p className="font-medium">{exp.role} — {exp.company}</p>
              <p className="text-sm text-gray-600">{exp.duration}</p>
              <p className="text-gray-700">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* EDUCATION */}
      <div>
        <h2 className="text-xl font-semibold">Education</h2>
        <div className="space-y-4">
          {education.map((edu, i) => (
            <div key={i}>
              <p className="font-medium">{edu.degree}</p>
              <p className="text-sm">{edu.institution}</p>
              <p className="text-sm text-gray-600">{edu.duration}</p>
            </div>
          ))}
        </div>
      </div>

      {/* PROJECTS */}
      <div>
        <h2 className="text-xl font-semibold">Projects</h2>
        <div className="space-y-4">
          {projects.map((proj, i) => (
            <div key={i}>
              <p className="font-medium">{proj.title}</p>
              <p className="text-gray-700">{proj.description}</p>
              {proj.link && (
                <a
                  href={proj.link}
                  className="text-blue-600 underline text-sm"
                >
                  {proj.link}
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
