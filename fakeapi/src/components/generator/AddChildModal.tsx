'use client'

import React, { useState, Fragment, useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Disclosure } from "@headlessui/react";
import { Input } from "../ui/Input";
import { ChevronUpIcon } from "@heroicons/react/20/solid";
import { VscSymbolString } from "react-icons/vsc";
import { MdDataArray, MdDataObject } from "react-icons/md";
import { BsCardImage } from "react-icons/bs";
import { TbSortAscendingNumbers } from "react-icons/tb";
import { AiOutlineFieldBinary, AiOutlineFile } from "react-icons/ai";
import KeyValueComp from "./DisplayAddedData";
import { buttonVariants } from "../ui/Button";
import { SchemaData } from "@/types/generator";

const typeOfType = [
  {
    name: "String",
    icon: <VscSymbolString className="h-8 w-8" />,
    subOptions: [
      { Name: "Random User Name", Value: "Random User Name" },
      { Name: "Random Text", Value: "Random Text" },
    ],
  },
  {
    name: "Object",
    icon: <MdDataObject className="h-8 w-8" />,
    subOptions: [{ Name: "Customised Object", Value: "Customised Object" }],
  },
  {
    name: "Array",
    icon: <MdDataArray className="h-8 w-8" />,
    subOptions: [
      { Name: "Customised Array", Value: "Customised Array" },
      {
        Name: "Array of Random User Images",
        Value: "Array of Random User Images",
      },
      { Name: "Array of Random Images", Value: "Array of Random Images" },
      {
        Name: "Array of Random User Names",
        Value: "Array of Random User Names",
      },
      { Name: "Array of Random Texts", Value: "Array of Random Texts" },
      { Name: "Array of Random Numbers", Value: "Array of Random Numbers" },
    ],
  },
  {
    name: "Image",
    icon: <BsCardImage className="h-8 w-8" />,
    subOptions: [
      { Name: "Random Image", Value: "Random Image" },
      { Name: "Random UserImage", Value: "Random UserImage" },
    ],
  },
  {
    name: "Number",
    icon: <TbSortAscendingNumbers className="h-8 w-8" />,
    subOptions: [
      { Name: "Random Number", Value: "Random Numberr" },
      { Name: "Select a Number", Value: "Select a Number" },
    ],
  },
  {
    name: "Boolean",
    icon: <AiOutlineFieldBinary className="h-8 w-8" />,
    subOptions: [{ Name: "Customised Object", Value: "Customised Object" }],
  },
  {
    name: "File",
    icon: <AiOutlineFile className="h-8 w-8" />,
    subOptions: [{ Name: "Customised Object", Value: "Customised Object" }],
  },
];

