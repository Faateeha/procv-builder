"use client";

import type { ResumeData } from "@/lib/types/resume";

interface MinimalTemplateProps {
  resume: ResumeData;
}

export default function MinimalTemplate({ resume }: MinimalTemplateProps) {
  const { personal, skills, experience, education, projects } = resume;

  return (
    <div
      className="p-10 max-w-3xl mx-auto font-light tracking-wide"
      style={{ color: "#111111" }} // replaces text-gray-900
    >
      {/* NAME + TITLE */}
      <header className="mb-10">
        <h1 className="text-4xl font-light">{personal.fullName}</h1>

        <p className="text-lg mt-1" style={{ color: "#666666" }}>
          {personal.title}
        </p>

        <div className="mt-4 text-sm leading-6" style={{ color: "#555555" }}>
          <p>{personal.email}</p>
          <p>{personal.phone}</p>
          <p>{personal.location}</p>
        </div>
      </header>

      {/* SUMMARY */}
      {personal.summary && (
        <section className="mb-10">
          <h2
            className="uppercase text-xs tracking-widest mb-1"
            style={{ color: "#777777" }}
          >
            Summary
          </h2>

          <p style={{ color: "#333333", lineHeight: "1.6" }}>
            {personal.summary}
          </p>
        </section>
      )}

      {/* SKILLS */}
      {skills.length > 0 && (
        <section className="mb-10">
          <h2
            className="uppercase text-xs tracking-widest mb-2"
            style={{ color: "#777777" }}
          >
            Skills
          </h2>

          <div className="flex flex-wrap gap-3">
            {skills.map((s, i) => (
              <span key={i} className="text-sm" style={{ color: "#333333" }}>
                {s.name}
              </span>
            ))}
          </div>
        </section>
      )}

      {/* EXPERIENCE */}
      {experience.length > 0 && (
        <section className="mb-10">
          <h2
            className="uppercase text-xs tracking-widest mb-4"
            style={{ color: "#777777" }}
          >
            Experience
          </h2>

          <div className="space-y-6">
            {experience.map((exp, i) => (
              <div key={i}>
                <p className="font-medium" style={{ color: "#111111" }}>
                  {exp.role}
                </p>

                <p className="text-sm" style={{ color: "#666666" }}>
                  {exp.company} — {exp.duration}
                </p>

                <p
                  className="text-sm mt-1"
                  style={{ color: "#555555", lineHeight: "1.6" }}
                >
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
          <h2
            className="uppercase text-xs tracking-widest mb-4"
            style={{ color: "#777777" }}
          >
            Education
          </h2>

          <div className="space-y-6">
            {education.map((edu, i) => (
              <div key={i}>
                <p className="font-medium" style={{ color: "#111111" }}>
                  {edu.degree}
                </p>

                <p className="text-sm" style={{ color: "#555555" }}>
                  {edu.institution}
                </p>

                <p className="text-sm" style={{ color: "#666666" }}>
                  {edu.duration}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* PROJECTS */}
      {projects.length > 0 && (
        <section className="mb-10">
          <h2
            className="uppercase text-xs tracking-widest mb-4"
            style={{ color: "#777777" }}
          >
            Projects
          </h2>

          <div className="space-y-6">
            {projects.map((proj, i) => (
              <div key={i}>
                <p className="font-medium" style={{ color: "#111111" }}>
                  {proj.title}
                </p>

                <p
                  className="text-sm"
                  style={{ color: "#555555", lineHeight: "1.6" }}
                >
                  {proj.description}
                </p>

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
        </section>
      )}
    </div>
  );
}
