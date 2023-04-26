import React from 'react'
import { Input } from '../ui/Input'
import { BsPlus } from "react-icons/bs";


const KeyValueComp = ({ data }: any) => {
  return (
    <div className='flex py-1 px-3 space-x-4 rounded-md my-4 bg-slate-900 dark:bg-slate-100 items-center justify-center'>
      <Input defaultValue={data.key} className='dark:bg-slate-900 bg-slate-100' readOnly />
      <div className="text-4xl mb-2 font-bold dark:text-slate-900 text-slate-100">:</div>
      <Input defaultValue={data.value} className='dark:bg-slate-900 bg-slate-100' readOnly />
      {/* <div className="rounded-md dark:text-slate-100 text-slate-900 dark:bg-slate-900 bg-slate-100 p-1 cursor-pointer">
        <BsPlus
        className="w-8 h-8 "
        />
    </div> */}
    </div>
  )
}

export default KeyValueComp
