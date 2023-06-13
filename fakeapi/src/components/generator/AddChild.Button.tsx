import React, { useState } from "react";
import { buttonVariants } from "../ui/Button";
import { MdOutlineAdd } from "react-icons/md";
import AddChildModal from "./AddChild.Modal";
import ColorHydration from "../ui/ColorHydration";
import { SchemaData } from "@/types/generator";

const AddChildButton = ({
  color,
  handleAddChild,
  parent,
  parentsId,
}: {
  color: string;
  handleAddChild: (child: SchemaData, parentsId: string) => void;
  parent: SchemaData;
  parentsId: string;
}) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  return (
    <React.Fragment>
      <ColorHydration />

      <button
        onClick={() => setIsModalOpen(true)}
        className={`text-slate-100 dark:text-slate-900 bg-[${color}] h-10 py-2 px-4 rounded`}
      >
        <MdOutlineAdd className="w-5 h-6" />
      </button>

      {/* child Object creation modal */}
      <AddChildModal
        isOpen={isModalOpen}
        setIsOpen={setIsModalOpen}
        handleAddChild={handleAddChild}
        parentsId={parentsId}
        parent={parent}
      />
    </React.Fragment>
  );
};

export default AddChildButton;
