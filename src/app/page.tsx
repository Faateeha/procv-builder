"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";

export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-6 py-20">
      <div className="text-center max-w-xl">
        <h1 className="text-4xl font-bold tracking-tight">ProCV Builder</h1>
        <p className="text-muted-foreground mt-3 text-lg">Build a professional resume with AI-assisted suggestions, clean templates and instant PDF export.</p>

        <div className="mt-6">
          <Link  href="/builder">
            <Button size="lg">Start Building</Button>
          </Link>
            
        </div>
      </div>

      <div className="mt-16 w-full max-w-2xl">
        <Card>
          <CardHeader>
            <CardTitle>Why ProCV Builder?</CardTitle>
            </CardHeader>
          <CardContent className="space-y-3">
            <p>• Create sections for Personal Info, Skills, Projects, Experience, Education</p>
            <p>•Live Preview your resume</p>
            <p>•AI suggestions (later)</p>
            <p>•Export to PDF</p>
          </CardContent>
            </Card>
      </div>
    </main>
  )
}