"use client"

import { useState } from 'react'
import { Collapse } from 'react-collapse'
import { DataTable } from "@/app/dashboard/DataTable"
import { courseColumns } from "@/app/dashboard/Columns"
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
  const [openSemesters, setOpenSemesters] = useState<number[]>([]);

  const toggleSemester = (index: number) => {
    setOpenSemesters(prev =>
      prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
    );
  }

  return (
    <div>
      {semesters.map((semester, index) => (
        <div key={index}>
          <h2 onClick={() => toggleSemester(index)} style={{ cursor: 'pointer' }}>
            Courses for {semester.term}
          </h2>
          <Collapse isOpened={openSemesters.includes(index)}>
            <DataTable columns={courseColumns} data={semester.courses} />
          </Collapse>
        </div>
      ))}
    </div>
  )
}