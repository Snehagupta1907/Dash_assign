import React from "react";
import Customers from "./Customers";
import Chart1 from "./Chart";

const Middlecard = () => {
  return (
    <div className="grid grid-cols-2 mb-4">
      <Customers />
      <div className="flex flex-col  justify-between h-[350px] mx-1 bg-[#f6f6f3]">
        <div className="bg-white h-[300px] mb-3 rounded-xl">
          <Chart1/>
        </div>
        <div>
          <div className="flex flex-row gap-3 w-full h-[100px]">
            <div className=" p-3 w-full bg-white rounded-xl flex flex-col justify-between">
              <div className="text-[#a2a2a2] font-medium mb-3 text-sm">Top Month</div>
              <div>
                <div className="text-[#734A00] font-semibold text-lg">
                  November
                </div>
                <div className="text-[#FFA500]">2019</div>
              </div>
            </div>
            <div className=" p-3 w-full bg-white rounded-xl flex flex-col justify-between">
              <div className="text-[#a2a2a2] font-medium mb-3 text-sm">Top year</div>
              <div>
                <div className="text-[#734A00] font-semibold text-lg">
                  2023
                </div>
                <div className="text-[#454545] text-sm">96K sold so far</div>
              </div>
            </div>
            <div className=" p-3 w-full bg-white rounded-xl flex flex-col justify-between">
              <div className="text-[#a2a2a2] font-medium text-sm">Top buyer</div>
              <img class="w-5 h-5 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="user"/>
              <div>
                <div className="text-black font-medium text-xs">
                Maggie Johnson
                </div>
                <div className="text-[#454545] text-xs">Oasis Organic Inc.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Middlecard;
