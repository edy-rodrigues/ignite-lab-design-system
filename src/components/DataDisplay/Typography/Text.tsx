import React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';

type TextSize = 'sm' | 'md' | 'lg';

export interface TextProps {
  size?: TextSize;
  children?: React.ReactNode;
  asChild?: boolean;
}

export function Text(props: TextProps) {
  const { size = 'md', children, asChild } = props;

  const Component = asChild ? Slot : 'span';

  return (
    <Component className={
      clsx('text-gray-100 font-sans', {
        'text-14px': size === 'sm',
        'text-16px': size === 'md',
        'text-18px': size === 'lg',
      })
    }>
      {children}
    </Component>
  );
}