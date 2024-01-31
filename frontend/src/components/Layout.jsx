import React from "react";
import Bottomcard from "./Bottomcard";
import Middlecard from "./Middlecard";
import Topcards from "./Topcards";

const Layout = () => {
  return (
    <div className="py-2 px-4 min-w-screen sm:ml-64 h-full overflow-x-hidden">
      <Topcards />
      <Middlecard />
      <Bottomcard />
    </div>
  );
};

export default Layout;
