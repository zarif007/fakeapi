'use client'

import React, { useState } from 'react'
import Paragraph from '../ui/Paragrapgh';
import SliderUi from '../ui/SliderUi';
import AddChildModal from './AddChildModal';
import DisplayAddedChild from './DisplayAddedChild';
import AddChildButton from './AddChildButton';
import { Input } from '../ui/Input'
import { AiOutlineCaretRight } from 'react-icons/ai';
import { dummyData } from './../../lib/dummyData';


const GenerateSchema = () => {

  const [payloadSize, setPayloadSize] = useState<number>(1);

  const [data, setData] = useState(dummyData);

  return (
    <div className=''>

      {/* Getting main payload size */}
      <Paragraph>Select payload size</Paragraph>
      <SliderUi value={payloadSize} setValue={setPayloadSize} />

      {/* Data creation */}
      <div className="my-12">
        <Paragraph>Define Schema</Paragraph>
        <div className='flex space-x-2 text-slate-900 dark:text-slate-50 text-4xl font-extrabold'>
          <div className="px-2 rounded bg-slate-900 dark:bg-slate-50 w-fit flex items-center justify-center space-x-2">
            <AiOutlineCaretRight className='w-8 h-8 text-slate-100 dark:text-slate-900' />
            <Input defaultValue="data" className="dark:bg-slate-900 bg-slate-100 py-1" />
            <div className="text-4xl mb-2 font-bold dark:text-slate-900 text-slate-100">:</div>
          </div>
          <div className="text-5xl">{payloadSize > 1 && '['} {'{'}</div>
        </div>
        
        {/* Displaying added data */}
        {
          data && <DisplayAddedChild data={data} />
        }

        {/* Button to add object to data state */}
        <div className='ml-12 my-2'>
          <AddChildButton color="bg-slate-900 text-white hover:bg-slate-800 dark:bg-slate-200 dark:text-slate-900 dark:hover:bg-slate-100" />
        </div>

        <div className='text-slate-900 dark:text-slate-50'>
          <h1 className='text-5xl font-bold'>{'}'}{payloadSize > 1 && ', ]'}</h1>
        </div>

      </div>
    </div>
  )
}


export default GenerateSchema
