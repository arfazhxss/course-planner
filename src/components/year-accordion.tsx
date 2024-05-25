import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion";
  
  export default function YearAccordion() {
    return (
      <Accordion type="multiple" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>Year 1</AccordionTrigger>
          <AccordionContent>
            Course
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Year 2</AccordionTrigger>
          <AccordionContent>Course Course Course</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Year 3</AccordionTrigger>
          <AccordionContent>Course Course Course</AccordionContent>
        </AccordionItem>
      </Accordion>
    );
  }
  