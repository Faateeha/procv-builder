"use client";
import { ResumeData } from "@/lib/types/resume";

export default function ClassicTemplate({ resume }: { resume: ResumeData }) {
  const p = resume.personal;

  return (
    <div className="p-6 max-w-2xl bg-white text-black font-sans">
      <header className="mb-6">
        <h1 className="text-3xl font-bold">{p.fullName || "Full Name"}</h1>

        {/* HEX color instead of text-gray-600 */}
        <div style={{ color: "#666666" }} className="text-sm">
          {p.title}
        </div>

        {/* HEX instead of text-gray-500 */}
        <div style={{ color: "#999999" }} className="text-xs mt-1">
          {p.email} • {p.phone} • {p.location}
        </div>
      </header>

      {p.summary && (
        <section className="mb-4">
          <h2 className="text-sm font-semibold uppercase">Summary</h2>
          <p className="text-sm">{p.summary}</p>
        </section>
      )}

      {resume.skills.length > 0 && (
        <section className="mb-4">
          <h3 className="text-sm font-semibold uppercase">Skills</h3>
          <div className="flex flex-wrap gap-2 mt-2">
            {resume.skills.map((s, i) => (
              <span
                key={i}
                className="text-sm px-2 py-1 border rounded"
                style={{
                  borderColor: "#DDDDDD",
                }}
              >
                {s.name}
              </span>
            ))}
          </div>
        </section>
      )}

      {resume.experience.length > 0 && (
        <section className="mb-4">
          <h3 className="text-sm font-semibold uppercase">Experience</h3>
          <div className="mt-2 space-y-3">
            {resume.experience.map((e, i) => (
              <div key={i}>
                <div className="flex justify-between">
                  <strong>{e.role}</strong>

                  {/* HEX instead of text-gray-500 */}
                  <span style={{ color: "#999999" }} className="text-sm">
                    {e.duration}
                  </span>
                </div>

                {/* HEX instead of text-gray-700 */}
                <div style={{ color: "#555555" }} className="text-sm">
                  {e.company}
                </div>

                {e.description && (
                  <p className="text-sm mt-1">{e.description}</p>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {resume.projects.length > 0 && (
        <section className="mb-4">
          <h3 className="text-sm font-semibold uppercase">Projects</h3>
          <div className="mt-2 space-y-3">
            {resume.projects.map((p, i) => (
              <div key={i}>
                <div className="flex justify-between">
                  <strong>{p.title}</strong>

                  {p.link && (
                    <a
                      href={p.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm underline"
                      // HEX instead of text-blue-600
                      style={{ color: "#2563EB" }}
                    >
                      {p.link}
                    </a>
                  )}
                </div>

                {/* HEX instead of text-gray-700 */}
                <p className="text-sm mt-1" style={{ color: "#555555" }}>
                  {p.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {resume.education.length > 0 && (
        <section className="mb-4">
          <h3 className="text-sm font-semibold uppercase">Education</h3>
          <div className="mt-2 space-y-3">
            {resume.education.map((edu, i) => (
              <div key={i}>
                <div className="flex justify-between">
                  <strong>{edu.degree}</strong>

                  {/* HEX instead of text-gray-500 */}
                  <span style={{ color: "#999999" }} className="text-sm">
                    {edu.duration}
                  </span>
                </div>

                {/* HEX instead of text-gray-700 */}
                <div className="text-sm" style={{ color: "#555555" }}>
                  {edu.institution}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
