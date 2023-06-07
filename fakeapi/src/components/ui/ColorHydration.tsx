import React from 'react'

const ColorHydration = () => {
  return (
    <>
      <div className="hidden">
            <p className={`text-[#3f5efb]`}>re w</p>
            <p className="text-[#ca69e3]">re </p>
            <p className="text-[#fc466b]">r e</p>
            <p className={`bg-[#3f5efb]`}>re w</p>
            <p className="bg-[#ca69e3]">re </p>
            <p className="bg-[#fc466b]">r e</p>
            <p className={`border border-[#3f5efb]`}>re w</p>
            <p className="border border-[#ca69e3]">re </p>
            <p className="border border-[#fc466b]">r e</p>
        </div>
    </>
  )
}

export default ColorHydration
