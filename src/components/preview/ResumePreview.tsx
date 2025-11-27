"use client";

import { useRef } from "react";
import { useAppSelector } from "@/lib/hooks";
import ClassicTemplate from "@/components/templates/ClassicTemplate";
import ModernTemplate from "@/components/templates/ModernTemplates";
import MinimalTemplate from "@/components/templates/MinimalTemplate";
import type { ResumeData } from "@/lib/types/resume";

export default function ResumePreview() {
  const resume = useAppSelector((s) => s.resume) as ResumeData;
  const selected = useAppSelector((s) => s.ui.selectedTemplate);

  const previewRef = useRef<HTMLDivElement | null>(null);

  const Template = {
    classic: ClassicTemplate,
    modern: ModernTemplate,
    minimal: MinimalTemplate,
  }[selected || "classic"];

  return (
    <div>
      {/* preview container */}
      <div
        ref={previewRef}
        id="resume-to-print"
        className="mx-auto"
        style={{
          backgroundColor: "#FFFFFF", // safe color
          color: "#000000", // safe text
          width: "794px", // A4 width at 96dpi
          minHeight: "1123px", // A4 height at 96dpi
          padding: "32px",
        }}
      >
        <Template resume={resume} />
      </div>
    </div>
  );
}
