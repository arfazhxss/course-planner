import Link from 'next/link';

export default function Home() {
  return (
    <div className="container mx-auto">
      <h2 className="text-xl font-semibold mb-4">Welcome to Course Planner</h2>
      <p className="mb-4">Plan your academic journey with ease.</p>

      {/* Placeholder for the table */}
      <div className="border border-gray-300 p-4 mb-4">
        <p className="text-center text-gray-500">
          [Table with course planning data will be displayed here]
        </p>
      </div>

      <Link href="/dashboard" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        Go to Dashboard
      </Link>
    </div>
  );
}