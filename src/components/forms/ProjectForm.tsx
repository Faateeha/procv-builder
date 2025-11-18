"use client";

import { useForm, Controller } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { addProject, removeProject } from "@/store/resumeSlice";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ProjectsForm() {
  const dispatch = useAppDispatch();
  const projects = useAppSelector((state) => state.resume.projects);

  const { control, handleSubmit, reset } = useForm<{ title: string; description: string; link: string }>({
    defaultValues: { title: "", description: "", link: "" },
  });

  const onSubmit = (data: { title: string; description: string; link: string }) => {
    if (!data.title.trim()) return;
    dispatch(addProject(data));
    reset({ title: "", description: "", link: "" });
  };

  return (
    <div className="space-y-4">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-2">
        <Controller
          name="title"
          control={control}
          render={({ field }) => <Input placeholder="Project Title" {...field} />}
        />
        <Controller
          name="description"
          control={control}
          render={({ field }) => <Textarea placeholder="Project Description" {...field} />}
        />
        <Controller
          name="link"
          control={control}
          render={({ field }) => <Input placeholder="Project Link (optional)" {...field} />}
        />
        <Button type="submit">Add Project</Button>
      </form>

      <ul className="space-y-1">
        {projects.map((p, i) => (
          <li key={i} className="flex justify-between items-start bg-gray-100 dark:bg-gray-800 rounded p-2">
            <div>
              <h4 className="font-semibold">{p.title}</h4>
              <p className="text-gray-700 dark:text-gray-300">{p.description}</p>
              {p.link && (
                <a href={p.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 underline text-sm">
                  {p.link}
                </a>
              )}
            </div>
            <Button size="sm" variant="ghost" onClick={() => dispatch(removeProject(i))}>Remove</Button>
          </li>
        ))}
      </ul>
    </div>
  );
}
