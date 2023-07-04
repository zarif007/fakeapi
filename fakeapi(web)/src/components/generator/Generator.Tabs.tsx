'use client';

import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/Tabs';
import { GiPowerGenerator } from 'react-icons/gi';
import { MdDataObject } from 'react-icons/md';
import GenerateSchema from './GenerateSchema.Page';
import SimpleBar from 'simplebar-react';
import GeneratorSettings from './GeneratorSettings.Page';
import { AiOutlineSetting } from 'react-icons/ai';
import { VscGistSecret } from 'react-icons/vsc';
import { GrDocumentTest, GrTest } from 'react-icons/gr';
import { TbTestPipe } from 'react-icons/tb';

const GeneratorTabs = ({ project }: { project: any }) => {
  const styles = {
    iconStyle: 'h-5 w-5',
    tabTriggerStyle: 'py-2 flex space-x-2',
  };
  return (
    <Tabs defaultValue="generator" className="">
      <SimpleBar>
        <TabsList>
          <TabsTrigger value="generator" className={styles.tabTriggerStyle}>
            <GiPowerGenerator className={styles.iconStyle} /> <p>Generator</p>
          </TabsTrigger>
          <TabsTrigger value="demo" className={styles.tabTriggerStyle}>
            <MdDataObject className={styles.iconStyle} /> <p>Demo</p>
          </TabsTrigger>
          <TabsTrigger value="test" className={styles.tabTriggerStyle}>
            <TbTestPipe className={styles.iconStyle} /> <p>Test</p>
          </TabsTrigger>
          <TabsTrigger value="credentials" className={styles.tabTriggerStyle}>
            <VscGistSecret className={styles.iconStyle} /> <p>Credentials</p>
          </TabsTrigger>
          <TabsTrigger value="settings" className={styles.tabTriggerStyle}>
            <AiOutlineSetting className={styles.iconStyle} /> <p>Settings</p>
          </TabsTrigger>
        </TabsList>
      </SimpleBar>
      <TabsContent value="generator" className="h-full">
        <SimpleBar>
          <GenerateSchema project={project} />
        </SimpleBar>
      </TabsContent>
      <TabsContent value="demo"></TabsContent>
      <TabsContent value="credentials"></TabsContent>
      <TabsContent value="test"></TabsContent>
      <TabsContent value="settings">
        <SimpleBar>
          <GeneratorSettings />
        </SimpleBar>
      </TabsContent>
    </Tabs>
  );
};

export default GeneratorTabs;
