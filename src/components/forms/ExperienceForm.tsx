"use client";

import { useForm, Controller } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { addExperience, removeExperience } from "@/store/resumeSlice";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ExperienceForm() {
  const dispatch = useAppDispatch();
  const experience = useAppSelector((state) => state.resume.experience);

  const { control, handleSubmit, reset } = useForm<{ company: string; role: string; duration: string; description: string }>({
    defaultValues: { company: "", role: "", duration: "", description: "" },
  });

  const onSubmit = (data: { company: string; role: string; duration: string; description: string }) => {
    if (!data.company.trim() || !data.role.trim()) return;
    dispatch(addExperience(data));
    reset({ company: "", role: "", duration: "", description: "" });
  };

  return (
    <div className="space-y-4">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-2">
        <Controller name="company" control={control} render={({ field }) => <Input placeholder="Company" {...field} />} />
        <Controller name="role" control={control} render={({ field }) => <Input placeholder="Role" {...field} />} />
        <Controller name="duration" control={control} render={({ field }) => <Input placeholder="Duration" {...field} />} />
        <Controller name="description" control={control} render={({ field }) => <Textarea placeholder="Description" {...field} />} />
        <Button type="submit">Add Experience</Button>
      </form>

      <ul className="space-y-1">
        {experience.map((e, i) => (
          <li key={i} className="flex justify-between items-start bg-gray-100 dark:bg-gray-800 rounded p-2">
            <div>
              <h4 className="font-semibold">{e.role} @ {e.company}</h4>
              <span className="text-gray-500 text-sm">{e.duration}</span>
              <p className="text-gray-700 dark:text-gray-300">{e.description}</p>
            </div>
            <Button size="sm" variant="ghost" onClick={() => dispatch(removeExperience(i))}>Remove</Button>
          </li>
        ))}
      </ul>
    </div>
  );
}
