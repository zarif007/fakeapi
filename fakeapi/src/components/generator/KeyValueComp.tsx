import React from 'react'
import { Input } from '../ui/Input'
import { BsPlus } from "react-icons/bs";


const KeyValueComp = ({ data }: any) => {

  const colorArray = ['#3f5efb', '#39ff14', '#fc466b']
  return (
    <div className={`flex px-2 space-x-2 rounded-md my-2 bg-[${colorArray[data.counter % colorArray.length]}] items-center justify-center`}>
      <div className="hidden">
        <p className="bg-[#3f5efb]"></p>
        <p className="bg-[#39ff14]"></p>
        <p className="bg-[#fc466b]"></p>
      </div>
      <Input defaultValue={data.key} className='dark:bg-slate-900 bg-slate-100 font-bold text-md' readOnly />
      <div className="text-4xl mb-2 font-bold dark:text-slate-900 text-slate-100">:</div>
      {/* <Input defaultValue={data.value} className='dark:bg-slate-900 bg-slate-100 font-bold text-m' readOnly /> */}
    </div>
  )
}

export default KeyValueComp