const AddChildModal = ({
  isOpen,
  setIsOpen,
  handleAddChild,
  parent,
  parentsId
}: {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  handleAddChild: (child: SchemaData, parentsId: string) => void;
  parent: SchemaData;
  parentsId: string;
}) => {
  const [keyValueData, setKeyValueData] = useState({
    key: "",
    value: "",
    type: "",
    children: {},
    counter: 0,
    copiesOfChildren: 0,
    showChild: true,
  });

  const [valueOptions, setValueOptions] = useState<{
    show: boolean;
    options: { Name: string; Value: string }[];
  }>({
    show: false,
    options: [],
  });

  const [errors, setErrors] = useState<string>('');

  const [currentParent, setCurrentParent] = useState<SchemaData>();

  const handleAddData = () => {
    if(keyValueData.key === '') {
      setErrors(`Add name for the ${keyValueData.type}`)
      return;
    }
    if(keyValueData.value === '') {
      setErrors(`Add option for the ${keyValueData.type}`)
      return;
    }

    setErrors('')

    handleAddChild(keyValueData, parentsId);

    setIsOpen(false);
    setKeyValueData({
      key: "",
      value: "",
      type: "",
      children: {},
      counter: 0,
      copiesOfChildren: 0,
      showChild: true,
    });
    setValueOptions({ show: false, options: [] });
  };

  useEffect(() => {
    if (keyValueData.type !== "") {
      typeOfType.map((type) => {
        if (type.name === keyValueData.type) {
          setValueOptions({ options: type.subOptions, show: true });
        }
      });

      setKeyValueData({ ...keyValueData, value: "" });
    }
  }, [keyValueData.type]);

  useEffect(() => {
    setCurrentParent(parent);
    
  }, [])

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        onClose={() => setIsOpen(false)}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto overflow-x-hidden">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-xl transform overflow-hidden rounded-2xl bg-slate-100 dark:bg-slate-900 p-6 text-left align-middle shadow-xl transition-all border border-slate-900 dark:border-slate-700">
                <div className="w-full pt-4">
                  <div className="mx-auto w-full max-w-xl rounded-2xl bg-slate-100 dark:bg-slate-900 py-2">
                    <Disclosure as="div" className="mt-2">
                      {({ open }) => (
                        <>
                          <Disclosure.Button className="flex h-10 w-full rounded-md border border-slate-300 bg-transparent py-2 px-3 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-700 dark:text-slate-50 dark:focus:ring-slate-400 dark:focus:ring-offset-slate-900 my-2">
                            <span>Select Data Type</span>
                            <ChevronUpIcon
                              className={`${
                                open ? "rotate-180 transform" : ""
                              } h-5 w-5 text-blue-500`}
                            />
                          </Disclosure.Button>
                          <div className="flex flex-wrap ml-4">
                            {typeOfType.map((type) => {
                              return (
                                <Disclosure.Panel
                                  key={type.name}
                                  onClick={() =>
                                    setKeyValueData({
                                      ...keyValueData,
                                      type: type.name,
                                    })
                                  }
                                  className="flex px-4 pb-2 mt-1 h-10 border rounded-md ml-2 border-slate-300 bg-transparent py-2 text-md font-semibold cursor-pointer placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-700 dark:text-slate-50 dark:focus:ring-slate-400 dark:focus:ring-offset-slate-900 items-center space-x-2"
                                >
                                  {type.icon} <p>{type.name}</p>
                                </Disclosure.Panel>
                              );
                            })}
                          </div>
                        </>
                      )}
                    </Disclosure>

                    {(valueOptions.show) && <Input
                      placeholder={`${
                        keyValueData.type === "Object"
                          ? "Key of the Object"
                          : `Name of the ${keyValueData.type}`
                      }`}
                      onChange={(e) =>
                        setKeyValueData({
                          ...keyValueData,
                          key: e.target.value,
                        })
                      }
                      className="w-full"
                    />}

                    {valueOptions.show && (
                      <Disclosure as="div" className="mt-1">
                        {({ open }) => (
                          <>
                            <Disclosure.Button className="flex h-10 w-full rounded-md border border-slate-300 bg-transparent py-2 px-3 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-700 dark:text-slate-50 dark:focus:ring-slate-400 dark:focus:ring-offset-slate-900 my-2">
                              <span>
                                Select Options for {keyValueData.type}
                              </span>
                              <ChevronUpIcon
                                className={`${
                                  open ? "rotate-180 transform" : ""
                                } h-5 w-5 text-blue-500`}
                              />
                            </Disclosure.Button>
                            <div className="ml-4">
                              {valueOptions.options.map((option, index) => {
                                return (
                                  <Disclosure.Panel
                                    key={index}
                                    onClick={() =>
                                      setKeyValueData({
                                        ...keyValueData,
                                        value: option.Value,
                                      })
                                    }
                                    className="flex h-10 w-full rounded-md border border-slate-300 bg-transparent py-2 px-3 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-700 dark:text-slate-50 dark:focus:ring-slate-400 dark:focus:ring-offset-slate-900 my-2 cursor-pointer"
                                  >
                                    <p>{option.Name}</p>
                                  </Disclosure.Panel>
                                );
                              })}
                            </div>
                          </>
                        )}
                      </Disclosure>
                    )}
                  </div>
                </div>
                <p className="text-sm font-semibold text-red-500">{errors}</p>
                <div className="flex justify-end">
                  <button
                    onClick={handleAddData}
                    className={`${buttonVariants({ variant: "default" })}`}
                  >
                    Done
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default AddChildModal;
