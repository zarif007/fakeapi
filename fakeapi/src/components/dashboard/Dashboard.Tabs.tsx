'use client';

import React, { FC } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/Tabs';
import ProjectCreation from './ProjectCreation.page';
import { BsDatabaseAdd } from 'react-icons/bs';
import { IoStatsChartOutline } from 'react-icons/io5';
import { VscFileBinary } from 'react-icons/vsc';

const DashboardTabs: FC = () => {
  return (
    <Tabs defaultValue="create" className="max-w-7xl w-full overflow-x-auto">
      <TabsList>
        <TabsTrigger value="create" className="py-2 flex space-x-2">
          <BsDatabaseAdd className="h-5 w-5" /> <p>Create</p>
        </TabsTrigger>
        <TabsTrigger value="projects" className="py-2 flex space-x-2">
          <VscFileBinary className="h-5 w-5" /> <p>Projects</p>
        </TabsTrigger>
        <TabsTrigger value="stats" className="py-2 flex space-x-2">
          <IoStatsChartOutline className="h-5 w-5" /> <p>Stats</p>
        </TabsTrigger>
      </TabsList>
      <TabsContent value="create" className="h-full">
        <ProjectCreation />
      </TabsContent>
      <TabsContent value="projects"></TabsContent>
      <TabsContent value="stats"></TabsContent>
    </Tabs>
  );
};

export default DashboardTabs;
