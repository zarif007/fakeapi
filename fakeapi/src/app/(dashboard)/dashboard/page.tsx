import React from 'react'

import type { Metadata } from 'next'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { notFound } from 'next/navigation'

export const metadata: Metadata = {
  title: "Fake API || Dashboard",
  description: "App for generating APIs with Fake data"
}

const Dashboard = async () => {

    const user = await getServerSession(authOptions) 

    if(!user) return notFound()

    console.log(user)
  return (
    <>
      t5rtrtret
    </>
  )
}

export default Dashboard
