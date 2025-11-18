"use client";

import { useForm, Controller } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { addSkill, removeSkill } from "@/store/resumeSlice";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function SkillsForm() {
  const dispatch = useAppDispatch();
  const skills = useAppSelector((state) => state.resume.skills);

  const { control, handleSubmit, reset } = useForm<{ skill: string }>({
    defaultValues: { skill: "" },
  });

  const onSubmit = (data: { skill: string }) => {
    if (!data.skill.trim()) return;
    dispatch(addSkill({ name: data.skill }));
    reset({ skill: "" });
  };

  return (
    <div className="space-y-4">
      <form onSubmit={handleSubmit(onSubmit)} className="flex gap-2">
        <Controller
          name="skill"
          control={control}
          render={({ field }) => <Input placeholder="Add a skill" {...field} />}
        />
        <Button type="submit">Add</Button>
      </form>

      <ul className="space-y-1">
        {skills.map((skill, index) => (
          <li
            key={index}
            className="flex justify-between items-center bg-gray-100 dark:bg-gray-800 rounded p-2"
          >
            <span>{skill.name}</span>
            <Button size="sm" variant="ghost" onClick={() => dispatch(removeSkill(index))}>
              Remove
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
}
