'use client'

import React, { useState } from 'react'
import Paragraph from '../ui/Paragrapgh';
import SliderUi from '../ui/SliderUi';
import { MdDataObject, MdOutlineAdd } from "react-icons/md";
import { Button, buttonVariants } from '@/components/ui/Button';
import AddChildModal from './AddChildModal';
import DisplayAddedChild from './DisplayAddedChild';
import AddChildButton from './AddChildButton';
import { Input } from '../ui/Input'


const GenerateSchema = () => {

  const [payloadSize, setPayloadSize] = useState<number>(1);

  const [data, setData] = useState({
    key: "User",
    value: "Object",
    type: "Object",
    children: {
      xyz: {
        key: "User_name",
        value: "Object",
        type: "Object",
        children: {
          xyz: {
            key: "post",
            value: "Array",
            type: "Array",
            children: {},
            counter: 2,
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
        <div className='flex space-x-2 text-slate-900 dark:text-slate-50 text-4xl font-extrabold'>
          <div className="px-2 rounded bg-slate-900 dark:bg-slate-50 w-fit flex items-center justify-center space-x-2">
            <Input defaultValue="data" className="dark:bg-slate-900 bg-slate-100 py-1" />
            <div className="text-4xl mb-2 font-bold dark:text-slate-900 text-slate-100">:</div>
          </div>
          <div className="text-5xl">{payloadSize > 1 && '['} {'{'}</div>
        </div>
        
        {
          data && <DisplayAddedChild data={data} />
        }

        <div className='ml-12 my-2'>
          <AddChildButton />
        </div>

        <div className='text-slate-900 dark:text-slate-50'>
          <h1 className='text-5xl font-bold'>{'}'}{payloadSize > 1 && ', ]'}</h1>
        </div>

      </div>
    </div>
  )
}


export default GenerateSchema
