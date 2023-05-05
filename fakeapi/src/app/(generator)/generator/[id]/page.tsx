import GenertorTabs from '@/components/generator/GenertorTabs'
import GnTopbar from '@/components/generator/GnTopbar'
import { db } from '@/lib/db'
import { notFound } from 'next/navigation'
import React, { FC } from 'react'


interface PageParams {
  params: {
    id: string
  }
}

const Generator = async ({ params }: PageParams) => {

  if(!params.id) notFound()

  const project = await db.project.findFirst({
    where: {
      id: params.id
    }
  })

  return (
    <div className='w-full px-2 md:px-12'>
      {/* @ts-expect-error server component */}
      <GnTopbar project={project} />

      <GenertorTabs project={project} />
    </div>
  )
}

export default Generator
