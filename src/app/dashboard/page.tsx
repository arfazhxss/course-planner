"use client"

import { DataTable } from "@/app/dashboard/DataTable"
import { courseColumns } from "@/app/dashboard/columns"
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
      {semesters.map((semester, index) => (
        <div key={index}>
          <h2>Courses for {semester.term}</h2>
          <DataTable columns={courseColumns} data={semester.courses} />
        </div>
      ))}
    </div>
  )
}
