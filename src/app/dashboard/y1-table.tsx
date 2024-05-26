import { Course, columns } from "./columns";
import { DataTable } from "@/components/ui/data-table";

async function getData(): Promise<Course[]> {
  // Fetch data from your API here.
  return [
    {
      id: "CSC111",
      name: "Fundamentals of Programming with Engineering Applications",
      terms: [true, true, false],
      units: 1.5,
    },
    {
      id: "ENGR110",
      name: "Design and Communication I",
      terms: [true, false, false],
      units: 2.5,
    },
    {
      id: "ENGR130",
      name: "Introduction to Professional Practice",
      terms: [true, true, false],
      units: 0.5,
    },
    {
      id: "MATH100",
      name: "Calculus I",
      terms: [true, true, true],
      units: 1.5,
    },
    {
      id: "MATH110",
      name: "Matrix Algebra for Engineers",
      terms: [true, false, false],
      units: 1.5,
    },
    {
      id: "PHYS110",
      name: "Introductory Physics I",
      terms: [true, false, false],
      units: 1.5,
    },
    {
      id: "CSC115",
      name: "Fundamentals of Programming II",
      terms: [true, true, true],
      units: 1.5,
    },
    {
      id: "ENGR120",
      name: "Design and Communication II",
      terms: [false, true, false],
      units: 2.5,
    },
    {
      id: "MATH101",
      name: "Calculus II",
      terms: [true, true, true],
      units: 1.5,
    },
    {
      id: "CHEM150",
      name: "Engineering Chemistry",
      terms: [false, true, false],
      units: 1.5,
    }
    // ...
  ]
}

export default async function Y1Courses() {
  const data = await getData()

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  )
}