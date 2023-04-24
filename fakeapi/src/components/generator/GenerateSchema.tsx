'use client'

import React, { useState } from 'react'
import Paragraph from '../ui/Paragrapgh';
import SliderUi from '../ui/SliderUi';
import { MdDataObject, MdOutlineAdd } from "react-icons/md";
import { Button, buttonVariants } from '@/components/ui/Button';
import AddChildModal from './AddChildModal';

const GenerateSchema = () => {

  const [payloadSize, setPayloadSize] = useState<number>(1);

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

  return (
    <div>
      <Paragraph>Select payload size</Paragraph>
      <SliderUi value={payloadSize} setValue={setPayloadSize} />

      <div className="my-12">
      <Paragraph>Define Schema</Paragraph>
        <div className='text-slate-900 dark:text-slate-50'>
          <h1 className='text-2xl font-bold'>data = {payloadSize > 1 && '['} {'{'}</h1>
        </div>
        
        <div className='ml-8 my-2'>
          <button onClick={() => setIsModalOpen(true)} className={buttonVariants({ variant: 'default' })}>
            {/* <MdDataObject className="w-5 h-6" /> */}
            <MdOutlineAdd className="w-5 h-6" />
          </button>
        </div>

        <div className='text-slate-900 dark:text-slate-50'>
          <h1 className='text-2xl font-bold'>{'}'}{payloadSize > 1 && ', ]'}</h1>
        </div>

        <AddChildModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
      </div>
    </div>
  )
}


export default GenerateSchema
