'use client';
import * as React from 'react';
import * as AccordionPrimitive from '@radix-ui/react-accordion';

import { mergeClassNames } from '../../utils';
import { ChevronDownIcon } from '../icons';

export const Accordion = AccordionPrimitive.Root;

export const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
  // eslint-disable-next-line react/prop-types
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item ref={ref} className={className} {...props} />
));

AccordionItem.displayName = 'AccordionItem';

export const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
  // eslint-disable-next-line react/prop-types
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className='flex'>
    <AccordionPrimitive.Trigger
      ref={ref}
      // [&[data-state=open]] Target the OPEN STATE FOR STYLING
      className={mergeClassNames(
        'flex flex-1 items-center pb-1 justify-start gap-2 text-xs font-normal text-text-secondary [&[data-state=open]>svg]:rotate-180 [&[data-state=open]]:rounded-b-none',
        className,
      )}
      {...props}
    >
      {children}
      <ChevronDownIcon
        className={'shrink-0 transition-transform duration-200'}
        color={'#F9C200'}
        width={15}
        height={8}
      />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

export const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
  // eslint-disable-next-line react/prop-types
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className='overflow-hidden text-xs text-text-secondary'
    {...props}
  >
    <div className={mergeClassNames('pb-4 pt-0', className)}>{children}</div>
  </AccordionPrimitive.Content>
));

AccordionContent.displayName = AccordionPrimitive.Content.displayName;
