import { useState, useEffect, useRef } from "react";
export const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef(null);
  const buttonMenuRef = useRef(null);
  const showMenuToogle = () => {
    setShowMenu((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        !menuRef.current.contains(event.target) &&
        !buttonMenuRef.current.contains(event.target)
      ) {
        setShowMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="bg-white border-gray-200 px-4 sm:px-6 py-2.5 dark:bg-transparent backdrop-brightness-75">
      <div className="container flex flex-wrap justify-between items-center mx-auto max-w-screen-lg">
        <a href="#" className="flex items-center">
          {
            <img
              src="logo.svg"
              className="mr-3 h-6 sm:h-9"
              alt="Flowbite Logo"
            />
          }
          {/* <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
            Jorge Luis
          </span> */}
        </a>
        <div className="flex items-center sm:order-2">
          <button
            onClick={showMenuToogle}
            data-collapse-toggle="mobile-menu-2"
            type="button"
            className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-sm sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="mobile-menu-2"
            aria-expanded="false"
            ref={buttonMenuRef}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
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
            <svg
              className="hidden w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <div
          className={`${showMenu === false && "hidden"} justify-between items-center w-full sm:flex sm:w-auto sm:order-1`}
          id="mobile-menu-2"
          ref={menuRef}
        >
          <ul className="flex flex-col mt-4 font-medium sm:flex-row sm:space-x-8 sm:mt-0">
            <li>
              <a
                href="#home"
                className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-500 sm:hover:bg-transparent sm:border-0 sm:hover:text-primary-700 sm:p-0 dark:text-gray-400 sm:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white sm:dark:hover:bg-transparent dark:border-gray-700"
              >
                Inicio
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-500 sm:hover:bg-transparent sm:border-0 sm:hover:text-primary-700 sm:p-0 dark:text-gray-400 sm:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white sm:dark:hover:bg-transparent dark:border-gray-700"
              >
                Proyectos
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 sm:hover:bg-transparent sm:border-0 sm:hover:text-primary-700 sm:p-0 dark:text-gray-400 sm:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white sm:dark:hover:bg-transparent dark:border-gray-700"
              >
                Habilidades
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
