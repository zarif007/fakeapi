import React, { useEffect, useState } from 'react'
import KeyValueComp from './KeyValueComp'
import { Input } from '../ui/Input'
import AddChildModal from './AddChildModal'
import AddChildButton from './AddChildButton';
import { colorArray } from '@/lib/ColorArray';


const DisplayAddedChild = ({ data }: any) => {

    return (
        <>
            <div className="hidden">
                <p className={`text-[#3f5efb]`}>re w</p>
                <p className="text-[#39ff14]">re </p>
                <p className="text-[#fc466b]">r e</p>
            </div>
            {
                (data === undefined) ? 'loading....' :
                    <div className='ml-12 w-fit'>

                        <div className='flex space-x-2 items-center'>

                            {/* Styling the key of the object */}
                            <KeyValueComp data={data} />
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

                        {
                            (data.type === 'Object' || data.type === 'Array') && <div className="my-1 ml-12">
                                <AddChildButton color={colorArray[data.counter % colorArray.length]} />
                            </div>
                        }
                        <h1 className={`text-5xl font-bold text-[${colorArray[data.counter % colorArray.length]}] mb-2`}>
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
