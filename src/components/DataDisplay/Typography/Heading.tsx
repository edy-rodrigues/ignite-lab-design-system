import React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';

type HeadingSize = 'sm' | 'md' | 'lg';

export interface HeadingProps {
  size?: HeadingSize;
  children?: React.ReactNode;
  asChild?: boolean;
}

export function Heading(props: HeadingProps) {
  const { size = 'md', children, asChild } = props;

  const Component = asChild ? Slot : 'h2';

  return (
    <Component className={
      clsx('text-gray-100 font-bold font-sans', {
        'text-20px': size === 'sm',
        'text-24px': size === 'md',
        'text-32px': size === 'lg',
      })
    }>
      {children}
    </Component>
  );
}