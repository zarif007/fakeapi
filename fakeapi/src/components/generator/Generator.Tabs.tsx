'use client';

import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/Tabs';
import { GiPowerGenerator } from 'react-icons/gi';
import { MdDataObject } from 'react-icons/md';
import GenerateSchema from './GenerateSchema.page';
import SimpleBar from 'simplebar-react';
import GeneratorSettings from './GeneratorSettings.Page';
import { AiOutlineSetting } from 'react-icons/ai';
import { VscGistSecret } from 'react-icons/vsc';

const GeneratorTabs = ({ project }: { project: any }) => {
  return (
    <Tabs defaultValue="generator" className="overflow-x-auto">
      <TabsList>
        <TabsTrigger value="generator" className="py-2 flex space-x-2">
          <GiPowerGenerator className="h-5 w-5" /> <p>Generator</p>
        </TabsTrigger>
        <TabsTrigger value="demo" className="py-2 flex space-x-2">
          <MdDataObject className="h-5 w-5" /> <p>Demo</p>
        </TabsTrigger>
        <TabsTrigger value="credentials" className="py-2 flex space-x-2">
          <VscGistSecret className="h-5 w-5" /> <p>Credentials</p>
        </TabsTrigger>
        <TabsTrigger value="settings" className="py-2 flex space-x-2">
          <AiOutlineSetting className="h-5 w-5" /> <p>Settings</p>
        </TabsTrigger>
      </TabsList>
      <TabsContent value="generator" className="h-full">
        <SimpleBar>
          <GenerateSchema project={project} />
        </SimpleBar>
      </TabsContent>
      <TabsContent value="demo"></TabsContent>
      <TabsContent value="credentials"></TabsContent>
      <TabsContent value="settings">
        <GeneratorSettings />
      </TabsContent>
    </Tabs>
  );
};

export default GeneratorTabs;
