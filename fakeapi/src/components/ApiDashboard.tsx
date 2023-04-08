import { authOptions } from '@/lib/auth'
import { db } from '@/lib/db'
import { getServerSession } from 'next-auth'
import { notFound } from 'next/navigation'
import React from 'react'
import { formatDistance } from 'date-fns'
import LargeHeading from './ui/LargeHeading'
import Paragraph from './ui/Paragrapgh'
import { Input } from './ui/Input'
import Table from './ui/Table'
import ApiKeyOptions from './ui/ApiKeyOptions'

const ApiDashboard = async () => {

    const user = await getServerSession(authOptions)

    if(!user) notFound()

    const apiKeys = await db.apiKey.findMany({
      where: { userId: user.user.id }
    })

    const activeApiKeys = apiKeys.filter((key) => key.enabled)

    if (!activeApiKeys.length) return notFound()

    const userRequests = await db.apiRequest.findMany({
      where: {
        apiKeyId: {
          in: apiKeys.map((key) => key.id)
        }
      }
    })

    const serializableRequests = userRequests.map((req) => ({
      ...req,
      timestamp: formatDistance(new Date(req.timestamp), new Date())
    }))
    
  return (
    <div className='container flex flex-col gap-6'>
      <LargeHeading className='mx-auto'>Welcome back, {user.user.name}</LargeHeading>
      <div className='flex flex-col md:flex-row gap-4  items-center'>
        <Paragraph>Your API key:</Paragraph>
        {
          activeApiKeys.map((apiKey) => {
            return (
              <div key={apiKey.key}>
                <Input className='w-fit truncate' readOnly value={apiKey.key} />
                <ApiKeyOptions apiKeyKey={apiKey.key} />
              </div>
            )
          })
        }
        
        
      </div>

      <Paragraph className='text-center md:text-left mt-4 -mb-4'>
        Your API history:
      </Paragraph>

      <Table userRequests={serializableRequests} />
    </div>
  )
}

export default ApiDashboard
