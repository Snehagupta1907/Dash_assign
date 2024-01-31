import React, { useState } from "react";
import CustomerOption from "./CustomerOption";
import customerData from "../constant/CustomerData";

const Customers = () => {
  const [selectedCustomer, setSelectedCustomer] = useState(null);

  const handleCustomerSelect = (customer) => {
    setSelectedCustomer(customer);
  };
  return (
    <div className="flex flex-col py-6 justify-between h-[350px] rounded-xl mx-1 px-4 bg-white">
      <div className="flex flex-row justify-between w-full ">
        <p className="text-black text-lg font-semibold">Customers</p>
        <p className="text-xs text-[#454545] flex flex-row items-center">
          Sort by <span className="font-medium text-xs pl-1"> Newest</span>
          <span className="text-sm font-medium text-black ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="17"
              viewBox="0 0 16 17"
              fill="none"
            >
              <path
                d="M4 6.5L8 10.5L12 6.5"
                stroke="#7D7D7D"
                stroke-width="1.25"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </span>
        </p>
      </div>
      <div >
        {customerData.map((customer, index) => (
          <CustomerOption
            key={index}
            name={customer.name}
            place={customer.place}
            url={customer.url}
            selected={selectedCustomer === customer}
            onSelect={() => handleCustomerSelect(customer)}
          />
        ))}
      </div>
      <div className="flex flex-row items-center text-[#734A00] text-xs">
        All Customers
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
  );
};

export default Customers;
