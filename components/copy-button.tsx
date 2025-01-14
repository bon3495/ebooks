'use client';

import { useState } from 'react';
import { Check, Copy } from 'lucide-react';

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
      className="hover:bg-blue-gray bg-transparent"
    >
      {isCopied ? <Check size={24} /> : <Copy />}
    </Button>
  );
};
