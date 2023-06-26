'use client';

import React, { ButtonHTMLAttributes, FC } from 'react';
import { Button } from './Button';
import { toast } from './Toast';
import { cn } from '@/lib/utils';
import { Copy } from 'lucide-react';

interface CopyButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  valueToCopy: string;
}

const CopyButton: FC<CopyButtonProps> = ({
  valueToCopy,
  className,
  ...props
}) => {
  return (
    <Button
      {...props}
      type="button"
      onClick={() => {
        navigator.clipboard.writeText(valueToCopy);

        toast({
          title: 'Copied',
          message: 'API key copied to clipboard',
          type: 'success',
        });
      }}
      variant="ghost"
      className={cn('', className)}
    >
      <Copy className="h-5 w-5" />
    </Button>
  );
};

export default CopyButton;
