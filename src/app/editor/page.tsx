"use client";
import ClientProvider from "@/components/ClientProvider";
import PersonalForm from "@/components/forms/personalForm";
import PersonalPreview from "@/components/preview/PersonalPreview";

export default function EditorPage() {
  return (
    <ClientProvider>
        <div className="p-6 grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/*left*/}
      <div>
        <h1 className="text-2xl font-bold mb-4">Personal Information</h1>
        <PersonalForm />
      </div>

      {/*right*/}
      <div className="bg-neutral-100 dark:bg-neutral-900 rounded-xl p-6">
        <h2 className="text-xl font-medium">Live preview</h2>
        <PersonalPreview />
      </div>
    </div>
    </ClientProvider>
  );
}
