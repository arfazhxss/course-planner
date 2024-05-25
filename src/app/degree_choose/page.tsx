import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const DegreeChoosePage = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>Choose Your Course</DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>Software Engineering</DropdownMenuItem>
        <DropdownMenuItem>Computer Engineering</DropdownMenuItem>
        <DropdownMenuItem>Computer Science</DropdownMenuItem>
        <DropdownMenuItem>Electrical Engineering</DropdownMenuItem>
        <DropdownMenuItem>Mechanical Engineering</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DegreeChoosePage;
