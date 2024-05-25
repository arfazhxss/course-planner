import { Course, columns } from "@/components/columns";
import { DataTable } from "@/components/ui/data-table";

async function getData(): Promise<Course[]> {
  // Fetch data from your API here.
  return [
    {
      id: "CSC110",
      name: "Fundamentals of Programming with Engineering Applications",
    },
    {
      id: "ENGR110",
      name: "Design and Communication I",
    },
    // ...
  ]
}

export default async function DemoPage() {
  const data = await getData()

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  )
}