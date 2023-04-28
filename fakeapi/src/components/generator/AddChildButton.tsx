import React, { useState } from 'react'
import { buttonVariants } from '../ui/Button'
import { MdOutlineAdd } from 'react-icons/md'
import AddChildModal from './AddChildModal';

const AddChildButton = ({ color }: { color: string }) => {

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const colorArray = ['#3f5efb', '#39ff14', '#fc466b']
  return (
    <>
      <div className="hidden">
        <p className="bg-[#3f5efb]"></p>
        <p className="bg-[#39ff14]"></p>
        <p className="bg-[#fc466b]"></p>
      </div>

      <button onClick={() => setIsModalOpen(true)} className={`text-black bg-[${color}] h-10 py-2 px-4 rounded`}>
        <MdOutlineAdd className="w-5 h-6" />
      </button>

      {/* child Object creation modal */}
      <AddChildModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
    </>
  )
}

export default AddChildButton
