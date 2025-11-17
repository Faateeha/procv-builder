import PersonalForm from "@/components/forms/personalForm";

export default function EditorPage() {
  return (
    <div className="p-6 grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/*left*/}
      <div>
        <h1 className="text-2xl font-bold mb-4">Personal Information</h1>
        <PersonalForm />
      </div>

      {/*right*/}
      <div className="bg-neutral-100 dark:bg-neutral-900 rounded-xl p-6">
        <h2 className="text-xl font-medium">Live preview</h2>
        <p className="text-sm text-muted-foreground mt-2">
          We will build this in the next step
        </p>
      </div>
    </div>
  );
}
