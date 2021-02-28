import React from 'react';

export default function Menu(){
  return(
    <div className="scrollbar border-r-2 border-gray-300 fixed z-30 inset-y-0 left-0 w-64 transition duration-300 transform bg-white dark:bg-gray-900 overflow-y-auto lg:translate-x-0 lg:static lg:inset-0 -translate-x-full ease-in">
    <div className="flex items-center justify-center mt-6">
      <div className="flex items-center">
                <button className="flex bg-blue-500 shadow-sm p-1 px-8 -ml-2 rounded-md text-white dark:text-white text-lg">
                  <span className="inline-flex mt-1 mr-2">
                  <svg className="h-5 w-5  text-gray-100" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              </span>
      <a href="#" className="inline-flex text-gray-100"> New Email</a>
      </button>
      </div>
    </div>

    <nav className="flex flex-col mt-8 px-4 text-center">
    {/* <!-- inbox --> */}
    <a href="#" className=" border-blue-400 relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-2 border-transparent pr-6">
    <span className="inline-flex justify-center items-center ml-4">

    <svg className="w-5 h-5 text-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"></path></svg>

    </span>
    <span className="ml-2 text-md tracking-wide text-blue-500">Inbox</span>
    <span className="px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-orange bg-red-50 rounded-full">12</span>
    </a>
    {/* <!-- end inbox --> */}
    {/* <!--starred --> */}
      <a href="#" className=" relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800   pr-6">
    <span className="inline-flex justify-center items-center ml-4">

    <svg className="mx-1 w-4 h-4 fill-current text-gray-400" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"></path></svg>

    </span>
    <span className="ml-2 text-md tracking-wide text-gray-600 text-base">Starred</span>

    </a>
    {/* <!--end of starred --> */}
    {/* <!-- start of snooze --> */}
        <a href="#" className=" relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800   pr-6">
    <span className="inline-flex justify-center items-center ml-4">

    <svg className="w-5 h-5 text-gray-400" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
    <path stroke="none" d="M0 0h24v24H0z"></path>
    <circle cx="12" cy="12" r="9"></circle>
    <polyline points="12 7 12 12 15 15"></polyline>
    </svg>

    </span>
    <span className="ml-2 text-md tracking-wide text-gray-600 text-base">Snoozed</span>

    </a>
        {/* <!--end of snooze --> */}
        {/* <!-- start of sent --> */}

        <a href="#" className=" relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800   pr-6">
    <span className="inline-flex justify-center items-center ml-4">

    <svg className="w-5 h-5 transform text-gray-400 rotate-45 -mr-px" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
    </svg>
    </span>
    <span className="ml-2 text-md tracking-wide text-gray-600 text-base">Sent</span>

    </a>
        {/* <!-- end of sent --> */}
        {/* <!-- start of draft --> */}

        <a href="#" className=" relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800   pr-6">
    <span className="inline-flex justify-center items-center ml-4">
    <svg className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z">
        </path>
    </svg>
    </span>
    <span className="ml-2 text-md tracking-wide text-gray-600 text-base">Draft</span>

    </a>
    {/* <!-- end of draft -->
    <!-- start of spam --> */}
            <a href="#" className=" relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800   pr-6">
    <span className="inline-flex justify-center items-center ml-4">
    <svg width="1.8em" height="1.8em" viewBox="0 0 16 16" className="bi bi-exclamation border-2 border-gray-400 rounded-full text-gray-400" fill="currentColor">
    <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z"></path>
    </svg>
    </span>
    <span className="ml-2 text-md tracking-wide text-gray-600  text-base">Spam</span>

    </a>
        {/* <!-- end of spam -->
        <!-- start of bin --> */}
                      <a href="#" className=" relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800   pr-6">
    <span className="inline-flex justify-center items-center ml-4">
    <svg width="1.8em" height="1.8em" viewBox="0 0 16 16" className="bi bi-exclamation border-2 border-gray-400 rounded-full text-gray-400" fill="currentColor"><path d="M0 0h24v24H0z" fill="none"></path><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"></path></svg>
    </span>
    <span className="ml-2 text-md tracking-wide text-gray-600  text-base">Bin</span>

    </a>

        <hr className="mt-2" />
        {/* <!--start of labels --> */}

          <a href="#" className="  relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800  border-transparent pr-6">
    <span className="inline-flex justify-center items-center ml-4">

    {/* <!-- labels logo --> */}
    <svg className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10">
        </path>
    </svg>

    </span>
    <span className="ml-2 text-sm tracking-wide truncate">Labels</span>
    <span className="px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-gray-400 bg-gray-200 rounded-full">4</span>
    </a>

    </nav>
    </div>
  )
}
