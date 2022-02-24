import React from 'react'

function Timeline() {
  return (
    <section className="motion-safe:animate-fadeIn">
      <div className="relative">
        <div className="mx-auto max-w-md px-4 py-8 text-center sm:max-w-3xl sm:px-6 lg:max-w-7xl">
          <h3 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            <span className="bg-clip-text text-cyan-700 text-transparent dark:text-green-400">
              Education Timeline
            </span>
          </h3>
        </div>
        <ol className="relative mx-auto mt-12 grid max-w-md gap-8 border-l px-4 sm:max-w-lg sm:px-6 lg:max-w-7xl">
          <li className="mb-10 ml-6">
            <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-cyan-700 ring-8 ring-white dark:bg-green-400 dark:ring-gray-900">
              <svg
                className="h-3 w-3 text-blue-600 dark:text-cyan-700"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </span>
            <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
              Vivekanand Education Society's Institute Of Technology (VESIT)
            </h3>
            <time className="mb-2 block text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              Will graduate on May, 2023
            </time>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">
              Secured an average of 9.86 pointer
            </p>
          </li>
          <li className="mb-10 ml-6">
            <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-cyan-700 ring-8 ring-white dark:bg-green-400 dark:ring-gray-900">
              <svg
                className="h-3 w-3 text-blue-600 dark:text-cyan-700"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </span>
            <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
              Fr. Agnels Multipurpose School and Jr. College
            </h3>
            <time className="mb-2 block text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              Graduated on June 11th, 2019
            </time>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">
              Scored 86% in my final board exam.
            </p>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">
              Secured 93 out of 100 marks in Mathematics in my final board exam.
            </p>
          </li>
          <li className="mb-6 ml-6">
            <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-cyan-700 ring-8 ring-white dark:bg-green-400 dark:ring-gray-900">
              <svg
                className="h-3 w-3 text-blue-600 dark:text-cyan-700"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </span>
            <h3 className="mb-1 flex items-center text-lg font-semibold text-gray-900 dark:text-white">
              North Point School
            </h3>
            <time className="mb-2 block text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              Graduated on May 30th, 2017
            </time>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">
              Scored 93% in my final board exam.
            </p>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">
              Secured 99 out of 100 marks in Computer Applications in my final
              board exam.
            </p>
          </li>
        </ol>
      </div>
    </section>
  )
}

export default Timeline
