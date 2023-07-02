'use client';

import React, { useState } from 'react';
import Paragraph from '../ui/Paragraph';
import AddChildButton from './AddChild.Button';
import { Input } from '../ui/Input';
import { BsCaretDownFill } from 'react-icons/bs';
import { SchemaData } from '@/types/generator';
import DisplayAddedData from './DisplayAddedData';
import ShortUniqueId from 'short-unique-id';
import { schemaToDataDecoder } from '../../lib/SchemaToDataDecoder';
import { buttonVariants } from '@/components/ui/Button';
import axios from 'axios';
import { toast } from '../ui/Toast';

const GenerateSchema = ({ project }: { project: any }) => {
  const [schema, setSchema] = useState<SchemaData>(project.schema);

  const [keyIds, setKeyIds] = useState<string[]>([]);

  const [showChild, setShowChild] = useState<boolean>(true);

  const [decodedData, setDecodedData] = useState({});

  const findParentAndUpdate = (
    child: SchemaData,
    parentsId: string,
    updateAbleSchema: SchemaData,
    key: string
  ) => {
    if (key === parentsId) {
      const uid = new ShortUniqueId();
      const keyId: string = uid();

      const newChild: any = {};
      newChild[keyId] = { ...child, counter: updateAbleSchema.counter + 1 };

      Object.assign(updateAbleSchema.children, newChild);
      setKeyIds([...keyIds, keyId]);
      return;
    }

    Object.entries(updateAbleSchema.children).length > 0 &&
      Object.entries(updateAbleSchema.children).map(NSchema => {
        findParentAndUpdate(
          child,
          parentsId,
          NSchema[1] as SchemaData,
          NSchema[0]
        );
      });
  };

  const handleAddChild = (child: SchemaData, parentsId: string) => {
    const updateAbleSchema: SchemaData = schema;
    findParentAndUpdate(child, parentsId, updateAbleSchema, '');
    setSchema(updateAbleSchema);
  };

  const handleSubmit = async () => {
    const data: any = {};
    Object.entries(schema.children).length > 0 &&
      Object.entries(schema.children).map(child => {
        Object.assign(data, schemaToDataDecoder(child[1]));
      });
    console.log(data);
    setDecodedData(data);

    try {
      const d = await axios.patch('/api/project/update', {
        id: project.id,
        schema,
      });

      console.log(d);

      toast({
        title: 'Success',
        message: 'Project updated successfully',
        type: 'success',
      });
    } catch (err) {
      if (err instanceof Error) {
        toast({
          title: 'Error',
          message: err.message,
          type: 'error',
        });

        return;
      }

      toast({
        title: 'Error',
        message: 'Something went wrong',
        type: 'error',
      });
    }
  };

  return (
    <div className="overflow-y-auto">
      {/* schema creation */}
      <div className="my-12">
        <Paragraph>Define Schema</Paragraph>
        <div className="flex space-x-2 text-black dark:text-slate-50 text-4xl font-extrabold">
          <div className="px-2 rounded bg-black dark:bg-slate-50 w-fit flex items-center justify-center space-x-2">
            <BsCaretDownFill
              className={`w-8 h-8 text-slate-100 dark:text-black ${
                !showChild && '-rotate-90'
              } cursor-pointer`}
              onClick={() => setShowChild(!showChild)}
            />
            <Input
              defaultValue="data"
              className="dark:bg-black bg-slate-100 py-1"
              readOnly
            />
            <div className="text-4xl mb-2 font-bold dark:text-black text-slate-100">
              :
            </div>
          </div>
          <h1 className="text-5xl flex">{'[{'}</h1>
        </div>

        {showChild ? (
          <div className="my-2">
            {/* Displaying added data */}

            {Object.entries(schema.children).length > 0 &&
              Object.entries(schema.children).map((child, index) => {
                return (
                  <DisplayAddedData
                    key={index}
                    data={child[1] as SchemaData}
                    parent={schema}
                    handleAddChild={handleAddChild}
                    parentsId={child[0]}
                  />
                );
              })}

            {/* Button to add object to data state */}
            <div className="ml-12">
              <AddChildButton
                color="#3f5efb"
                handleAddChild={handleAddChild}
                parent={schema}
                parentsId=""
              />
            </div>
          </div>
        ) : (
          <div
            className={`text-white dark:text-black bg-[#3f5efb] cursor-pointer h-10 py-2 px-4 w-fit rounded ml-12 my-2`}
            onClick={() => setShowChild(true)}
          >
            .....
          </div>
        )}

        <div className="text-black dark:text-slate-50">
          <h1 className="text-5xl font-bold">{'}]'}</h1>
        </div>

        <div className="flex justify-end">
          <button
            onClick={handleSubmit}
            className={`${buttonVariants({ variant: 'default' })}`}
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};

export default GenerateSchema;
