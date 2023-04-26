import React from 'react'
import KeyValueComp from './KeyValueComp'
import { Input } from '../ui/Input'
import AddChildModal from './AddChildModal'

const DisplayAddedChild = ({ data }: any) => {
    console.log(data)
  return (
    <div className='ml-8 w-fit'>
        <div className='flex space-x-2 items-center'>
            <KeyValueComp data={data} />
            <h1 className='text-6xl font-bold text-slate-900 dark:text-slate-50 mb-1'>
                {
                    data.type === "object" ? '{' :
                    (data.type === "array" ? "[" : ",")
                }
            </h1>
        </div>
    </div>
  )
}

export default DisplayAddedChild
