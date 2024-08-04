"use client"

import { ColumnDef } from "@tanstack/react-table"
import { ChevronDown, ChevronRight } from "lucide-react"

export type Course = {
    courseCode: string
    courseName: string
    courseType: "Mandatory" | "Elective"
    unit: number
}

export type Semester = {
    term: string
    session: "Fall" | "Spring" | "Summer"
    courses: Course[]
}

export const semesterColumns: ColumnDef<Semester>[] = [
    {
        id: "expander",
        header: () => null,
        cell: ({ row }) => {
            return row.getCanExpand() ? (
                <button
                    {...{
                        onClick: row.getToggleExpandedHandler(),
                        style: { cursor: "pointer" },
                    }}
                >
                    {row.getIsExpanded() ? <ChevronDown /> : <ChevronRight />}
                </button>
            ) : null
        },
    },
    {
        accessorKey: "term",
        header: "Term",
    },
    {
        accessorKey: "session",
        header: "Session",
    },
    {
        accessorKey: "courses",
        header: "Number of Courses",
        cell: ({ row }) => row.original.courses.length,
    },
]

export const courseColumns: ColumnDef<Course>[] = [
    {
        accessorKey: "courseCode",
        header: "Course Code",
    },
    {
        accessorKey: "courseName",
        header: "Course Name",
    },
    {
        accessorKey: "courseType",
        header: "Type",
    },
    {
        accessorKey: "unit",
        header: "Units",
    },
]