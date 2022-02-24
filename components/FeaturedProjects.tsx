import React from 'react'
import { FiCode, FiNavigation } from 'react-icons/fi'

function FeaturedProjects() {
  return (
    <section className="motion-safe:animate-fadeIn">
      <div className="relative">
        <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:max-w-7xl">
          <h3 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            <span className="bg-clip-text text-cyan-700 text-transparent dark:text-green-400">
              Featured Projects
            </span>
          </h3>
          <p className="mx-auto mt-5 max-w-prose text-xl text-gray-700 dark:text-gray-300">
            Websites and Mobile apps I have put considerable time and effort
            into. For me, web development is more than just a hobby. It's a
            passion.
          </p>
        </div>
        <div className="mx-auto mt-12 grid max-w-md gap-8 px-4 sm:max-w-lg sm:px-6 lg:max-w-7xl lg:grid-cols-3">
          <div className="flex cursor-pointer flex-col rounded-lg border border-transparent shadow-lg filter duration-300 ease-in focus-within:ring-2 focus-within:ring-teal-400 focus-within:ring-offset-2 hover:shadow-2xl dark:border-gray-700 dark:hover:drop-shadow-2xl">
            <a className="h-96 overflow-hidden rounded-t-lg bg-white dark:bg-gray-900">
              <div className="flex-shrink-0 rounded-t-lg">
                <img
                  src="/images/repo1.jpg"
                  width={1200}
                  height={630}
                  loading="lazy"
                  className="h-48 w-full rounded-t-lg object-cover object-top"
                />
              </div>
              <div className="flex flex-1 flex-col justify-between bg-white p-6 dark:bg-gray-900">
                <div className="flex-1">
                  <div className="mt-2">
                    <p className="text-sm font-medium text-cyan-700 dark:text-green-400">
                      Python
                    </p>
                    <p className="truncate text-xl font-semibold text-gray-900 hover:underline dark:text-gray-100">
                      Online Examination System
                    </p>
                    <p className="line-clamp-3 mt-3 text-base text-gray-500 dark:text-gray-300">
                      A questionnaire can be filled in prior to the examination
                      which will then in turn be randomized and presented to the
                      students.
                    </p>
                  </div>
                </div>
              </div>
            </a>
            <div className="flex divide-x divide-gray-200 rounded-b-lg border-t border-gray-200 bg-white dark:divide-gray-700 dark:border-gray-700 dark:bg-gray-900">
              {/* <div className="flex w-0 flex-1 rounded-bl-lg">
                    <a className="relative inline-flex w-0 flex-1 items-center justify-center rounded-bl-lg py-4 text-sm font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 dark:text-gray-400 dark:hover:text-gray-100">
                      <FiNavigation className="inline align-middle text-lg" />
                      <span className="ml-3">Visit site</span>
                    </a>
                  </div> */}
              <div className="flex w-0 flex-1">
                <a
                  className="relative inline-flex w-0 flex-1 items-center justify-center rounded-br-lg py-4 text-sm font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 dark:text-gray-400 dark:hover:text-gray-100"
                  href="https://github.com/NinadRao0707/Online-Examination-System"
                >
                  <FiCode className="inline align-middle text-lg" />
                  <span className="ml-3">View code</span>
                </a>
              </div>
            </div>
          </div>

          <div className="flex cursor-pointer flex-col rounded-lg border border-transparent shadow-lg filter focus-within:ring-2 focus-within:ring-teal-400 focus-within:ring-offset-2 hover:shadow-2xl dark:border-gray-700 dark:hover:drop-shadow-2xl">
            <a className="h-96 overflow-hidden rounded-t-lg bg-white dark:bg-gray-900">
              <div className="flex-shrink-0 rounded-t-lg">
                <img
                  src="/images/repo2.jpg"
                  width={1200}
                  height={630}
                  loading="lazy"
                  className="h-48 w-full rounded-t-lg object-cover object-top"
                />
              </div>
              <div className="flex flex-1 flex-col justify-between bg-white p-6 dark:bg-gray-900">
                <div className="flex-1">
                  <div className="mt-2">
                    <p className="text-sm font-medium text-cyan-700 dark:text-green-400">
                      Java
                    </p>
                    <p className="truncate text-xl font-semibold text-gray-900 hover:underline dark:text-gray-100">
                      E-Commerce Management System
                    </p>
                    <p className="line-clamp-3 mt-3 text-base text-gray-500 dark:text-gray-300">
                      E-Commerce System allows a user to login, search and view
                      products, place an order and view all the orders placed by
                      the customer.
                    </p>
                  </div>
                </div>
              </div>
            </a>
            <div className="flex divide-x divide-gray-200 rounded-b-lg border-t border-gray-200 bg-white dark:divide-gray-700 dark:border-gray-700 dark:bg-gray-900">
              {/* <div className="flex w-0 flex-1 rounded-bl-lg">
                    <a className="relative inline-flex w-0 flex-1 items-center justify-center rounded-bl-lg py-4 text-sm font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 dark:text-gray-400 dark:hover:text-gray-100">
                      <FiNavigation className="inline align-middle text-lg" />
                      <span className="ml-3">Visit site</span>
                    </a>
                  </div> */}
              <div className="flex w-0 flex-1">
                <a
                  className="relative inline-flex w-0 flex-1 items-center justify-center rounded-br-lg py-4 text-sm font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 dark:text-gray-400 dark:hover:text-gray-100"
                  href="https://github.com/NinadRao0707/E-Commerce-Management-System"
                >
                  <FiCode className="inline align-middle text-lg" />
                  <span className="ml-3">View code</span>
                </a>
              </div>
            </div>
          </div>

          <div className="flex cursor-pointer flex-col rounded-lg border border-transparent shadow-lg filter focus-within:ring-2 focus-within:ring-teal-400 focus-within:ring-offset-2 hover:shadow-2xl dark:border-gray-700 dark:hover:drop-shadow-2xl">
            <a className="h-96 overflow-hidden rounded-t-lg bg-white dark:bg-gray-900">
              <div className="flex-shrink-0 rounded-t-lg">
                <img
                  src="/images/repo3.jpg"
                  width={1200}
                  height={630}
                  loading="lazy"
                  className="h-48 w-full rounded-t-lg object-cover object-top"
                />
              </div>
              <div className="flex flex-1 flex-col justify-between bg-white p-6 dark:bg-gray-900">
                <div className="flex-1">
                  <div className="mt-2">
                    <p className="text-sm font-medium text-cyan-700 dark:text-green-400">
                      Laravel
                    </p>
                    <p className="truncate text-xl font-semibold text-gray-900 hover:underline dark:text-gray-100">
                      Omkar Sweets
                    </p>
                    <p className="line-clamp-3 mt-3 text-base text-gray-500 dark:text-gray-300">
                      E-commerce involves buying and selling of goods and
                      services, or the transmitting of funds or data, over an
                      Internet.
                    </p>
                  </div>
                </div>
              </div>
            </a>
            <div className="flex divide-x divide-gray-200 rounded-b-lg border-t border-gray-200 bg-white dark:divide-gray-700 dark:border-gray-700 dark:bg-gray-900">
              <div className="flex w-0 flex-1 rounded-bl-lg">
                <a
                  className="relative inline-flex w-0 flex-1 items-center justify-center rounded-bl-lg py-4 text-sm font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 dark:text-gray-400 dark:hover:text-gray-100"
                  href="https://omkarsweetscorner.in/"
                >
                  <FiNavigation className="inline align-middle text-lg" />
                  <span className="ml-3">Visit site</span>
                </a>
              </div>
              <div className="flex w-0 flex-1">
                <a
                  className="relative inline-flex w-0 flex-1 items-center justify-center rounded-br-lg py-4 text-sm font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 dark:text-gray-400 dark:hover:text-gray-100"
                  href="https://github.com/Aamir-Ansari-almost/omkar-sweets"
                >
                  <FiCode className="inline align-middle text-lg" />
                  <span className="ml-3">View code</span>
                </a>
              </div>
            </div>
          </div>

          <div className="flex cursor-pointer flex-col rounded-lg border border-transparent shadow-lg filter focus-within:ring-2 focus-within:ring-teal-400 focus-within:ring-offset-2 hover:shadow-2xl dark:border-gray-700 dark:hover:drop-shadow-2xl">
            <a className="h-96 overflow-hidden rounded-t-lg bg-white dark:bg-gray-900">
              <div className="flex-shrink-0 rounded-t-lg">
                <img
                  src="/images/repo4.png"
                  width={1200}
                  height={630}
                  loading="lazy"
                  className="h-48 w-full rounded-t-lg object-cover object-top"
                />
              </div>
              <div className="flex flex-1 flex-col justify-between bg-white p-6 dark:bg-gray-900">
                <div className="flex-1">
                  <div className="mt-2">
                    <p className="text-sm font-medium text-cyan-700 dark:text-green-400">
                      Next JS
                    </p>
                    <p className="truncate text-xl font-semibold text-gray-900 hover:underline dark:text-gray-100">
                      Instagram Clone
                    </p>
                    <p className="line-clamp-3 mt-3 text-base text-gray-500 dark:text-gray-300">
                      Instagram clone is our pre-built social media app software
                      that helps entrepreneurs to build an Instagram-like app.
                    </p>
                  </div>
                </div>
              </div>
            </a>
            <div className="flex divide-x divide-gray-200 rounded-b-lg border-t border-gray-200 bg-white dark:divide-gray-700 dark:border-gray-700 dark:bg-gray-900">
              <div className="flex w-0 flex-1 rounded-bl-lg">
                <a className="relative inline-flex w-0 flex-1 items-center justify-center rounded-bl-lg py-4 text-sm font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 dark:text-gray-400 dark:hover:text-gray-100">
                  <FiNavigation className="inline align-middle text-lg" />
                  <span className="ml-3">Visit site</span>
                </a>
              </div>
              <div className="flex w-0 flex-1">
                <a
                  className="relative inline-flex w-0 flex-1 items-center justify-center rounded-br-lg py-4 text-sm font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 dark:text-gray-400 dark:hover:text-gray-100"
                  href="https://github.com/NinadRao0707/insta-next-js"
                >
                  <FiCode className="inline align-middle text-lg" />
                  <span className="ml-3">View code</span>
                </a>
              </div>
            </div>
          </div>

          <div className="flex cursor-pointer flex-col rounded-lg border border-transparent shadow-lg filter focus-within:ring-2 focus-within:ring-teal-400 focus-within:ring-offset-2 hover:shadow-2xl dark:border-gray-700 dark:hover:drop-shadow-2xl">
            <a className="h-96 overflow-hidden rounded-t-lg bg-white dark:bg-gray-900">
              <div className="flex-shrink-0 rounded-t-lg">
                <img
                  src="/images/repo5.png"
                  width={1200}
                  height={630}
                  loading="lazy"
                  className="h-48 w-full rounded-t-lg object-cover object-top"
                />
              </div>
              <div className="flex flex-1 flex-col justify-between bg-white p-6 dark:bg-gray-900">
                <div className="flex-1">
                  <div className="mt-2">
                    <p className="text-sm font-medium text-cyan-700 dark:text-green-400">
                      Flutter
                    </p>
                    <p className="truncate text-xl font-semibold text-gray-900 hover:underline dark:text-gray-100">
                      Instagram Clone
                    </p>
                    <p className="line-clamp-3 mt-3 text-base text-gray-500 dark:text-gray-300">
                      Instagram clone is our pre-built social media app software
                      that helps entrepreneurs to build an Instagram-like app.
                    </p>
                  </div>
                </div>
              </div>
            </a>
            <div className="flex divide-x divide-gray-200 rounded-b-lg border-t border-gray-200 bg-white dark:divide-gray-700 dark:border-gray-700 dark:bg-gray-900">
              {/* <div className="flex w-0 flex-1 rounded-bl-lg">
                    <a className="relative inline-flex w-0 flex-1 items-center justify-center rounded-bl-lg py-4 text-sm font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 dark:text-gray-400 dark:hover:text-gray-100">
                      <FiNavigation className="inline align-middle text-lg" />
                      <span className="ml-3">Visit site</span>
                    </a>
                  </div> */}
              <div className="flex w-0 flex-1">
                <a
                  className="relative inline-flex w-0 flex-1 items-center justify-center rounded-br-lg py-4 text-sm font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 dark:text-gray-400 dark:hover:text-gray-100"
                  href="https://github.com/NinadRao0707/instagram_clone_flutter"
                >
                  <FiCode className="inline align-middle text-lg" />
                  <span className="ml-3">View code</span>
                </a>
              </div>
            </div>
          </div>

          <div className="flex cursor-pointer flex-col rounded-lg border border-transparent shadow-lg filter focus-within:ring-2 focus-within:ring-teal-400 focus-within:ring-offset-2 hover:shadow-2xl dark:border-gray-700 dark:hover:drop-shadow-2xl">
            <a className="h-96 overflow-hidden rounded-t-lg bg-white dark:bg-gray-900">
              <div className="flex-shrink-0 rounded-t-lg">
                <img
                  src="/images/repo6.png"
                  width={1200}
                  height={630}
                  loading="lazy"
                  className="h-48 w-full rounded-t-lg object-cover object-top"
                />
              </div>
              <div className="flex flex-1 flex-col justify-between bg-white p-6 dark:bg-gray-900">
                <div className="flex-1">
                  <div className="mt-2">
                    <p className="text-sm font-medium text-cyan-700 dark:text-green-400">
                      AI / ML
                    </p>
                    <p className="truncate text-xl font-semibold text-gray-900 hover:underline dark:text-gray-100">
                      Fraud Detection
                    </p>
                    <p className="line-clamp-3 mt-3 text-base text-gray-500 dark:text-gray-300">
                      To design an AI system that intuitively identifies
                      fraudulent transactions being carried out on customer's
                      accounts unknowingly.
                    </p>
                  </div>
                </div>
              </div>
            </a>
            <div className="flex divide-x divide-gray-200 rounded-b-lg border-t border-gray-200 bg-white dark:divide-gray-700 dark:border-gray-700 dark:bg-gray-900">
              {/* <div className="flex w-0 flex-1 rounded-bl-lg">
                    <a className="relative inline-flex w-0 flex-1 items-center justify-center rounded-bl-lg py-4 text-sm font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 dark:text-gray-400 dark:hover:text-gray-100">
                      <FiNavigation className="inline align-middle text-lg" />
                      <span className="ml-3">Visit site</span>
                    </a>
                  </div> */}
              <div className="flex w-0 flex-1">
                <a
                  className="relative inline-flex w-0 flex-1 items-center justify-center rounded-br-lg py-4 text-sm font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 dark:text-gray-400 dark:hover:text-gray-100"
                  href="https://github.com/NinadRao0707/AI-Fraud-Detection"
                >
                  <FiCode className="inline align-middle text-lg" />
                  <span className="ml-3">View code</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturedProjects
