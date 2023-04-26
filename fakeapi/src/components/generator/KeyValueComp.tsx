import React from 'react'
import { Input } from '../ui/Input'
import { BsPlus } from "react-icons/bs";


const KeyValueComp = ({ data }: any) => {
  return (
    <div className='flex px-2 space-x-2 rounded-md my-2 bg-[#39ff14] items-center justify-center'>
      <Input defaultValue={data.key} className='dark:bg-slate-900 bg-slate-100 font-bold text-md' readOnly />
      <div className="text-4xl mb-2 font-bold dark:text-slate-900 text-slate-100">:</div>
      <Input defaultValue={data.value} className='dark:bg-slate-900 bg-slate-100 font-bold text-m' readOnly />
      {/* <div className="rounded-md dark:text-slate-100 text-slate-900 dark:bg-slate-900 bg-slate-100 p-1 cursor-pointer">
        <BsPlus
        className="w-8 h-8 "
        />
    </div> */}
    </div>
  )
}

export default KeyValueComp
