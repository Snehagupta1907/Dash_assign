import React from 'react'
import Bottomcard from './Bottomcard'
import Middlecard from './Middlecard'
import Topcards from './Topcards'

const Layout = () => {
  return (
    <div className="px-4 sm:ml-64 h-full">
   <div className="p-4  rounded-lg dark:border-gray-700">
      <Topcards/>
     <Middlecard/>
      <Bottomcard/>
   </div>
</div>
  )
}

export default Layout