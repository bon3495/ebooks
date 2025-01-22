'use client';

import { useState } from 'react';

import { CheckIcon } from '@/components/icons/check-icon';
import { CopyIcon } from '@/components/icons/copy-icon';
import { Button, ButtonProps } from '@/components/ui/button';

interface CopyButtonProps extends ButtonProps {
  text: string;
}

export const CopyButton = ({ text, ...props }: CopyButtonProps) => {
  const [isCopied, setIsCopied] = useState(false);

  const copy = async () => {
    await navigator.clipboard.writeText(text);
    setIsCopied(true);

    setTimeout(() => {
      setIsCopied(false);
    }, 10000);
  };

  return (
    <Button
      {...props}
      size="icon"
      disabled={isCopied || props.disabled}
      onClick={copy}
      className="bg-transparent hover:bg-blue-gray"
    >
      {isCopied ? <CheckIcon /> : <CopyIcon />}
    </Button>
  );
};
