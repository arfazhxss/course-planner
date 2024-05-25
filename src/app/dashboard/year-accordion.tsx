import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion";
  import Y1Courses from "./y1-table";
  import Y2Courses from "./y2-table";
  import Y3Courses from "./y3-table";
  import Y4Courses from "./y4-table";
  
  export default function YearAccordion() {
    return (
      <Accordion type="multiple" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>Year 1</AccordionTrigger>
          <AccordionContent>
            <Y1Courses />
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger>Year 2</AccordionTrigger>
          <AccordionContent>
            <Y2Courses />
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
          <AccordionTrigger>Year 3</AccordionTrigger>
          <AccordionContent>
            <Y3Courses />
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-4">
          <AccordionTrigger>Year 4</AccordionTrigger>
          <AccordionContent>
            <Y4Courses />
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    );
  }
  