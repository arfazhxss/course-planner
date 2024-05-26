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
    <div className="flex justify-center items-center h-screen" onClick={handleDropdownItemClick}>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        <h1>CLICK ME</h1>
      </button>
    </div>

  );
}