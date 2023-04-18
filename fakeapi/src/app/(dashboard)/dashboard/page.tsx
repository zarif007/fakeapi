import React from 'react'

import type { Metadata } from 'next'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { notFound } from 'next/navigation'
import { db } from '@/lib/db'
import ApiDashboard from '@/components/ApiDashboard'
import ProjectCreation from '@/components/ProjectCreation'
import DashboardTabs from '@/components/DashboardTabs'

export const metadata: Metadata = {
  title: "Fake API || Dashboard",
  description: "App for generating APIs with Fake data"
}

const Dashboard = async () => {

    const user = await getServerSession(authOptions) 

    if(!user) return notFound()

    const apiKey = await db.apiKey.findFirst({
      where: { userId: user.user.id, enabled: true }
    })
  return (
    <div className='max-w-7xl mx-auto'>
      <DashboardTabs />
    </div>
  )
}

export default Dashboard
