"use client";

import { pdf } from "@react-pdf/renderer";
import ResumePDF from "@/components/ResumePDF";
import { useAppSelector } from "@/lib/hooks"; // <-- get data from Redux

export default function DownloadPDF() {
  const resume = useAppSelector((s) => s.resume); // <-- resume comes from store

  const downloadPDF = async () => {
    const blob = await pdf(<ResumePDF resume={resume} />).toBlob();
    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = "resume.pdf";
    link.click();
  };

  return (
    <button
      onClick={downloadPDF}
      className="px-4 py-2 bg-black text-white rounded mb-4"
    >
      Download PDF
    </button>
  );
}
