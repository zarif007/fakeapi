import React, { useState } from "react";
import { Input } from "../ui/Input";
import { colorArray } from "@/lib/ColorArray";
import ColorHydration from "../ui/ColorHydration";
import AddChildButton from "./AddChild.Button";
import { BsCaretDownFill } from "react-icons/bs";
import { SchemaData } from "@/types/generator";

const DisplayAddedData = ({
  data,
  parent,
  handleAddChild,
  parentsId,
}: {
  data: SchemaData;
  parent: SchemaData;
  handleAddChild: (child: SchemaData, parentsId: string) => void;
  parentsId: string;
}) => {
  const [showChild, setShowChild] = useState<boolean>(true);
  const [showBg, setShowBg] = useState<Boolean>(false);
  return (
    <div
      className={`ml-12 border-2 ${
        showBg
          ? `border-[${colorArray[data.counter % colorArray.length]}]`
          : "border-slate-100 dark:border-slate-900"
      } rounded pb-2 w-fit`}
    >
      <ColorHydration />
      <div
        className="flex space-x-2 items-center"
        onMouseEnter={() => setShowBg(true)}
        onMouseLeave={() => setShowBg(false)}
      >
        <div
          className={`flex px-2 space-x-2 rounded my-1 bg-[${
            colorArray[data.counter % colorArray.length]
          }] items-center justify-center`}
        >
          {(data.type === "Object" || data.type === "Array") && (
            <BsCaretDownFill
              className={`w-8 h-8 text-slate-100 dark:text-slate-900 ${
                !showChild && "-rotate-90"
              } cursor-pointer`}
              onClick={() => setShowChild(!showChild)}
            />
          )}

          <Input
            defaultValue={data.key}
            className="dark:bg-slate-900 bg-slate-100 font-bold text-md"
            readOnly
          />
          <div className="text-4xl mb-2 font-bold dark:text-slate-900 text-slate-100">
            :
          </div>
          {data.type !== "Object" && data.type !== "Array" && (
            <Input
              defaultValue={data.value}
              className="dark:bg-slate-900 bg-slate-100 font-bold text-md"
              readOnly
            />
          )}
        </div>

        <h1
          className={`text-5xl font-bold text-[${
            colorArray[data.counter % colorArray.length]
          }] mb-1`}
        >
          {data.type === "Object" ? "{" : data.type === "Array" ? "[" : ","}
        </h1>
      </div>

      {showChild ? (
        <React.Fragment>
          {Object.entries(data.children).length > 0 &&
            Object.entries(data.children).map((child, index) => {
              return (
                <DisplayAddedData
                  key={index}
                  data={child[1] as SchemaData}
                  parent={data}
                  parentsId={child[0]}
                  handleAddChild={handleAddChild}
                />
              );
            })}

          <div className="ml-12">
            {data.value === "Customized Object" ||
            data.value === "Customized Array" ? (
              <AddChildButton
                color={colorArray[(data.counter + 1) % colorArray.length]}
                handleAddChild={handleAddChild}
                parent={data}
                parentsId={parentsId}
              />
            ) : (
              (data.type === "Object" || data.type === "Array") && (
                <DisplayValue data={data} />
              )
            )}
          </div>
        </React.Fragment>
      ) : (
        <div
          className={`text-white dark:text-slate-900 bg-[${
            colorArray[(data.counter + 1) % colorArray.length]
          }] cursor-pointer h-10 py-2 px-4 w-fit rounded ml-12`}
          onClick={() => setShowChild(true)}
        >
          .....
        </div>
      )}

      <h1
        className={`text-5xl font-bold text-[${
          colorArray[data.counter % colorArray.length]
        }] mb-2`}
      >
        {data.type === "Object" ? "}," : data.type === "Array" ? "]," : ""}
      </h1>
    </div>
  );
};

const DisplayValue = ({ data }: { data: SchemaData }) => {
  return (
    <div
      className={`flex px-2  rounded bg-[${
        colorArray[(data.counter + 1) % colorArray.length]
      }] items-center justify-center`}
    >
      <Input
        defaultValue={data.value}
        className="dark:bg-slate-900 bg-slate-100 font-bold text-md"
        readOnly
      />
    </div>
  );
};

export default DisplayAddedData;
