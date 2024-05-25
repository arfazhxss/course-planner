import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import "@/app/globals.css"; // Ensure this path is correct

const DegreeChoosePage = () => {
  return (
    <div className="center-container">
      <DropdownMenu>
        <DropdownMenuTrigger className="dropdown-trigger">Choose Your Course</DropdownMenuTrigger>
        <DropdownMenuContent className="dropdown-content">
          <DropdownMenuItem className="dropdown-item">Software Engineering</DropdownMenuItem>
          <DropdownMenuItem className="dropdown-item">Computer Engineering</DropdownMenuItem>
          <DropdownMenuItem className="dropdown-item">Computer Science</DropdownMenuItem>
          <DropdownMenuItem className="dropdown-item">Electrical Engineering</DropdownMenuItem>
          <DropdownMenuItem className="dropdown-item">Mechanical Engineering</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default DegreeChoosePage;
