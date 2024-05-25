import { Course, columns } from "./columns";
import { DataTable } from "@/components/ui/data-table";

async function getData(): Promise<Course[]> {
  // Fetch data from your API here.
  return [
    {
      id: "SENG321",
      name: "Requirements Engineering",
    },
    
    // ...
  ]
}

export default async function Y3Courses() {
  const data = await getData()

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  )
}