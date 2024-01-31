import React from "react";
import DealItems from "./DealItems";
import ChatItems from "./ChatItems";

const Bottomcard = () => {
  const dealData = [
    "Fruit2Go",
    "Marshall's MKT",
    "CCNT",
    "Joana Mini-market",
    "Little Brazil Vegan",
    "Target",
    "Organic Place",
  ];
  return (
    <div className="grid grid-cols-3 w-full gap-[10px]">
      <div className="flex flex-col items-start p-4 rounded-xl bg-white h-[250px] w-full  ">
      <div className="text-black text-lg font-semibold mb-2">Chats</div>
      <div className="text-zinc-700 text-sm font-normal">2 unread messages</div>
      <ChatItems/>
      </div>
      <div className="flex p-4 rounded-xl bg-white h-[250px] w-full flex-col ">
        <div className="text-black text-lg font-semibold mb-6">Top States</div>
        <div className="w-full h-8 flex items-center justify-between p-2 bg-gradient-to-r from-orange-200 to-transparent rounded-md mb-2">
          <div className="flex w-full items-center justify-between px-2 ">
            <div className="text-black text-lg font-semibold uppercase whitespace-nowrap">
              NY
            </div>
            <div className="text-right text-black text-sm font-medium uppercase whitespace-nowrap">
              120k
            </div>
          </div>
        </div>
        <div className="w-[90%] h-8 flex items-center justify-between p-2 bg-gradient-to-r from-orange-200 to-transparent rounded-md mb-2">
          <div className="flex w-full items-center justify-between px-2">
            <div className="text-black text-lg font-semibold uppercase whitespace-nowrap">
              MA
            </div>
            <div className="text-right text-black text-sm font-medium uppercase whitespace-nowrap">
              80k
            </div>
          </div>
        </div>
        <div className="w-[75%] h-8 flex items-center justify-between p-2 bg-gradient-to-r from-orange-200 to-transparent rounded-md mb-2">
          <div className="flex w-full items-center justify-between px-2">
            <div className="text-black text-lg font-semibold uppercase whitespace-nowrap">
              NH
            </div>
            <div className="text-right text-black text-sm font-medium uppercase whitespace-nowrap">
              70k
            </div>
          </div>
        </div>
        <div className="w-[60%] h-8 flex items-center justify-between p-2 bg-gradient-to-r from-orange-200 to-transparent rounded-md mb-2">
          <div className="flex w-full items-center justify-between px-2">
            <div className="text-black text-lg font-semibold uppercase whitespace-nowrap">
              OR
            </div>
            <div className="text-right text-black text-sm font-medium uppercase whitespace-nowrap">
              50k
            </div>
          </div>
        </div>
      </div>
      <div className="flex p-4 rounded-xl bg-white h-fit min-h-[250px] w-full flex-col ">
        <div className="text-black text-lg font-semibold mb-2">New Deals</div>
        <div className="flex flex-row gap-3 items-center flex-wrap w-full">
          {dealData.map((item, index) => (
            <DealItems key={index} text={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Bottomcard;
