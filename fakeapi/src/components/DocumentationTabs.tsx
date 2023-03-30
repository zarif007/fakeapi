'use client'

import { nodejs, python } from "@/helpers/documentation-code";
import React, { FC } from "react";
import Code from "./Code";
import SimpleBar from 'simplebar-react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/Tabs";

const DocumentationTabs: FC = () => {
  return (
    <Tabs defaultValue="nodejs" className="max-w-2xl w-full overflow-x-auto">
      <TabsList>
        <TabsTrigger value="nodejs">NodeJS</TabsTrigger>
        <TabsTrigger value="python">Python</TabsTrigger>
        <TabsTrigger value="ruby">Ruby</TabsTrigger>
        {/* <TabsTrigger value='rust'>Rust</TabsTrigger>
            <TabsTrigger value='go'>GO</TabsTrigger> */}
      </TabsList>
      <TabsContent value="nodejs">
        <SimpleBar>
          <Code language="javascript" code={nodejs} animated show />
        </SimpleBar>
      </TabsContent>
      <TabsContent value="python">
        <SimpleBar>
          <Code language="python" code={python} animated show />
        </SimpleBar>
      </TabsContent>
    </Tabs>
  );
};

export default DocumentationTabs;
