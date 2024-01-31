import React from "react";
import graph from "../images/Frame 6.svg";

const Topcards = () => {
  return (
    <div className="flex flex-row w-screen gap-2 mb-4">
      <div className="flex items-start flex-col gap-3 justify-between h-[200px] w-[325px] rounded-xl  bg-white pl-8 py-6">
        <div>
          <p className="font-semibold text-[15px] ">Revnues</p>
          <div className="flex flex-row items-center">
            <div className="text-[40px] font-semibold">15%</div>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
              >
                <path
                  d="M22.6667 9.33334L9.33334 22.6667M22.6667 9.33334H10.6667M22.6667 9.33334V21.3333"
                  stroke="#25CD25"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
          </div>
          <p className="text-[#454545] text-xs">
            Increase compared to last week
          </p>
        </div>
        <div className="flex flex-row items-center text-[#734A00] text-xs">
          Revenues report
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="15"
              viewBox="0 0 14 15"
              fill="none"
            >
              <path
                d="M2.91666 7.11162H11.0833M11.0833 7.11162L8.75 9.44496M11.0833 7.11162L8.75 4.77829"
                stroke="#734A00"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </span>
        </div>
      </div>
      <div className="flex items-start flex-col gap-3 justify-between h-[200px] w-[325px] rounded-xl  bg-white pl-8 py-6">
        <div>
          <p className="font-semibold text-[15px]">Lost deals</p>
          <div className="flex flex-row items-center">
            <div className="text-[40px] font-semibold">4%</div>
          </div>
          <p className="text-[#454545] text-xs">
          You closed 96 out of 100 deals
          </p>
        </div>
        <div className="flex flex-row items-center text-[#734A00] text-xs">
        All deals
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="15"
              viewBox="0 0 14 15"
              fill="none"
            >
              <path
                d="M2.91666 7.11162H11.0833M11.0833 7.11162L8.75 9.44496M11.0833 7.11162L8.75 4.77829"
                stroke="#734A00"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </span>
        </div>
      </div>
      <div className="flex flex-col items-center justify-between py-6 h-[200px] w-[270px] rounded-xl  bg-white">
      <p className="font-semibold text-[15px]">Quater Goals</p>
      <img src={graph} alt="graph" width={200} height={200}/>
      <div className="flex flex-row items-center text-[#734A00] text-xs">
        All Goals
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="15"
              viewBox="0 0 14 15"
              fill="none"
            >
              <path
                d="M2.91666 7.11162H11.0833M11.0833 7.11162L8.75 9.44496M11.0833 7.11162L8.75 4.77829"
                stroke="#734A00"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Topcards;
