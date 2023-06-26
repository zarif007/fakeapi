'use client';

import * as React from 'react';
import { useTheme } from 'next-themes';

import { Icons } from '@/components/Icons';
import { Button } from '@/components/ui/Button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/DropdownMenu';
import { useRouter } from 'next/navigation';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import SignInButton from './SignInButton';
import SignOutButton from './SignOutButton';

const MenuToggle = ({ session }: any) => {
  const router = useRouter();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm">
          <Icons.Menu className="rotate-0 scale-100 transition-all hover:text-slate-900 dark:-rotate-90 dark:scale-0 dark:text-slate-400 dark:hover:text-slate-100" />
          <Icons.Menu className="absolute rotate-90 scale-0 transition-all hover:text-slate-900 dark:rotate-0 dark:scale-100 dark:text-slate-400 dark:hover:text-slate-100" />
          <span className="sr-only">Menu theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" forceMount>
        <DropdownMenuItem onClick={() => router.push('/documentation')}>
          <Icons.Scroll className="mr-2 h-4 w-4" />
          <span>Documentation</span>
        </DropdownMenuItem>
        {session && (
          <DropdownMenuItem onClick={() => router.push('/dashboard')}>
            <Icons.LayoutDashboard className="mr-2 h-4 w-4" />
            <span>Dashboard</span>
          </DropdownMenuItem>
        )}
        <DropdownMenuItem>
          {!session ? <SignInButton /> : <SignOutButton />}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default MenuToggle;
