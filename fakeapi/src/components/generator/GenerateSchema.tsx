'use client'

import React, { useState } from 'react'
import Paragraph from '../ui/Paragrapgh';
import SliderUi from '../ui/SliderUi';
import { MdDataObject, MdOutlineAdd } from "react-icons/md";
import { Button, buttonVariants } from '@/components/ui/Button';
import AddChildModal from './AddChildModal';
import DisplayAddedChild from './DisplayAddedChild';
import AddChildButton from './AddChildButton';

const GenerateSchema = () => {

  const [payloadSize, setPayloadSize] = useState<number>(1);

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const [data, setData] = useState({
    key: "User",
    value: "Object",
    type: "Object",
    children: {
      xyz: {
        key: "User_name",
        value: "String",
        type: "String",
        children: {
          xyz: {
            key: "post",
            value: "Array",
            type: "Array",
            children: {},
            counter: 1,
            copiesOfChildren: 0,
          },
        },
        counter: 1,
        copiesOfChildren: 0,
      },
      ggg: {
        key: "User_name",
        value: "String",
        type: "String",
        children: {},
        counter: 1,
        copiesOfChildren: 0,
      }
    },
    counter: 0,
    copiesOfChildren: 1,
  });

  return (
    <div>
      <Paragraph>Select payload size</Paragraph>
      <SliderUi value={payloadSize} setValue={setPayloadSize} />

      <div className="my-12">
      <Paragraph>Define Schema</Paragraph>
        <div className='text-slate-900 dark:text-slate-50'>
          <h1 className='text-4xl font-bold'>data = {payloadSize > 1 && '['} {'{'}</h1>
        </div>
        
        <DisplayAddedChild data={data} setIsModalOpen={setIsModalOpen} />
        <div className='ml-12 my-2'>
          <AddChildButton setIsModalOpen={setIsModalOpen} />
        </div>

        <div className='text-slate-900 dark:text-slate-50'>
          <h1 className='text-4xl font-bold'>{'}'}{payloadSize > 1 && ', ]'}</h1>
        </div>

        <AddChildModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
      </div>
    </div>
  )
}


export default GenerateSchema
