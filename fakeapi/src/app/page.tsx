import { buttonVariants } from '@/components/ui/Button'
import LargeHeading from '@/components/ui/LargeHeading'
import Paragraph from '@/components/ui/Paragrapgh'
import { Inter } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'

import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'

export const metadata: Metadata = {
  title: "Fake API || Home",
  description: "App for generating APIs with Fake data"
}

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      {/* @ts-expect-error server component */}
      <Navbar />
      <div className='relative h-screen flex items-center justify-center overflow-x-hidden'>
        <div className='container pt-12 max-w-7xl w-full  h-full'>
          <div className='h-full gap-6 flex flex-col justify-center items-center'>
            <LargeHeading
              size='lg'
              className='three-d text-center'>
                Generate  <br />
                <span className='gradiant1-text'>APIs with fake data</span>  <br />
                for your projects
            </LargeHeading>

            <Paragraph className='mx-auto'>
              Define Schema, Select data type, Click generate, Get API endpoint 
              {' '}
              <br />
              
            </Paragraph>
            <div className="flex space-x-4 flex-wrap justify-center items-center">
              <Link
                  href='/dashboard'
                  className={`${buttonVariants({ variant: 'bigButton' })} mt-4`}>
                  <span className='font-semibold'>CREATE 🏗️</span>
              </Link>
              <Link
                  href='/documentation'
                  className={`${buttonVariants({ variant: 'bigButton' })} mt-4 bg-[#fc466b]`}>
                  <span className='font-semibold'>Documentation 📝</span>
              </Link>
            </div>

            {/* <div className='relative w-full max-w-xl lg:max-w-3xl h-1/2 lg:left-1/2 aspect-square lg:absolute'>
              <Image
                priority
                className=''
                quality={100}
                style={{ objectFit: 'contain' }}
                fill
                src='/data.png'
                alt='dragon'
              />
            </div> */}
          </div>
        </div>
      </div>
    </div>
  )
}

