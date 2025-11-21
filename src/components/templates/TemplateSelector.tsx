"use client";

import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { setTemplate } from "@/store/uiSlice";
import type { TemplateKey } from "@/store/uiSlice";
import { Button } from "@/components/ui/button";

export default function TemplateSelector() {
  const dispatch = useAppDispatch();
  const selected = useAppSelector((s) => s.ui.selectedTemplate);

  const templates: TemplateKey[] = ["classic", "modern", "minimal"];

  return (
    <div className="flex gap-2 items-center">
      {templates.map((t) => (
        <Button
          key={t}
          variant={selected === t ? "default" : "ghost"}
          onClick={() => dispatch(setTemplate(t))}
        >
          {t[0].toUpperCase() + t.slice(1)}
        </Button>
      ))}
    </div>
  );
}
