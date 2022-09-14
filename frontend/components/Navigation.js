import { ConnectButton } from "@rainbow-me/rainbowkit";
import Link from "next/link";

export default function Navigate() {
  return (
    <nav className="bg-gradient-to-r from-gray-900 to-black px-2 sm:px-4 py-2.5 dark:bg-black fixed w-full z-20 top-0 left-0 border-b border-black dark:border-black">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <a className="flex items-center">
          <span
            className="self-center text-3xl font-tfont whitespace-nowrap text-white sm:text-xl md:text-3xl bg-gradient-to-r bg-clip-text  text-transparent 
            from-indigo-500 via-purple-500 to-indigo-500
            animate-text hover:md:-skew-y-6 hover:md:scale-125 cursor-pointer"
          >
            Mirror Pay
          </span>
        </a>
        <div className="flex md:order-2">
          <ConnectButton />
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 text-sm text-white rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <div
          className="hidden justify-between items-center w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 mt-4 bg-gradient-to-r from-gray-900 to-black rounded-lg border border-gray-800 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-black px-2  dark:bg-gray-800 md:dark:bg-black dark:border-black">
            <li>
              <a
                href="/"
                className="block py-2 pr-4 pl-3 md:text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-white md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-black dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 md:text-xl sm:text-base font-semibold relative before:content-[''] before:absolute before:block before:w-full before:h-[2px] 
              before:bottom-0 before:left-0 before:bg-white
              before:hover:scale-x-100 before:scale-x-0 before:origin-top-left
              before:transition before:ease-in-out before:duration-300"
                aria-current="page"
              >
                HOME
              </a>
            </li>
            <li>
              <a
                href= "employee-dashboard"
                className="block py-2 pr-4 pl-3 md:text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-white md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 md:text-xl sm:text-base font-semibold relative before:content-[''] before:absolute before:block before:w-full before:h-[2px] 
              before:bottom-0 before:left-0 before:bg-white
              before:hover:scale-x-100 before:scale-x-0 before:origin-top-left
              before:transition before:ease-in-out before:duration-300"
              >
                EMPLOYER
              </a>
            </li>
            <li>
              <a
                href="../components/employee-dashboard"
                className="block py-2 pr-4 pl-3 md:text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-white md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 md:text-xl sm:text-base font-semibold relative before:content-[''] before:absolute before:block before:w-full before:h-[2px] 
              before:bottom-0 before:left-0 before:bg-white
              before:hover:scale-x-100 before:scale-x-0 before:origin-top-left
              before:transition before:ease-in-out before:duration-300"
              >
                EMPLOYEE
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pr-4 pl-3 md:text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-white md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 md:text-xl sm:text-base font-semibold relative before:content-[''] before:absolute before:block before:w-full before:h-[2px] 
              before:bottom-0 before:left-0 before:bg-white
              before:hover:scale-x-100 before:scale-x-0 before:origin-top-left
              before:transition before:ease-in-out before:duration-300"
              >
                CONTACT US
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
