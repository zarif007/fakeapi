import { db } from '@/lib/db'
import React from 'react'
import LargeHeading, { headingVariants } from '../ui/LargeHeading'
import { notFound } from 'next/navigation'
import ApiDashboard from '../ApiDashboard'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'

const GnTopbar = async ({ id }: {id: string}) => {

    const user = await getServerSession(authOptions)

    if(!id || !user) notFound()

    const project = await db.project.findFirst({
        where: {
          id: id
        }
      })

  return (
    <div className="mb-12">
      <LargeHeading className={headingVariants({ size: 'sm' })}>{user.user.name}/{project?.name}</LargeHeading>
    </div>
  )
}

export default GnTopbar
