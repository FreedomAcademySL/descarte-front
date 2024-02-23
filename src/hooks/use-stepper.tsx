import { useState } from 'react';

export function useStepper(initialStep: number = 0): {
  activeStep: number;
  handleNext: (maxSteps: number) => void;
  handleBack: () => void;
} {
  const [activeStep, setActiveStep] = useState<number>(initialStep);

  const handleNext = (maxSteps: number): void => {
    if (activeStep === maxSteps) return;
    setActiveStep((prevActiveStep: number) => prevActiveStep + 1);
  };

  const handleBack = (): void => {
    if (activeStep === 0) return;
    setActiveStep((prevActiveStep: number) => prevActiveStep - 1);
    console.log(activeStep);
  };

  return { activeStep, handleNext, handleBack };
}
