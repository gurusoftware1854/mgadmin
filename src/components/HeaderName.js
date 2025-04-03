import React from "react";
import { useScheme } from "../context/schemeContext";

const HeaderName = ({ mainname, subname, title }) => {
  const { selectedScheme, setSelectedScheme, schemeBackground } = useScheme();

  return (
    <div className="flex items-center space-x-4 py-5 lg:py-6">
      <h2
        className="text-xl font-medium text-slate-800 dark:text-navy-50 lg:text-2xl"
        style={{ color: schemeBackground }}
      >
        {selectedScheme}
      </h2>

      <div className="hidden h-full py-1 sm:flex">
        <div className="h-full w-px bg-slate-300 dark:bg-navy-600"></div>
      </div>
      <ul className="hidden flex-wrap items-center space-x-2 sm:flex">
        <li className="flex items-center space-x-2">
          <a
            className="text-primary transition-colors hover:text-primary-focus dark:text-accent-light dark:hover:text-accent"
            href="#"
          >
            {subname}
          </a>
          {subname && (
            <svg
              x-ignore
              xmlns="http://www.w3.org/2000/svg"
              className="size-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          )}
        </li>
        <li>{title}</li>
      </ul>
    </div>
  );
};

export default HeaderName;
