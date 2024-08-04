"use client"

import { DataTable } from "@/app/dashboard/DataTable"
import { semesterColumns, courseColumns } from "@/app/dashboard/Columns"
import courseData from '@/tests/data.json'

type Course = {
  courseCode: string
  courseName: string
  courseType: "Mandatory" | "Elective"
  unit: number
}

type Semester = {
  term: string
  session: "Fall" | "Spring" | "Summer"
  courses: Course[]
}

export default function CoursePage() {
  const semesters: Semester[] = courseData as Semester[];

  return (
    <div>
      <h1>Semesters</h1>
      <DataTable columns={semesterColumns} data={semesters} />

      <h2>Courses for {semesters[0].term}</h2>
      <DataTable columns={courseColumns} data={semesters[0].courses} />
    </div>
  )
}