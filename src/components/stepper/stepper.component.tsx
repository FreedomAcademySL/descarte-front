import React, { useEffect, useState, ReactNode } from 'react';
import './StepperMenu.css';

const left = Symbol('left');
const right = Symbol('right');

interface StepperMenuProps {
  activeStep: number;
  maxSteps: number;
  handleNext: () => void;
  handleBack: () => void;
  children: ReactNode | ReactNode[];
}

export const StepperMenu: React.FC<StepperMenuProps> = ({
  activeStep,
  maxSteps,
  handleNext,
  handleBack,
  children,
}: StepperMenuProps): JSX.Element => {
  const [steps, setSteps] = useState<ReactNode[]>([]);
  const [animateDirection, setAnimateDirection] = useState<
    typeof left | typeof right | null
  >(null);
  const [prevActiveStep, setPrevActiveStep] = useState(0);

  const handleAnimation = () => {
    if (animateDirection === left) {
      return (
        <div
          key={`${activeStep}-${animateDirection.toString()}`}
          className='animate__animated animate__slideOutLeft bg-gray-400 mb-4 p-2 absolute top-0 left-0 bottom-0 right-0 w-full h-full'
        >
          {steps[activeStep - 1]}
        </div>
      );
    }
    if (animateDirection === right) {
      return (
        <div
          key={`${activeStep}-${animateDirection.toString()}`}
          className='animate__animated animate__slideOutRight bg-gray-400 mb-4 p-2 absolute top-0 left-0 bottom-0 right-0 w-full h-full'
        >
          {steps[activeStep + 1]}
        </div>
      );
    }
  };

  useEffect(() => {
    setSteps(React.Children.toArray(children));
  }, [children]);

  useEffect(() => {
    if (prevActiveStep > activeStep) {
      setAnimateDirection(right);
    }
    if (prevActiveStep < activeStep) {
      setAnimateDirection(left);
    }
    setPrevActiveStep(activeStep);
  }, [activeStep]);

  return (
    <div className='flex flex-col gap-2 flex-row justify-between p-3 rounded-xl'>
      <div className='border-radius bg-gray-400  relative rounded-xl p16 w-full border-box'>
        {handleAnimation()}
        <div
          key={activeStep}
          className='delay__entrance animate__animated w-full mb-4 p-2 rounded-xl'
        >
          {steps[activeStep]}
        </div>
      </div>
      <div className='flex flex-row justify-between'>
        <button
          className={`transition-opacity py-4 px-6 bg-gray-400 rounded-md ${activeStep === 0 ? 'opacity-0 cursor-default ' : ''}`}
          onClick={handleBack}
        >
          back
        </button>
        <button
          className={`transition-opacity py-4 px-6 bg-gray-400 rounded-md ${maxSteps === activeStep ? 'opacity-0 cursor-default' : ''} `}
          onClick={handleNext}
        >
          next
        </button>
      </div>
    </div>
  );
};
