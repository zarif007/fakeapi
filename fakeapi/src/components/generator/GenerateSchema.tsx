'use client'

import React, { useState } from 'react'
import Paragraph from '../ui/Paragrapgh';
import SliderUi from '../ui/SliderUi';
import { MdDataObject, MdOutlineAdd } from "react-icons/md";
import { Button, buttonVariants } from '@/components/ui/Button';
import KeyValueAddModal from './KeyValueAddModal';

const GenerateSchema = () => {

  const [payloadSize, setPayloadSize] = useState<number | string | Array<number | string>>(1);

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

  return (
    <div>
      <Paragraph>Select payload size</Paragraph>
      <SliderUi value={payloadSize} setValue={setPayloadSize} />

      <div className="my-12">
        <button onClick={() => setIsModalOpen(true)} className={buttonVariants({ variant: 'default' })}>
          <MdDataObject className="w-5 h-6" />
          <MdOutlineAdd className="w-5 h-6" />
        </button>

        <KeyValueAddModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
      </div>
    </div>
  )
}


export default GenerateSchema
