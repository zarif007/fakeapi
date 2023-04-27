import React, { useState } from 'react'
import { buttonVariants } from '../ui/Button'
import { MdOutlineAdd } from 'react-icons/md'
import AddChildModal from './AddChildModal';

const AddChildButton = () => {

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const colorArray = ['#3f5efb', '#39ff14', '#fc466b']
  return (
    <>
      <button onClick={() => setIsModalOpen(true)} className={`${buttonVariants({ variant: 'default' })}`}>
        {/* <MdDataObject className="w-5 h-6" /> */}
        <MdOutlineAdd className="w-5 h-6" />
      </button>

      <AddChildModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
    </>
  )
}

export default AddChildButton
