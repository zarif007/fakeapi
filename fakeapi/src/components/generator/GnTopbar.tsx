import { db } from '@/lib/db'
import React from 'react'
import LargeHeading, { headingVariants } from '../ui/LargeHeading'
import { notFound } from 'next/navigation'
import ApiDashboard from '../ApiDashboard'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'

const GnTopbar = async ({ project }: {project: any}) => {

  const user = await getServerSession(authOptions)

  if(!user) notFound()

  return (
    <div className="mb-12">
      <LargeHeading className={headingVariants({ size: 'sm' })}>{user.user.name}/{project?.name}</LargeHeading>
    </div>
  )
}

export default GnTopbar
