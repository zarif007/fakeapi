import React, { useState } from "react";
import Paragraph from "../ui/Paragraph";
import SliderUi from "../ui/SliderUi";
import SwitchUi from "../ui/SwitchUi";

const GeneratorSettings = () => {
  const [objectSize, setObjectSize] = useState<number>(1);
  return (
    <div className="flex justify-around md:flex-row flex-col">
      {/* Getting main object size */}
      <div className="mx-2">
        <Paragraph>Select object size</Paragraph>
        <SliderUi value={objectSize} setValue={setObjectSize} />
      </div>

      {/* Switch for hover border */}
      <div>
        <Paragraph>Hover border</Paragraph>
        <SwitchUi />
      </div>
    </div>
  );
};

export default GeneratorSettings;
