// import YearAccordion from "./year-accordion"

// export default function Home() {
//   return (
//     <YearAccordion />
//   );
// }

import React from 'react';
import YearAccordion from './year-accordion';
import ProgressBar from '@/components/ProgressBar';

export default function Home() {
  return (
    <div>
      <ProgressBar progress={0} /> {/* Set the progress value as needed */}
      <YearAccordion />
    </div>
  );
}

