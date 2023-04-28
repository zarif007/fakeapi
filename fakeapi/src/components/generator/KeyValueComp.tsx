import React from 'react'
import { Input } from '../ui/Input'
import { AiOutlineCaretRight } from 'react-icons/ai';
import { colorArray } from '@/lib/ColorArray';
import ColorHydration from '../ui/ColorHydration';
import DisplayAddedChild from './DisplayAddedChild';
import AddChildButton from './AddChildButton';


const KeyValueComp = ({ data }: any) => {

  return (
    <div className="">
      <ColorHydration />
      <div className="flex space-x-2 items-center">
        
        <div className={`flex px-2 space-x-2 rounded my-2 bg-[${colorArray[data.counter % colorArray.length]}] items-center justify-center`}>
          {
            (data.type === 'Object' || data.type === 'Array') &&
              <AiOutlineCaretRight className='w-8 h-8' />
          }
          
          <Input defaultValue={data.key} className='dark:bg-slate-900 bg-slate-100 font-bold text-md' readOnly />
          <div className="text-4xl mb-2 font-bold dark:text-slate-900 text-slate-100">:</div>
          {
            (data.type !== 'Object' && data.type !== 'Array') &&
              <Input defaultValue={data.value} className='dark:bg-slate-900 bg-slate-100 font-bold text-md' readOnly /> 
          }
        </div>

        <h1 className={`text-5xl font-bold text-[${colorArray[data.counter % colorArray.length]}] mb-2`}>
          {
            data.type === "Object" ? '{' :
              (data.type === "Array" ? "[" : ",")
          }
        </h1>
      </div>

      {
        Object.entries(data.children).length > 0 && Object.entries(data.children).map((child, index) => {
          return (
            <DisplayAddedChild key={index} data={child[1]} />
          )
        })
      }

      <div className="my-1 ml-12">
      {
        (data.value === 'Customised_Object' || data.value === 'Customised_Array') ?
          <AddChildButton color={colorArray[data.counter % colorArray.length]} /> : ((
            data.type === 'Object' || data.type === 'Array') && <DisplayValue data={data} />
          )
      }
      </div>

      <h1 className={`text-5xl font-bold text-[${colorArray[data.counter % colorArray.length]}] mb-2`}>
        {
          data.type === "Object" ? '},' :
            (data.type === "Array" ? "]," : "")
        }
      </h1>
    </div>
  )
}

const DisplayValue = ({ data }: any) => {
  return (
    <div className={`flex px-2  rounded bg-[${colorArray[data.counter % colorArray.length]}] items-center justify-center w-fit`}>
      <Input defaultValue={data.value} className='dark:bg-slate-900 bg-slate-100 font-bold text-md' readOnly />
    </div>
  )

}

export default KeyValueComp
