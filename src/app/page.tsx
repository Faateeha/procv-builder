

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {Card, CardContent, CardHeader, CardTitle, CardDescription} from "@/components/ui/card";

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 py-20 bg-linear-to-b from-white to ray-50">
      <section className="text-center max-w-3xl mx-auto">
        <h1 className="text-5xl font-bold tracking-tight">Build Your professional Resume in Minutes</h1>
        <p className="text-muted-foreground mb-8 text-lg"> AI-assisted resume builder with clean templates, live preview, and instant PDF export.</p>

        
          <Link  href="/builder">
            <Button size="lg" variant="default">Start Building</Button>
          </Link>
            
      </section>

      <section className="mt-20 w-full max-w-5xl grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        <Card className="hover:shadow-lg transition-shadow duration-200">
          <CardHeader>
            <CardTitle>Personal Info</CardTitle>
            </CardHeader>
          <CardContent>
            <CardDescription>Add your name, title, email, phone, and location in a structured way.</CardDescription>
          </CardContent>
            </Card>

             <Card className="hover:shadow-lg transition-shadow duration-200">
          <CardHeader>
            <CardTitle>Live Preview</CardTitle>
            </CardHeader>
          <CardContent>
            <CardDescription>See a live preview of your resume as you build it.</CardDescription>
          </CardContent>
            </Card>

             <Card className="hover:shadow-lg transition-shadow duration-200">
          <CardHeader>
            <CardTitle>AI Suggestions</CardTitle>
            </CardHeader>
          <CardContent>
            <CardDescription>Get AI-powered suggestions to improve your resume content and format.</CardDescription>
          </CardContent>
            </Card>

             <Card className="hover:shadow-lg transition-shadow duration-200">
          <CardHeader>
            <CardTitle>Export to PDF</CardTitle>
            </CardHeader>
          <CardContent>
            <CardDescription>Download a polished, ATS-friendly PDF resume with one click.</CardDescription>
          </CardContent>
            </Card>
      </section>

      {/*CTA Section */}
      <section className="mt-20 text-center">
        <p className="text-lg mb-4">Ready to create your resume? Start now and make a professional impression!</p>
        <Link href="/builder">
          <Button size="lg" variant="default">Start Building</Button>
        </Link>
      </section>
    </main>
  )
}