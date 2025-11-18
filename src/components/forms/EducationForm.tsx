"use client";

import { useForm, Controller } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { addEducation, removeEducation } from "@/store/resumeSlice";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function EducationForm() {
  const dispatch = useAppDispatch();
  const education = useAppSelector((state) => state.resume.education);

  const { control, handleSubmit, reset } = useForm<{ institution: string; degree: string; duration: string }>({
    defaultValues: { institution: "", degree: "", duration: "" },
  });

  const onSubmit = (data: { institution: string; degree: string; duration: string }) => {
    if (!data.institution.trim() || !data.degree.trim()) return;
    dispatch(addEducation(data));
    reset({ institution: "", degree: "", duration: "" });
  };

  return (
    <div className="space-y-4">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-2">
        <Controller name="institution" control={control} render={({ field }) => <Input placeholder="Institution" {...field} />} />
        <Controller name="degree" control={control} render={({ field }) => <Input placeholder="Degree" {...field} />} />
        <Controller name="duration" control={control} render={({ field }) => <Input placeholder="Duration" {...field} />} />
        <Button type="submit">Add Education</Button>
      </form>

      <ul className="space-y-1">
        {education.map((edu, i) => (
          <li key={i} className="flex justify-between items-start bg-gray-100 dark:bg-gray-800 rounded p-2">
            <div>
              <h4 className="font-semibold">{edu.degree}</h4>
              <span className="text-gray-500 text-sm">{edu.institution} | {edu.duration}</span>
            </div>
            <Button size="sm" variant="ghost" onClick={() => dispatch(removeEducation(i))}>Remove</Button>
          </li>
        ))}
      </ul>
    </div>
  );
}
