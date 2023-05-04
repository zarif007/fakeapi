'use client'

import React, { useState } from 'react'
import Paragraph from '../ui/Paragrapgh';
import SliderUi from '../ui/SliderUi';
import AddChildButton from './AddChildButton';
import { Input } from '../ui/Input'
import { dummyData } from './../../lib/dummyData';
import { BsCaretDownFill } from 'react-icons/bs';
import SwitchUi from '../ui/SwitchUi';
import { SchemaData } from '@/types/generator';
import DisplayAddedData from './DisplayAddedData';
import ShortUniqueId from 'short-unique-id'


const GenerateSchema = () => {

  const [objectSize, setObjectSize] = useState<number>(1);

  const [schema, setSchema] = useState<SchemaData>({
    key: "data",
    value: "Object",
    type: "Object",
    children: {},
    counter: 3,
    copiesOfChildren: 0,
    showChild: true,
  });

  const [showChild, setShowChild] = useState<boolean>(true)

  const handleAddChild = (child: SchemaData, parent: string) => {

    const updatedSchema: SchemaData = schema;

    const uid = new ShortUniqueId();
    const keyId: string = uid();

    if(parent === '') {
      
      const newChild: any = {};
      newChild[keyId] = child;

      Object.assign(updatedSchema.children, newChild);
      setSchema(updatedSchema)
      console.log(updatedSchema)
      return;
    }
  }

  return (
    <div className='overflow-y-auto'>
      <div className='flex justify-around md:flex-row flex-col'>
        {/* Getting main object size */}
        <div className="">
          <Paragraph>Select object size</Paragraph>
          <SliderUi value={objectSize} setValue={setObjectSize} />
        </div>

        {/* Swtich for hover border */}
        <div>
          <Paragraph>Hover border</Paragraph>
          <SwitchUi />
        </div>
      </div>

      {/* schema creation */}
      <div className="my-12">
        <Paragraph>Define Schema</Paragraph>
        <div className='flex space-x-2 text-slate-900 dark:text-slate-50 text-4xl font-extrabold'>
          <div className="px-2 rounded bg-slate-900 dark:bg-slate-50 w-fit flex items-center justify-center space-x-2">
            <BsCaretDownFill className={`w-8 h-8 text-slate-100 dark:text-slate-900 ${!showChild && '-rotate-90'} cursor-pointer`} onClick={() => setShowChild(!showChild)} />
            <Input defaultValue="data" className="dark:bg-slate-900 bg-slate-100 py-1" readOnly />
            <div className="text-4xl mb-2 font-bold dark:text-slate-900 text-slate-100">:</div>
          </div>
          <div className="text-5xl">{objectSize > 1 && '['} {'{'}</div>
        </div>
        
        {
          showChild ? <div className="my-2">
            {/* Displaying added data */}
            {/* {
              schema && <DisplayAddedData data={schema} handleAddChild={handleAddChild} />
            } */}
            {
              Object.entries(schema.children).length > 0 && Object.entries(schema.children).map((child, index) => {
                return (
                  <DisplayAddedData key={index} data={child[1]} handleAddChild={handleAddChild} />
                )
              })
            }


            {/* Button to add object to data state */}
            <div className='ml-12'>
              <AddChildButton color="#3f5efb" handleAddChild={handleAddChild} parent="" />
            </div>
          </div> : <div className={`text-white dark:text-slate-900 bg-[#3f5efb] cursor-pointer h-10 py-2 px-4 w-fit rounded ml-12 mt-1`} onClick={() => setShowChild(true)}>
            .....
        </div>
        }

        <div className='text-slate-900 dark:text-slate-50'>
          <h1 className='text-5xl font-bold'>{'}'}{objectSize > 1 && ', ]'}</h1>
        </div>

      </div>
    </div>
  )
}


export default GenerateSchema
