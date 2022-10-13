import React, { HTMLAttributes } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';

export interface TextInputRootProps extends HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

function TextInputRoot(props: TextInputRootProps) {
  const { children, ...rest } = props;

  return (
    <div className={
      clsx('flex items-center gap-3 py-4 px-3 h-12 rounded bg-gray-800 w-full focus-within:ring-2 ring-cyan-300')
    } {...rest}>
      {children}
    </div>
  );
}

TextInputRoot.displayName = 'TextInput.Root';

interface TextInputIconProps {
  children?: React.ReactNode;
}

function TextInputIcon(props: TextInputIconProps) {
  const { children } = props;

  return (
    <Slot className="w-6 h-6 text-gray-400">
      {children}
    </Slot>
  );
}

TextInputIcon.displayName = 'TextInput.Icon';

export interface TextInputBaseProps extends HTMLAttributes<HTMLInputElement> {}

function TextInputBase(props: TextInputBaseProps) {
  const { ...rest } = props;

  return <input className="bg-transparent flex-1 text-gray-100 text-14px outline-none placeholder:text-gray-400" {...rest} />;
}

TextInputBase.displayName = 'TextInput.Input';

export const TextInput = {
  Icon: TextInputIcon,
  Input: TextInputBase,
  Root: TextInputRoot,
}