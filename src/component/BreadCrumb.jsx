import React from 'react';
import { Link } from 'react-router-dom';

function BreadCrumb({ items = [] }) {
  return (
    <ol className="flex items-center whitespace-nowrap">
      {items.map((item, idx) => (
        <li
          key={idx}
          className={`inline-flex items-center text-sm ${idx === items.length - 1 ? 'font-semibold text-gray-800 truncate dark:text-neutral-200' : ''}`}
          aria-current={idx === items.length - 1 ? 'page' : undefined}
        >
          {idx !== 0 && (
            <svg className="shrink-0 mx-2 size-4 text-gray-400 dark:text-neutral-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m9 18 6-6-6-6"></path>
            </svg>
          )}
          {idx !== items.length - 1 ? (
            <Link
              to={
                '/' +
                items
                  .slice(1, idx + 1)
                  .map((seg) => seg.toLowerCase())
                  .join('/')
              }
              className="flex items-center text-sm text-gray-500 hover:text-blue-600 focus:outline-hidden focus:text-blue-600 dark:text-neutral-500 dark:hover:text-blue-500 dark:focus:text-blue-500"
            >
              {item}
            </Link>
          ) : (
            item
          )}
        </li>
      ))}
    </ol>
  );
}

export default BreadCrumb;