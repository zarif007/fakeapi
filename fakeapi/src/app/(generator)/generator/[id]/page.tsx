import Navbar from '@/components/Navbar'
import GeneratorTabs from '@/components/generator/GeneratorTabs'
import GnTopbar from '@/components/generator/GnTopbar'
import { db } from '@/lib/db'
import { notFound } from 'next/navigation'
import React, { FC } from 'react'
import { AiOutlineArrowLeft } from 'react-icons/ai'


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

  // const router = useRouter()

  return (
    <div className='w-full px-2 md:px-12'>
      
      {/* @ts-expect-error server component */}
      <GnTopbar project={project} />

      <div className="flex justify-end text-blue-500 space-x-1 items-center font-semibold text-md">
        <AiOutlineArrowLeft className="w-6 h-6" />
        <p>Back</p> 
      </div>

      <GeneratorTabs project={project} />
    </div>
  )
}

export default Generator
