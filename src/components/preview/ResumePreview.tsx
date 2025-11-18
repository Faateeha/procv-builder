"use client";

import { useAppSelector } from "@/lib/hooks";

export default function ResumePreview() {
  const { personal, skills, projects, experience, education } = useAppSelector(
    (state) => state.resume
  );

  return (
    <div className="p-6 max-w-lg mx-auto bg-white dark:bg-gray-900 rounded-lg shadow">
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold">
          {personal.fullName || "Full Name"}
        </h1>
        <h2 className="text-xl text-gray-500 dark:text-gray-400">
          {personal.title || "Professional Title"}
        </h2>
        <p className="mt-2 text-gray-600 dark:text-gray-300">
          {personal.email} | {personal.phone} | {personal.location}
        </p>
         {personal.summary && (
        <div className="mb-4">
          <h3 className="font-semibold text-lg border-b pb-1 mb-2">Summary</h3>
          <p className="text-gray-700 dark:text-gray-300">{personal.summary}</p>
        </div>
      )}
      </div>

      {/*skills*/}
      {skills.length > 0 && (
        <div className="mb-4">
          <h3 className="font-semibold text-lg border-b pb-1 mb-2">Skills:</h3>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, i) => (
              <span
                key={i}
                className="bg-blue-100 text-blue-800 dark:bg-blue-800 dark:text-blue-100 px-2 py-1 rounded"
              >
                {skill.name}
              </span>
            ))}
          </div>
        </div>
      )}

      {/*projects*/}
      {projects.length > 0 && (
        <div className="mb-4">
          <h3 className="font-semibold text-lg border-b pb-1 mb-2">Projects:</h3>
          {projects.map((proj, i) => (
            <div key={i} className="mb-2">
              <h4 className="font-semibold">{proj.title}</h4>
              <p className="text-gray-700 dark:text-gray-300">{proj.description}</p>
              {proj.link && (
                <a
                  href={proj.link}
                  className="text-blue-600 dark:text-blue-400 underline text-sm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {proj.link}
                </a>
              )}
            </div>
          ))}
        </div>
      )}

      {/*experience*/}
      {experience.length > 0 && (
        <div className="mb-4">
          <h3 className="font-semibold text-lg border-b pb-1 mb-2">Experience:</h3>
          {experience.map((exp, i) => (
            <div key={i} className="mb-2">
              <h4 className="font-semibold">{exp.role} at {exp.company}</h4> 
              <span className="text-gray-500 text-sm">
                 ({exp.duration})
              </span>
              <p className="text-gray-700 dark:text-gray-300">{exp.description}</p>
            </div>
          ))}
        </div>
      )}

      {/*education*/}
      {education.length > 0 && (
        <div className="mb-4">
          <h3 className="font-semibold text-lg border-b pb-1 mb-2">Education:</h3>
          {education.map((edu, i) => (
            <div key={i} className="mb-2">
              <h4 className="font-semibold">{edu.degree}</h4> 
              <span className="text-gray-500 text-sm">{edu.institution} |({edu.duration})</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
