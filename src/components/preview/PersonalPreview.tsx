"use client";

import { useAppSelector } from "@/lib/hooks";

export default function PersonalPreview() {
    const personal = useAppSelector((state) => state.resume.personal);

    return (
        <div className="space-y-2">
            <h2 className="text-xl font-bold">{personal.fullName || "Full Name"}</h2>
            <h3 className="text-md text-muted-foreground">{personal.title || "Professional Title"}</h3>
            <p>Email: {personal.email || "email@example.com"}</p>
            <p>Phone: {personal.phone || "(123) 456-7890"}</p>
            <p>Location: {personal.location || "City, State, Country"}</p>
            <p className="mt-2">{personal.summary || "Your professional summary will appear here..."}</p>
        </div>
    );
}