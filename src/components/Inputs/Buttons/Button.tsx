import React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';

export interface ButtonProps {
  children?: React.ReactNode;
  asChild?: boolean;
}

export function Button(props: ButtonProps) {
  const { children, asChild } = props;

  const Component = asChild ? Slot : 'button';

  return (
    <Component className={
      clsx('py-4 px-3 bg-cyan-500 rounded font-semibold text-black text-16px w-full transition-colors hover:bg-cyan-300 focus:ring-2 ring-white')
    }>
      {children}
    </Component>
  );
}