import { mergeClassNames } from '@/utils';
import { type VariantProps, cva } from 'class-variance-authority';
import { createElement } from 'react';

const textElementVariants = cva('', {
  variants: {
    variant: {
      h1: 'text-4xl md:text-4xl font-semibold',
      h2: 'md:text-3xl',
      h3: 'text-2xl md:text-2xl',
      p: 'md:text-base leading-5 text-golden-primary-dark',
    },
  },
});

export type TextElementType = 'h1' | 'h2' | 'h3' | 'p';

interface TextElementProps extends VariantProps<typeof textElementVariants> {
  className?: string;
  variant: TextElementType;
  text?: string;
}

export const TextElement = ({
  className,
  variant,
  text = '',
}: TextElementProps): JSX.Element => {
  const variantClass = mergeClassNames(
    textElementVariants({ variant, className }),
  );

  return createElement(variant, { className: variantClass }, text);
};
