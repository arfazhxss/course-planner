import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Course Planner",
  description: "Plan your university courses efficiently",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="p-4 text-black">
          <h1 className="text-black font-bold">Course Planner</h1>
        </header>
        <main className="min-h-screen p-4">
          {children}
        </main>
        <footer className="p-2 text-xs text-white bg-gray-900 text-center">
          <p>&copy; 2024 Course Planner. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}