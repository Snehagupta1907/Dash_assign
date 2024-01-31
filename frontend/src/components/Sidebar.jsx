import React, { useState } from "react";
import logo from "../images/Logomark.svg";
import SearchBar from "./SearchBar";

const Sidebar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };
  return (
    <>
      <div style={{ position: "fixed", top: "2", left: "2", zIndex: 1 }}>
        <button
          data-drawer-target="logo-sidebar"
          data-drawer-toggle="logo-sidebar"
          aria-controls="logo-sidebar"
          type="button"
          onClick={toggleSidebar}
          className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-[Orange] rounded-lg sm:hidden dark:text-[Orange]"
        >
          <span className="sr-only">Open sidebar</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              clip-rule="evenodd"
              fill-rule="evenodd"
              d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
            ></path>
          </svg>
        </button>
      </div>

      <aside
        id="logo-sidebar"
        className={`fixed top-2 left-2  w-64 h-screen transition-transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } sm:translate-x-0`}
        aria-label="Sidebar"
      >
        <div className="h-full rounded-lg px-3 py-4 overflow-y-auto bg-white ">
          <a
            href="https://flowbite.com/"
            className="flex items-center ps-2.5 mb-5"
          >
            <img src={logo} className="me-3 sm:h-10" alt="Flowbite Logo" />
          </a>
          <SearchBar />
          <ul className="space-y-1 font-medium font-inter text-sm ">
            <li>
              <a
                href="/"
                className="flex items-center p-2 text-gray-900 rounded-lg  hover:bg-[Orange] group"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M6.66666 2.66666L9.33332 13.3333M7.99999 7.99999L2.66666 9.33332M2.66666 3.99999C2.66666 3.64637 2.80713 3.30723 3.05718 3.05718C3.30723 2.80713 3.64637 2.66666 3.99999 2.66666H12C12.3536 2.66666 12.6928 2.80713 12.9428 3.05718C13.1928 3.30723 13.3333 3.64637 13.3333 3.99999V12C13.3333 12.3536 13.1928 12.6928 12.9428 12.9428C12.6928 13.1928 12.3536 13.3333 12 13.3333H3.99999C3.64637 13.3333 3.30723 13.1928 3.05718 12.9428C2.80713 12.6928 2.66666 12.3536 2.66666 12V3.99999Z"
                    stroke="#FFA500"
                    stroke-width="1.25"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>

                <span className="ms-3">Dashboard</span>
              </a>
            </li>
            <li>
              <a
                href="/"
                className="flex items-center p-2 text-gray-900 rounded-lg  hover:bg-[Orange] group"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="17"
                  viewBox="0 0 16 17"
                  fill="none"
                >
                  <path
                    d="M2 14.5V13.1667C2 12.4594 2.28095 11.7811 2.78105 11.281C3.28115 10.781 3.95942 10.5 4.66667 10.5H7.33333C8.04058 10.5 8.71885 10.781 9.21895 11.281C9.71905 11.7811 10 12.4594 10 13.1667V14.5M10.6667 2.58667C11.2403 2.73354 11.7487 3.06714 12.1118 3.53488C12.4748 4.00262 12.6719 4.57789 12.6719 5.17C12.6719 5.76212 12.4748 6.33739 12.1118 6.80513C11.7487 7.27287 11.2403 7.60647 10.6667 7.75334M14 14.5V13.1667C13.9966 12.5781 13.7986 12.0072 13.4368 11.5429C13.0751 11.0787 12.5699 10.7471 12 10.6M3.33333 5.16667C3.33333 5.87391 3.61428 6.55219 4.11438 7.05229C4.61448 7.55238 5.29276 7.83333 6 7.83333C6.70724 7.83333 7.38552 7.55238 7.88562 7.05229C8.38572 6.55219 8.66667 5.87391 8.66667 5.16667C8.66667 4.45942 8.38572 3.78115 7.88562 3.28105C7.38552 2.78095 6.70724 2.5 6 2.5C5.29276 2.5 4.61448 2.78095 4.11438 3.28105C3.61428 3.78115 3.33333 4.45942 3.33333 5.16667Z"
                    stroke="#7D7D7D"
                    stroke-width="1.25"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <span className="flex-1 ms-3 whitespace-nowrap">Customers</span>
                <span className="inline-flex items-center justify-center px-2 ms-3 text-sm font-medium text-black ">
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
              </a>
            </li>
            <li>
              <a
                href="/"
                className="flex items-center p-2 text-gray-900 rounded-lg  hover:bg-[Orange] group"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M6.00001 3.33333H4.66668C4.31305 3.33333 3.97392 3.47381 3.72387 3.72386C3.47382 3.97391 3.33334 4.31304 3.33334 4.66667V12.6667C3.33334 13.0203 3.47382 13.3594 3.72387 13.6095C3.97392 13.8595 4.31305 14 4.66668 14H11.3333C11.687 14 12.0261 13.8595 12.2762 13.6095C12.5262 13.3594 12.6667 13.0203 12.6667 12.6667V4.66667C12.6667 4.31304 12.5262 3.97391 12.2762 3.72386C12.0261 3.47381 11.687 3.33333 11.3333 3.33333H10M6.00001 3.33333C6.00001 2.97971 6.14049 2.64057 6.39053 2.39052C6.64058 2.14048 6.97972 2 7.33334 2H8.66668C9.0203 2 9.35944 2.14048 9.60949 2.39052C9.85953 2.64057 10 2.97971 10 3.33333M6.00001 3.33333C6.00001 3.68696 6.14049 4.02609 6.39053 4.27614C6.64058 4.52619 6.97972 4.66667 7.33334 4.66667H8.66668C9.0203 4.66667 9.35944 4.52619 9.60949 4.27614C9.85953 4.02609 10 3.68696 10 3.33333M6.00001 11.3333V8.66667M8.00001 11.3333V10.6667M10 11.3333V10"
                    stroke="#7D7D7D"
                    stroke-width="1.25"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <span className="flex-1 ms-3 whitespace-nowrap">
                  All Reports
                </span>
              </a>
            </li>
            <li>
              <a
                href="/"
                className="flex items-center p-2 text-gray-900 rounded-lg  hover:bg-[Orange] group"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M2.39998 6H13.6M2.39998 10H13.6M7.66669 2C6.54358 3.79974 5.94816 5.87858 5.94816 8C5.94816 10.1214 6.54358 12.2003 7.66669 14M8.33333 2C9.45644 3.79974 10.0519 5.87858 10.0519 8C10.0519 10.1214 9.45644 12.2003 8.33333 14M2 8C2 8.78793 2.15519 9.56815 2.45672 10.2961C2.75825 11.0241 3.20021 11.6855 3.75736 12.2426C4.31451 12.7998 4.97595 13.2417 5.7039 13.5433C6.43185 13.8448 7.21207 14 8 14C8.78793 14 9.56815 13.8448 10.2961 13.5433C11.0241 13.2417 11.6855 12.7998 12.2426 12.2426C12.7998 11.6855 13.2417 11.0241 13.5433 10.2961C13.8448 9.56815 14 8.78793 14 8C14 6.4087 13.3679 4.88258 12.2426 3.75736C11.1174 2.63214 9.5913 2 8 2C6.4087 2 4.88258 2.63214 3.75736 3.75736C2.63214 4.88258 2 6.4087 2 8Z"
                    stroke="#7D7D7D"
                    stroke-width="1.25"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <span className="flex-1 ms-3 whitespace-nowrap">Geography</span>
              </a>
            </li>
            <li>
              <a
                href="/"
                className="flex items-center p-2 text-gray-900 rounded-lg  hover:bg-[Orange] group"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M2 13.3333L2.86667 10.7333C1.31733 8.442 1.916 5.48533 4.26667 3.81733C6.61733 2.15 9.99333 2.28666 12.1633 4.13733C14.3333 5.98866 14.6267 8.98133 12.8493 11.138C11.072 13.2947 7.77267 13.948 5.13333 12.6667L2 13.3333Z"
                    stroke="#7D7D7D"
                    stroke-width="1.25"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <span className="flex-1 ms-3 whitespace-nowrap">
                  Conversations
                </span>
              </a>
            </li>
            <li>
              <a
                href="/"
                className="flex items-center p-2 text-gray-900 rounded-lg  hover:bg-[Orange] group"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M11.3333 6.66666L10 2.66666M4.66667 6.66666L6 2.66666M7.33331 13.3333H4.82931C4.35158 13.3333 3.88963 13.1623 3.52707 12.8512C3.1645 12.5401 2.92526 12.1095 2.85265 11.6373L2.01598 6.86933C1.98676 6.67932 1.99897 6.48524 2.05178 6.30039C2.1046 6.11554 2.19676 5.9443 2.32194 5.7984C2.44713 5.6525 2.60239 5.5354 2.77708 5.45513C2.95176 5.37486 3.14174 5.33331 3.33398 5.33333H12.6666C12.8589 5.33331 13.0489 5.37486 13.2236 5.45513C13.3982 5.5354 13.5535 5.6525 13.6787 5.7984C13.8039 5.9443 13.896 6.11554 13.9488 6.30039C14.0017 6.48524 14.0139 6.67932 13.9846 6.86933L13.6653 8.68866M10 12.6667L11.3333 14L14 11.3333M6.66667 9.33333C6.66667 9.68695 6.80714 10.0261 7.05719 10.2761C7.30724 10.5262 7.64638 10.6667 8 10.6667C8.35362 10.6667 8.69276 10.5262 8.94281 10.2761C9.19286 10.0261 9.33333 9.68695 9.33333 9.33333C9.33333 8.97971 9.19286 8.64057 8.94281 8.39052C8.69276 8.14047 8.35362 8 8 8C7.64638 8 7.30724 8.14047 7.05719 8.39052C6.80714 8.64057 6.66667 8.97971 6.66667 9.33333Z"
                    stroke="#7D7D7D"
                    stroke-width="1.25"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <span className="flex-1 ms-3 whitespace-nowrap">Deals</span>
              </a>
            </li>
            <li>
              <a
                href="/"
                className="flex items-center p-2 text-gray-900 rounded-lg  hover:bg-[Orange] group"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M2.66666 4C2.66666 5.10467 5.05466 6 7.99999 6C10.9453 6 13.3333 5.10467 13.3333 4M2.66666 4C2.66666 2.89533 5.05466 2 7.99999 2C10.9453 2 13.3333 2.89533 13.3333 4M2.66666 4V8M13.3333 4V8M2.66666 8C2.66666 9.10467 5.05466 10 7.99999 10C8.74532 10 9.45532 9.94267 10.1 9.83933M2.66666 8V12C2.66666 13.1047 5.05466 14 7.99999 14C8.10466 14 8.20799 13.9987 8.31066 13.9967M10.6667 12.6667H14.6667M14.6667 12.6667L12.6667 10.6667M14.6667 12.6667L12.6667 14.6667"
                    stroke="#7D7D7D"
                    stroke-width="1.25"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <span className="flex-1 ms-3 whitespace-nowrap">Export</span>
              </a>
            </li>
          </ul>

          <div className="absolute bottom-4 left-3">
            <ul className="space-y-1 font-medium text-sm">
              <li className="flex flex-row gap-2 items-center">
                <img
                  class="w-8 h-8 rounded-full"
                  src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                  alt="user"
                />
                <div className="flex flex-col">
                  <p>Gustavo Xavier</p>
                  <span className="bg-[#FFCD71] border text-black px-2 rounded-full text-xs w-fit">
                    Admin
                  </span>
                </div>
              </li>
              <li>
                <a
                  href="/"
                  className="flex items-center p-2 text-gray-900 rounded-lg  hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      d="M13.25 4.17998C13.4791 4.31029 13.6694 4.4993 13.8012 4.72755C13.933 4.95581 14.0016 5.21507 14 5.47865V10.3346C14 10.874 13.7047 11.3713 13.228 11.6333L8.728 14.48C8.5049 14.6025 8.25451 14.6667 8 14.6667C7.74549 14.6667 7.4951 14.6025 7.272 14.48L2.772 11.6333C2.53878 11.5059 2.34408 11.3181 2.20827 11.0896C2.07247 10.8612 2.00053 10.6004 2 10.3346V5.47798C2 4.93865 2.29533 4.44198 2.772 4.17998L7.272 1.52665C7.50169 1.40001 7.75971 1.33359 8.022 1.33359C8.28429 1.33359 8.54231 1.40001 8.772 1.52665L13.272 4.17998H13.25Z"
                      stroke="#7D7D7D"
                      stroke-width="1.25"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M6 7.99999C6 8.53042 6.21071 9.03913 6.58579 9.4142C6.96086 9.78928 7.46957 9.99999 8 9.99999C8.53043 9.99999 9.03914 9.78928 9.41421 9.4142C9.78929 9.03913 10 8.53042 10 7.99999C10 7.46956 9.78929 6.96085 9.41421 6.58578C9.03914 6.2107 8.53043 5.99999 8 5.99999C7.46957 5.99999 6.96086 6.2107 6.58579 6.58578C6.21071 6.96085 6 7.46956 6 7.99999Z"
                      stroke="#7D7D7D"
                      stroke-width="1.25"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <span className="flex-1 ms-3 whitespace-nowrap">
                    Settings
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="flex items-center p-2 text-gray-900 rounded-lg  hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      d="M9.33333 5.33332V3.99999C9.33333 3.64637 9.19286 3.30723 8.94281 3.05718C8.69276 2.80713 8.35362 2.66666 8 2.66666H3.33333C2.97971 2.66666 2.64057 2.80713 2.39052 3.05718C2.14048 3.30723 2 3.64637 2 3.99999V12C2 12.3536 2.14048 12.6928 2.39052 12.9428C2.64057 13.1928 2.97971 13.3333 3.33333 13.3333H8C8.35362 13.3333 8.69276 13.1928 8.94281 12.9428C9.19286 12.6928 9.33333 12.3536 9.33333 12V10.6667M6 7.99999H14M14 7.99999L12 5.99999M14 7.99999L12 9.99999"
                      stroke="#B01212"
                      stroke-width="1.25"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <span className="flex-1 ms-3 whitespace-nowrap text-[#B01212]">
                    Login Out
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
