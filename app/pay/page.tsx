'use client'

import { MultiStepLoader } from "@/components/ui/multi-step-loader";
import { useState,useEffect } from "react";
import { MaskedDiv } from "@/components/maskedDiv";

const loadingStates = [
  {
    text: "Welcome",
  },
  {
    text: "Loading Data",
  },
  {
    text: "Everything is Good",
  },
  
];

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false); 
    }, 6000); 

    return () => clearTimeout(timeout);
  }, []);
  return (
    <main>
     <MultiStepLoader loadingStates={loadingStates} loading={isLoading} duration={2000}/>

    <MaskedDiv />
    </main>
  );
}
