import { Course, columns } from "./columns";
import { DataTable } from "@/components/ui/data-table";

async function getData(): Promise<Course[]> {
  // Fetch data from your API here.
  return [
    {
      id: "SENG499",
      name: "Design Project II",
      terms: [false, false, true],
      units: 1.5,
    },
    
    // ...
  ]
}

export default async function Y4Courses() {
  const data = await getData()

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  )
}