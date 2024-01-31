import React from "react";

const ChatItems = () => {
  return (
    <div className="mt-3 flex flex-row gap-3 items-center flex-wrap w-full">
      <div className=" bg-[#FFF7E8] rounded-2xl p-3">
        <div className="relative">
          <img
            className="w-8 h-8 rounded-full relative"
            src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
            alt="user"
          />

          <div className="absolute top-0 right-0">
            <div className="w-2 h-2 bg-red-500 rounded-full  border-2 border-yellow-50"></div>
          </div>
        </div>
      </div>
      <div className=" bg-[#FFF7E8] rounded-2xl p-3">
        <div className="relative">
          <img
            className="w-8 h-8 rounded-full relative"
            src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
            alt="user"
          />

          <div className="absolute top-0 right-0">
            <div className="w-2 h-2 bg-red-500 rounded-full  border-2 border-yellow-50"></div>
          </div>
        </div>
      </div>

      <img
        className="w-8 h-8 rounded-full relative"
        src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
        alt="user"
      />
        <img
        className="w-8 h-8 rounded-full relative"
        src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
        alt="user"
      />
           <img
        className="w-8 h-8 rounded-full relative"
        src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
        alt="user"
      />
           <img
        className="w-8 h-8 rounded-full relative"
        src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
        alt="user"
      />
           <img
        className="w-8 h-8 rounded-full relative"
        src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
        alt="user"
      />
           <img
        className="w-8 h-8 rounded-full relative"
        src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
        alt="user"
      />
    </div>
  );
};

export default ChatItems;
