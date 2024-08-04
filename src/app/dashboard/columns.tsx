"use client"

import { ColumnDef } from "@tanstack/react-table"

// Define the shape of your data
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

// Define columns for the semester table
// export const semesterColumns: ColumnDef<Semester>[] = [
//     {
//         accessorKey: "term",
//         header: "Term",
//     },
//     {
//         accessorKey: "session",
//         header: "Session",
//     },
//     {
//         accessorKey: "courses",
//         header: "Number of Courses",
//         cell: ({ row }) => row.original.courses.length,
//     },
// ]

// Define columns for the course table
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