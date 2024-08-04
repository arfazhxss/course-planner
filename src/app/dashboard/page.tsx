"use client"

import { useState } from 'react'
import { DataTable } from "@/app/dashboard/DataTable"
import { semesterColumns, courseColumns } from "@/app/dashboard/Columns"
import courseData from '@/tests/data.json'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { ChevronDown, ChevronRight } from "lucide-react"

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
  const [openSemesters, setOpenSemesters] = useState<string[]>([]);

  const toggleSemester = (term: string) => {
    setOpenSemesters(prev =>
      prev.includes(term) ? prev.filter(t => t !== term) : [...prev, term]
    );
  }

  return (
    <div className="w-full sm:p-4">
      <h1 className="text-2xl font-bold mb-4">Semesters and Courses</h1>
      <div className="space-y-4">
        {semesters.map((semester) => (
          <Collapsible
            key={semester.term}
            open={openSemesters.includes(semester.term)}
            onOpenChange={() => toggleSemester(semester.term)}
          >
            <div className="flex items-center justify-between p-4 cursor-pointer bg-gray-100 rounded-t-md">
              <CollapsibleTrigger className="flex items-center w-full">
                <h2 className="text-lg font-semibold">
                  Courses for {semester.term} ({semester.session})
                </h2>
                <span className="ml-2">
                  {openSemesters.includes(semester.term) ? (
                    <ChevronDown className="h-4 w-4" />
                  ) : (
                    <ChevronRight className="h-4 w-4" />
                  )}
                </span>
              </CollapsibleTrigger>
              <span className="text-sm text-gray-500">
                {semester.courses.length} courses
              </span>
            </div>
            <CollapsibleContent>
              <div className="border rounded-b-md">
                <DataTable columns={courseColumns} data={semester.courses} />
              </div>
            </CollapsibleContent>
          </Collapsible>
        ))}
      </div>
    </div>
  )
}

{/* <div className="w-full sm:p-4">
  <h2 className="p-4">All Semesters</h2>
  <div className="rounded-md sm:border">
    <DataTable
      columns={semesterColumns}
      data={semesters}
      renderSubComponent={(semester) => (
        <Collapsible open={openSemesters.includes(semester.term)}>
          <CollapsibleTrigger onClick={() => toggleSemester(semester.term)}>
            {semester.term} - {semester.session}
          </CollapsibleTrigger>
          <CollapsibleContent>
            <DataTable columns={courseColumns} data={semester.courses} />
          </CollapsibleContent>
        </Collapsible>
      )}
    />
  </div>
</div>
  ) */}