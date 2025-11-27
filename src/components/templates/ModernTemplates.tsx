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

        {/* HEX instead of text-gray-600 */}
        <p className="text-lg" style={{ color: "#666666" }}>
          {personal.title}
        </p>
      </div>

      {/* CONTACT */}
      <div className="text-sm space-y-1" style={{ color: "#555555" }}>
        <p>{personal.email}</p>
        <p>{personal.phone}</p>
        <p>{personal.location}</p>
      </div>

      {/* SUMMARY */}
      <div>
        <h2 className="text-xl font-semibold">Summary</h2>

        {/* HEX instead of text-gray-700 */}
        <p style={{ color: "#555555" }}>{personal.summary}</p>
      </div>

      {/* SKILLS */}
      <div>
        <h2 className="text-xl font-semibold">Skills</h2>

        <ul className="flex flex-wrap gap-2">
          {skills.map((s, i) => (
            <li
              key={i}
              className="px-3 py-1 rounded text-sm"
              style={{
                backgroundColor: "#E5E7EB", // gray-200 equivalent
                color: "#000000",
              }}
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
              <p className="font-medium">
                {exp.role} — {exp.company}
              </p>

              {/* HEX instead of text-gray-600 */}
              <p className="text-sm" style={{ color: "#666666" }}>
                {exp.duration}
              </p>

              {/* HEX instead of text-gray-700 */}
              <p style={{ color: "#555555" }}>{exp.description}</p>
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

              {/* HEX instead of text-gray-600 */}
              <p className="text-sm" style={{ color: "#666666" }}>
                {edu.duration}
              </p>
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

              {/* HEX */}
              <p style={{ color: "#555555" }}>{proj.description}</p>

              {proj.link && (
                <a
                  href={proj.link}
                  className="underline text-sm"
                  style={{ color: "#2563EB" }}
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
