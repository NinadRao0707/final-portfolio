import React from 'react'
import { FiEye, FiCalendar } from 'react-icons/fi'

function Experience() {
  return (
    <section className="motion-safe:animate-fadeIn">
      <div className="relative py-8">
        <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:max-w-7xl">
          <h3 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            <span className="bg-clip-text text-cyan-700 text-transparent dark:text-green-400">
              Experience
            </span>
          </h3>
          <p className="mx-auto mt-5 max-w-prose text-xl text-gray-700 dark:text-gray-300">
            Work experience and accomplishments that I have gained the past
            years.
          </p>
        </div>
        <div className="mx-auto mt-12 grid max-w-md gap-8 px-4 sm:max-w-lg sm:px-6 lg:max-w-7xl lg:grid-cols-3">
          <div className="flex cursor-pointer flex-col rounded-lg border border-transparent shadow-lg filter duration-300 ease-in focus-within:ring-2 focus-within:ring-teal-400 focus-within:ring-offset-2 hover:shadow-2xl dark:border-gray-700 dark:hover:drop-shadow-2xl">
            <a className="h-96 overflow-hidden rounded-t-lg bg-white dark:bg-gray-900">
              <div className="flex-shrink-0 rounded-t-lg">
                <img
                  src="/images/exp1.jpg"
                  width={1200}
                  height={630}
                  loading="lazy"
                  className="h-48 w-full rounded-t-lg object-cover object-top"
                />
              </div>
              <div className="flex flex-1 flex-col justify-between bg-white p-6 dark:bg-gray-900">
                <div className="flex-1">
                  <div className="mt-1">
                    <p className="text-sm font-medium text-cyan-700 dark:text-green-400">
                      VESIT (D10 Class)
                    </p>
                    <p className="truncate text-xl font-semibold text-gray-900 hover:underline dark:text-gray-100">
                      Class Representative
                    </p>
                    <p className="line-clamp-3 mt-3 text-base text-gray-500 dark:text-gray-300">
                      I have taken my time to become an effective class
                      representative.
                      <a className="relative inline-flex flex-1 items-center justify-center rounded-br-lg py-5 text-sm font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 dark:text-gray-400 dark:hover:text-gray-100">
                        <FiCalendar className="inline align-middle text-lg" />
                        <span className="ml-3">
                          29th August, 2020 - 28th August, 2021
                        </span>
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </a>
            <div className="flex divide-x divide-gray-200 rounded-b-lg border-t border-gray-200 bg-white dark:divide-gray-700 dark:border-gray-700 dark:bg-gray-900">
              <div className="flex w-0 flex-1">
                <a className="relative inline-flex w-0 flex-1 items-center justify-center rounded-br-lg py-4 text-sm font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 dark:text-gray-400 dark:hover:text-gray-100">
                  <FiEye className="inline align-middle text-lg" />
                  <span className="ml-3">View Certificate</span>
                </a>
              </div>
            </div>
          </div>

          <div className="flex cursor-pointer flex-col rounded-lg border border-transparent shadow-lg filter duration-300 ease-in focus-within:ring-2 focus-within:ring-teal-400 focus-within:ring-offset-2 hover:shadow-2xl dark:border-gray-700 dark:hover:drop-shadow-2xl">
            <a className="h-96 overflow-hidden rounded-t-lg bg-white dark:bg-gray-900">
              <div className="flex-shrink-0 rounded-t-lg">
                <img
                  src="/images/nocerti.png"
                  width={1200}
                  height={630}
                  loading="lazy"
                  className="h-48 w-full rounded-t-lg object-cover object-top"
                />
              </div>
              <div className="flex flex-1 flex-col justify-between bg-white p-6 dark:bg-gray-900">
                <div className="flex-1">
                  <div className="mt-1">
                    <p className="text-sm font-medium text-cyan-700 dark:text-green-400">
                      VESIT (QuestIT Cell)
                    </p>
                    <p className="truncate text-xl font-semibold text-gray-900 hover:underline dark:text-gray-100">
                      Deputy Secretary
                    </p>
                    <p className="line-clamp-3 mt-3 text-base text-gray-500 dark:text-gray-300">
                      I have ensured that the meetings are effectively organized
                      and minuted.
                      <a className="relative inline-flex flex-1 items-center justify-center rounded-br-lg py-5 text-sm font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 dark:text-gray-400 dark:hover:text-gray-100">
                        <FiCalendar className="inline align-middle text-lg" />
                        <span className="ml-3">13th November, 2021 -</span>
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </a>
            <div className="flex divide-x divide-gray-200 rounded-b-lg border-t border-gray-200 bg-white dark:divide-gray-700 dark:border-gray-700 dark:bg-gray-900">
              <div className="flex w-0 flex-1">
                <a className="relative inline-flex w-0 flex-1 items-center justify-center rounded-br-lg py-4 text-sm font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 dark:text-gray-400 dark:hover:text-gray-100">
                  <FiEye className="inline align-middle text-lg" />
                  <span className="ml-3">View Certificate</span>
                </a>
              </div>
            </div>
          </div>

          <div className="flex cursor-pointer flex-col rounded-lg border border-transparent shadow-lg filter duration-300 ease-in focus-within:ring-2 focus-within:ring-teal-400 focus-within:ring-offset-2 hover:shadow-2xl dark:border-gray-700 dark:hover:drop-shadow-2xl">
            <a className="h-96 overflow-hidden rounded-t-lg bg-white dark:bg-gray-900">
              <div className="flex-shrink-0 rounded-t-lg">
                <img
                  src="/images/nocerti.png"
                  width={1200}
                  height={630}
                  loading="lazy"
                  className="h-48 w-full rounded-t-lg object-cover object-top"
                />
              </div>
              <div className="flex flex-1 flex-col justify-between bg-white p-6 dark:bg-gray-900">
                <div className="flex-1">
                  <div className="mt-1">
                    <p className="text-sm font-medium text-cyan-700 dark:text-green-400">
                      VESIT (Admission and ICA Team)
                    </p>
                    <p className="truncate text-xl font-semibold text-gray-900 hover:underline dark:text-gray-100">
                      Full Stack Developer
                    </p>
                    <p className="line-clamp-3 mt-3 text-base text-gray-500 dark:text-gray-300">
                      Assisting the VESIT Admission team in various projects and
                      initiatives.
                      <a className="relative inline-flex flex-1 items-center justify-center rounded-br-lg py-5 text-sm font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 dark:text-gray-400 dark:hover:text-gray-100">
                        <FiCalendar className="inline align-middle text-lg" />
                        <span className="ml-3">25th March, 2021 - </span>
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </a>
            <div className="flex divide-x divide-gray-200 rounded-b-lg border-t border-gray-200 bg-white dark:divide-gray-700 dark:border-gray-700 dark:bg-gray-900">
              <div className="flex w-0 flex-1">
                <a className="relative inline-flex w-0 flex-1 items-center justify-center rounded-br-lg py-4 text-sm font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 dark:text-gray-400 dark:hover:text-gray-100">
                  <FiEye className="inline align-middle text-lg" />
                  <span className="ml-3">View Certificate</span>
                </a>
              </div>
            </div>
          </div>

          <div className="flex cursor-pointer flex-col rounded-lg border border-transparent shadow-lg filter duration-300 ease-in focus-within:ring-2 focus-within:ring-teal-400 focus-within:ring-offset-2 hover:shadow-2xl dark:border-gray-700 dark:hover:drop-shadow-2xl">
            <a className="h-96 overflow-hidden rounded-t-lg bg-white dark:bg-gray-900">
              <div className="flex-shrink-0 rounded-t-lg">
                <img
                  src="/images/exp4.jpg"
                  width={1200}
                  height={630}
                  loading="lazy"
                  className="h-48 w-full rounded-t-lg object-cover object-top"
                />
              </div>
              <div className="flex flex-1 flex-col justify-between bg-white p-6 dark:bg-gray-900">
                <div className="flex-1">
                  <div className="mt-1">
                    <p className="text-sm font-medium text-cyan-700 dark:text-green-400">
                      VESIT and COEP (Ganit Lab)
                    </p>
                    <p className="truncate text-xl font-semibold text-gray-900 hover:underline dark:text-gray-100">
                      Python Developer
                    </p>
                    <p className="line-clamp-3 mt-3 text-base text-gray-500 dark:text-gray-300">
                      Worked and implemented on database and questions
                      generation.
                      <a className="relative inline-flex flex-1 items-center justify-center rounded-br-lg py-5 text-sm font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 dark:text-gray-400 dark:hover:text-gray-100">
                        <FiCalendar className="inline align-middle text-lg" />
                        <span className="ml-3">
                          15th June, 2021 - 30th July, 2021
                        </span>
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </a>
            <div className="flex divide-x divide-gray-200 rounded-b-lg border-t border-gray-200 bg-white dark:divide-gray-700 dark:border-gray-700 dark:bg-gray-900">
              <div className="flex w-0 flex-1">
                <a className="relative inline-flex w-0 flex-1 items-center justify-center rounded-br-lg py-4 text-sm font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 dark:text-gray-400 dark:hover:text-gray-100">
                  <FiEye className="inline align-middle text-lg" />
                  <span className="ml-3">View Certificate</span>
                </a>
              </div>
            </div>
          </div>

          <div className="flex cursor-pointer flex-col rounded-lg border border-transparent shadow-lg filter duration-300 ease-in focus-within:ring-2 focus-within:ring-teal-400 focus-within:ring-offset-2 hover:shadow-2xl dark:border-gray-700 dark:hover:drop-shadow-2xl">
            <a className="h-96 overflow-hidden rounded-t-lg bg-white dark:bg-gray-900">
              <div className="flex-shrink-0 rounded-t-lg">
                <img
                  src="/images/exp5.jpg"
                  width={1200}
                  height={630}
                  loading="lazy"
                  className="h-48 w-full rounded-t-lg object-cover object-top"
                />
              </div>
              <div className="flex flex-1 flex-col justify-between bg-white p-6 dark:bg-gray-900">
                <div className="flex-1">
                  <div className="mt-1">
                    <p className="text-sm font-medium text-cyan-700 dark:text-green-400">
                      VESIT (CMS Mentorship Module)
                    </p>
                    <p className="truncate text-xl font-semibold text-gray-900 hover:underline dark:text-gray-100">
                      Laravel Developer
                    </p>
                    <p className="line-clamp-3 mt-3 text-base text-gray-500 dark:text-gray-300">
                      Developed a web application where mentors connect with the
                      students.
                      <a className="relative inline-flex flex-1 items-center justify-center rounded-br-lg py-5 text-sm font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 dark:text-gray-400 dark:hover:text-gray-100">
                        <FiCalendar className="inline align-middle text-lg" />
                        <span className="ml-3">
                          11th May, 2020 - 20th June, 2020
                        </span>
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </a>
            <div className="flex divide-x divide-gray-200 rounded-b-lg border-t border-gray-200 bg-white dark:divide-gray-700 dark:border-gray-700 dark:bg-gray-900">
              <div className="flex w-0 flex-1">
                <a className="relative inline-flex w-0 flex-1 items-center justify-center rounded-br-lg py-4 text-sm font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 dark:text-gray-400 dark:hover:text-gray-100">
                  <FiEye className="inline align-middle text-lg" />
                  <span className="ml-3">View Certificate</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
