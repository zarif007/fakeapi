import GenertorTabs from '@/components/generator/GenertorTabs'
import GnTopbar from '@/components/generator/GnTopbar'
import React from 'react'

const Generator = ({ params }: any) => {

  return (
    <div className='w-full px-2 md:px-12'>
      {/* @ts-expect-error server component */}
      <GnTopbar id={params.id} />

      <GenertorTabs />
    </div>
  )
}

export default Generator
