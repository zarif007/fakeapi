import React, { FC } from 'react'

import type { Metadata } from 'next'
import LargeHeading from '@/components/ui/LargeHeading'
import Paragraph from '@/components/ui/Paragrapgh'
import DocumentationTabs from '@/components/DocumentationTabs'
import 'simplebar-react/dist/simplebar.min.css'

export const metadata: Metadata = {
  title: "Fake API || Documentation",
  description: "App for generating APIs with Fake data"
}


const page: FC = () => {
  return (
    <div className='container max-w-7xl mx-auto mt-12'>
      <div className='flex flex-col items-center gap-6'>
        <LargeHeading>Making a request</LargeHeading>
        <Paragraph>api/v1/similarity</Paragraph>

        <DocumentationTabs />
      </div>
    </div>
  )
}

export default page
