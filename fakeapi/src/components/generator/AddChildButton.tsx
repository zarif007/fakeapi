import React from 'react'
import { buttonVariants } from '../ui/Button'
import { MdOutlineAdd } from 'react-icons/md'

const AddChildButton = ({ setIsModalOpen }: { setIsModalOpen:  React.Dispatch<React.SetStateAction<boolean>> }) => {
  return (
    <button onClick={() => setIsModalOpen(true)} className={buttonVariants({ variant: 'default' })}>
        {/* <MdDataObject className="w-5 h-6" /> */}
        <MdOutlineAdd className="w-5 h-6" />
    </button>
  )
}

export default AddChildButton
