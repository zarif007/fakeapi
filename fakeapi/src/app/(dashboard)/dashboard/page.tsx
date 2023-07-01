import React from 'react';

import type { Metadata } from 'next';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { notFound } from 'next/navigation';
import { db } from '@/lib/db';
import ApiDashboard from '@/components/dashboard/ApiDashboard.page';
import ProjectCreation from '@/components/dashboard/ProjectCreation.page';
import DashboardTabs from '@/components/dashboard/Dashboard.Tabs';

export const metadata: Metadata = {
  title: 'Fake API || Dashboard',
  description: 'App for generating APIs with Fake data',
};

const Dashboard = async () => {
  const user = await getServerSession(authOptions);

  if (!user) return notFound();

  return (
    <div className="max-w-7xl mx-auto">
      <DashboardTabs />
    </div>
  );
};

export default Dashboard;
