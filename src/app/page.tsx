"use client";

import Image from "next/image";
import { useRouter } from 'next/navigation';
import { Button } from "@/components/ui/button";

export default function Home() {
  const router = useRouter();
  const handleDropdownItemClick = () => {
    router.push('/auth/login');
  };
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="text-center">
        <h1 className="text-6xl font-bold">UVIC Course Progressor</h1>
        <button
          className="bg-blue-500 hover:bg-blue-7000 text-white font-bold py-2 px-4 rounded mt-8"
          onClick={handleDropdownItemClick}
        >
          START
        </button>
      </div>
    </div>
  );
}