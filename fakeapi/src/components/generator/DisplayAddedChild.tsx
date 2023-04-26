import React from 'react'
import KeyValueComp from './KeyValueComp'
import { Input } from '../ui/Input'
import AddChildModal from './AddChildModal'
import AddChildButton from './AddChildButton';


const DisplayAddedChild = ({ data, setIsModalOpen }: any) => {
  return (
    <>
        {
            data === undefined ? 'loading....' : 
                    <div className='ml-12 w-fit'>
                <div className='flex space-x-2 items-center'>
                    <KeyValueComp data={data} />
                    <h1 className='text-5xl font-bold text-slate-900 dark:text-slate-50 mb-1'>
                        {
                            data.type === "Object" ? '{' :
                            (data.type === "Array" ? "[" : ",")
                        }
                    </h1>
                </div>
                {
                    Object.entries(data.children).length > 0 &&  Object.entries(data.children).map((child, index) => {
                        return( 
                            <DisplayAddedChild key={index} data={child[1]} setIsModalOpen={setIsModalOpen} />
                        )
                    })
                }
                {
                    (data.type === 'Object' || data.type === 'Array') && <div className="my-1 ml-12">
                    <AddChildButton setIsModalOpen={setIsModalOpen} />
                </div>
                }
                <h1 className='text-5xl font-bold text-slate-900 dark:text-slate-50 mb-1'>
                        {
                            data.type === "Object" ? '},' :
                            (data.type === "Array" ? "]," : "")
                        }
                </h1>
                
            </div>
        }
    </>
  )
}

export default DisplayAddedChild
