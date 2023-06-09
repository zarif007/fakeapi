import { db } from '@/lib/db';
import React from 'react';
import LargeHeading, { headingVariants } from '../ui/LargeHeading';
import { notFound } from 'next/navigation';
import ApiDashboard from '../dashboard/ApiDashboard.Page';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { ProjectInterface } from '@/types/generator';

const GnTopbar = async ({ project }: { project: ProjectInterface }) => {
  const user = await getServerSession(authOptions);

  if (!user) notFound();

  return (
    <div className="mb-12">
      <LargeHeading className={headingVariants({ size: 'sm' })}>
        {user.user.name}/{project?.name}
      </LargeHeading>
    </div>
  );
};

export default GnTopbar;
