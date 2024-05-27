'use client';

import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import "@/app/globals.css";
import { useRouter } from 'next/navigation';

const DegreeChoosePage = () => {
  const router = useRouter();

  const handleDropdownItemClick = () => {
    router.push('/dashboard');
  };

  return (
    <div className="center-container">
      <DropdownMenu>
        <DropdownMenuTrigger className="dropdown-trigger">Choose Your Degree</DropdownMenuTrigger>
        <DropdownMenuContent className="dropdown-content">
          <DropdownMenuItem className="dropdown-item" onClick={handleDropdownItemClick}>
            Computer Engineering
          </DropdownMenuItem>
          <DropdownMenuItem className="dropdown-item" onClick={handleDropdownItemClick}>
            Computer Science
          </DropdownMenuItem>
          <DropdownMenuItem className="dropdown-item" onClick={handleDropdownItemClick}>
            Electrical Engineering
          </DropdownMenuItem>
          <DropdownMenuItem className="dropdown-item" onClick={handleDropdownItemClick}>
            Software Development
          </DropdownMenuItem>
          <DropdownMenuItem className="dropdown-item" onClick={handleDropdownItemClick}>
            Software Engineering
          </DropdownMenuItem>
          <DropdownMenuItem className="dropdown-item" onClick={handleDropdownItemClick}>
            Mathematics
          </DropdownMenuItem>
          <DropdownMenuItem className="dropdown-item" onClick={handleDropdownItemClick}>
            Mechanical Engineering
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default DegreeChoosePage;
