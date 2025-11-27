"use client";

import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";
import type { ResumeData } from "@/lib/types/resume";
import { useAppSelector } from "@/lib/hooks";


const styles = StyleSheet.create({
  page: { padding: 35, fontSize: 11, lineHeight: 1.4, fontFamily: "Helvetica" },
  section: { marginBottom: 16 },
  heading: { fontSize: 18, marginBottom: 6, fontWeight: "bold" },
  subHeading: { fontSize: 13, marginBottom: 4, fontWeight: "bold" },
  text: { marginBottom: 2 },
  listItem: {marginLeft: 10, marginBottom:2,},
});

export default function ResumePDF({ resume }: { resume: ResumeData }) {
    const selected = useAppSelector((s) => s.ui.selectedTemplate);

    const colors = {
        classic : "#000000",
        modern  : "#1F2937",
        minimal : "#444444",
    } [selected || "classic"];
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* PERSONAL INFO */}
        <View style={styles.section}>
          <Text style={[styles.heading, { color: colors }]}>
            {resume.personal.fullName}
          </Text>
          <Text>{resume.personal.title}</Text>
          <Text>{resume.personal.email}</Text>
          <Text>{resume.personal.phone}</Text>
          {resume.personal.location && (
            <Text>{resume.personal.location}</Text>
          )}
        </View>

        {/* SUMMARY */}
        {resume.personal.summary && (
          <View style={styles.section}>
            <Text style={[styles.subHeading, { color: colors }]}>
              Summary
            </Text>
            <Text>{resume.personal.summary}</Text>
          </View>
        )}

        {/* SKILLS */}
        {resume.skills?.length > 0 && (
          <View style={styles.section}>
            <Text style={[styles.subHeading, { color: colors }]}>
              Skills
            </Text>
            {resume.skills.map((skill, i) => (
              <Text key={i} style={styles.listItem}>• {skill}</Text>
            ))}
          </View>
        )}

        {/* EXPERIENCE */}
        {resume.experience?.length > 0 && (
          <View style={styles.section}>
            <Text style={[styles.subHeading, { color: colors }]}>
              Experience
            </Text>

            {resume.experience.map((exp, i) => (
              <View key={i} style={{ marginBottom: 8 }}>
                <Text style={{ fontWeight: "bold" }}>{exp.role}</Text>
                <Text>{exp.company} — {exp.duration}</Text>
                <Text>{exp.description}</Text>
              </View>
            ))}
          </View>
        )}

        {/* PROJECTS */}
        {resume.projects?.length > 0 && (
          <View style={styles.section}>
            <Text style={[styles.subHeading, { color: colors }]}>
              Projects
            </Text>

            {resume.projects.map((p, i) => (
              <View key={i} style={{ marginBottom: 8 }}>
                <Text style={{ fontWeight: "bold" }}>{p.title}</Text>
                <Text>{p.description}</Text>
                <Text>{p.link}</Text>
              </View>
            ))}
          </View>
        )}

        {/* EDUCATION */}
        {resume.education?.length > 0 && (
          <View style={styles.section}>
            <Text style={[styles.subHeading, { color: colors }]}>
              Education
            </Text>

            {resume.education.map((edu, i) => (
              <View key={i} style={{ marginBottom: 8 }}>
                <Text style={{ fontWeight: "bold" }}>{edu.degree}</Text>
                <Text>{edu.institution} — {edu.duration}</Text>
              </View>
            ))}
          </View>
        )}
      </Page>
    </Document>
  );
}
