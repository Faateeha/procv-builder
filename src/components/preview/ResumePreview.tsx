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

  switch (selected) {
    case "classic":
      return <ClassicTemplate resume={resume} />;

    case "modern":
      return <ModernTemplate resume={resume} />;

    case "minimal":
      return <MinimalTemplate resume={resume} />;

    default:
      return <ClassicTemplate resume={resume} />;
  }
}

