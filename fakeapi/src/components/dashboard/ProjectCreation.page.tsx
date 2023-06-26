'use client';

import React, { useState } from 'react';
import { toast } from '../ui/Toast';
import LargeHeading from '../ui/LargeHeading';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';
import { AiOutlineApi } from 'react-icons/ai';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { CreateApiData } from '@/types/api/key';
import { CreatedProject } from '@/types/project';

const ProjectCreation = () => {
  const router = useRouter();

  const [isCreating, setIsCreating] = useState<boolean>(false);

  const [projectName, setProjectName] = useState<string | null>(null);

  const createNewProject = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsCreating(true);
    try {
      const data = await axios.post('/api/project/create', {
        name: projectName,
      });

      const project: CreatedProject = data.data;

      router.push(`/generator/${project.project?.id}`);

      toast({
        title: 'Success',
        message: 'Project Created successfully',
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
    } finally {
      setIsCreating(false);
    }
  };

  return (
    <div className="container md:max-w-2xl py-24">
      <div className="flex flex-col gap-6 items-center">
        <AiOutlineApi className="mx-auto h-20 w-20 text-gray-400" />
        <LargeHeading className="text-center">
          <span className="gradient1-text">Create PROJECT</span> 🚀
        </LargeHeading>
        {/* <Paragraph>You haven&apos;t created any project yet.</Paragraph> */}
      </div>
      <form
        onSubmit={createNewProject}
        className="mt-6 sm:flex sm:items-center"
        action="#"
      >
        <label htmlFor="emails" className="sr-only">
          Your API key
        </label>
        <div className="relative rounded-md shadow-sm sm:min-w-0 sm:flex-1">
          <Input
            required
            className="font-semibold w-full"
            defaultValue={projectName ?? ''}
            placeholder="Porject Name"
            onChange={e => setProjectName(e.target.value)}
          />
        </div>
        <div className="mt-6 flex justify-center sm:mt-0 sm:ml-4 sm:flex-shrink-0">
          <Button isLoading={isCreating}>Create</Button>
        </div>
      </form>
    </div>
  );
};

export default ProjectCreation;
