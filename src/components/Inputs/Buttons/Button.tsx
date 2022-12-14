import React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  asChild?: boolean;
}

export function Button(props: ButtonProps) {
  const { children, asChild, className, ...rest } = props;

  const Component = asChild ? Slot : 'button';

  return (
    <Component className={
      clsx('py-3 px-4 bg-cyan-500 rounded font-semibold text-black text-16px w-full transition-colors hover:bg-cyan-300 focus:ring-2 ring-white', className)
    } {...rest}>
      {children}
    </Component>
  );
}