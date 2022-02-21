import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import {
  FiArrowRight,
  FiCode,
  FiNavigation,
  FiServer,
  FiZap,
  FiEye,
  FiCalendar,
} from 'react-icons/fi'

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-1 dark:bg-gray-900">
      <Head>
        <title>Ninad Rao | Resume</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="mt-20 mb-20 lg:relative lg:z-10 lg:pb-0">
        <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-8 lg:px-6">
          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute inset-x-0 top-0 h-1/2 bg-gray-100 dark:bg-gray-900 lg:hidden"
            />
            <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:h-full lg:p-0">
              <div className="aspect-w-10 aspect-h-6 sm:aspect-w-16 sm:aspect-h-7 lg:aspect-none overflow-hidden rounded-xl lg:h-full">
                <img
                  src=""
                  alt="Profile Picture"
                  width={1000}
                  height={1000}
                  loading="lazy"
                  className="lg:h-50 lg:w-50 object-cover"
                />
              </div>
            </div>
          </div>
          <div className="mt-12 lg:col-span-2 lg:m-0 lg:pl-8">
            <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0 lg:py-20">
              <blockquote>
                <div>
                  <p className="mt-6 text-2xl font-medium text-white lg:mt-0">
                    I'm Ninad Rao, a senior student at VESIT Chembur. Seeking a
                    role to enhance my technical knowledge. Eager to join an
                    organization where I can utilize my knowledge and apply my
                    leadership experience and abilities in order to achieve
                    goals.
                  </p>
                </div>
                <footer className="mt-6">
                  <p className="text-base font-medium text-white">Ninad Rao</p>
                  <p className="text-base font-medium text-cyan-100">
                    Front-End Web Developer
                  </p>
                </footer>
              </blockquote>
              <a
                href="/Ninad_Rao.pdf"
                target="_blank"
                rel="noopener"
                className="mt-6 inline-flex items-center justify-center rounded-md border border-cyan-700 p-2 font-medium text-cyan-50 filter hover:border-white hover:text-white hover:brightness-110 dark:border-green-400"
              >
                <FiEye className="mr-2" />
                View Resume
              </a>
            </div>
          </div>
        </div>
      </section>
      <section>
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
            <div className="flex cursor-pointer flex-col rounded-lg border border-transparent shadow-lg filter focus-within:ring-2 focus-within:ring-teal-400 focus-within:ring-offset-2 hover:shadow-2xl dark:border-gray-700 dark:hover:drop-shadow-2xl">
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
                        A questionnaire can be filled in prior to the
                        examination which will then in turn be randomized and
                        presented to the students.
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
                  <a className="relative inline-flex w-0 flex-1 items-center justify-center rounded-br-lg py-4 text-sm font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 dark:text-gray-400 dark:hover:text-gray-100">
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
                        E-Commerce System allows a user to login, search and
                        view products, place an order and view all the orders
                        placed by the customer.
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
                  <a className="relative inline-flex w-0 flex-1 items-center justify-center rounded-br-lg py-4 text-sm font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 dark:text-gray-400 dark:hover:text-gray-100">
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
                  <a className="relative inline-flex w-0 flex-1 items-center justify-center rounded-bl-lg py-4 text-sm font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 dark:text-gray-400 dark:hover:text-gray-100">
                    <FiNavigation className="inline align-middle text-lg" />
                    <span className="ml-3">Visit site</span>
                  </a>
                </div>
                <div className="flex w-0 flex-1">
                  <a className="relative inline-flex w-0 flex-1 items-center justify-center rounded-br-lg py-4 text-sm font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 dark:text-gray-400 dark:hover:text-gray-100">
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
                        Instagram clone is our pre-built social media app
                        software that helps entrepreneurs to build an
                        Instagram-like app.
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
                  <a className="relative inline-flex w-0 flex-1 items-center justify-center rounded-br-lg py-4 text-sm font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 dark:text-gray-400 dark:hover:text-gray-100">
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
                        Instagram clone is our pre-built social media app
                        software that helps entrepreneurs to build an
                        Instagram-like app.
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
                  <a className="relative inline-flex w-0 flex-1 items-center justify-center rounded-br-lg py-4 text-sm font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 dark:text-gray-400 dark:hover:text-gray-100">
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
                  <a className="relative inline-flex w-0 flex-1 items-center justify-center rounded-br-lg py-4 text-sm font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 dark:text-gray-400 dark:hover:text-gray-100">
                    <FiCode className="inline align-middle text-lg" />
                    <span className="ml-3">View code</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
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
                Get started with dozens of web components and interactive
                elements built on top of Tailwind CSS.
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
                Secured 93 out of 100 marks in Mathematics in my final board
                exam.
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
      <section>
        <div className="relative py-8">
          <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:max-w-7xl">
            <h3 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
              <span className="bg-clip-text text-cyan-700 text-transparent dark:text-green-400">
                Experience
              </span>
            </h3>
            <p className="mx-auto mt-5 max-w-prose text-xl text-gray-700 dark:text-gray-300">
              Websites and Mobile apps I have put considerable time and effort
              into. For me, web development is more than just a hobby. It's a
              passion.
            </p>
          </div>
          <div className="mx-auto mt-12 grid max-w-md gap-8 px-4 sm:max-w-lg sm:px-6 lg:max-w-7xl lg:grid-cols-3">
            <div className="flex cursor-pointer flex-col rounded-lg border border-transparent shadow-lg filter focus-within:ring-2 focus-within:ring-teal-400 focus-within:ring-offset-2 hover:shadow-2xl dark:border-gray-700 dark:hover:drop-shadow-2xl">
              <a className="h-80 overflow-hidden rounded-t-lg bg-white dark:bg-gray-900">
                <div className="flex flex-1 flex-col justify-between bg-white p-6 dark:bg-gray-900">
                  <div className="flex-1">
                    <div className="mt-2">
                      <p className="text-sm font-medium text-cyan-700 dark:text-green-400">
                        VESIT (D10 Class)
                      </p>
                      <p className="truncate text-xl font-semibold text-gray-900 hover:underline dark:text-gray-100">
                        Class Representative
                      </p>
                      <p className="line-clamp-3 mt-3 text-base text-gray-500 dark:text-gray-300">
                        I have taken my time to become an effective class representative. 
                        I always address and take student s opinions to the teachers and student council.
                      </p>
                      <p className="truncate text-xl mt-3 font-semibold text-gray-900 hover:underline dark:text-gray-100">
                        Duration
                      </p>
                      <a className="relative inline-flex flex-1 items-center justify-center rounded-br-lg py-5 text-sm font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 dark:text-gray-400 dark:hover:text-gray-100">
                        <FiCalendar className="inline align-middle text-lg" />
                        <span className="ml-3">29th August, 2020 - 28th August, 2021</span>
                      </a>
                    </div>
                  </div>
                </div>
              </a>
              <div className="flex divide-x divide-gray-200 rounded-b-lg border-t border-gray-200 bg-white dark:divide-gray-700 dark:border-gray-700 dark:bg-gray-900">
                <div className="flex w-0 flex-1">
                  <a className="relative inline-flex w-0 flex-1 items-center justify-center rounded-br-lg py-5 text-sm font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 dark:text-gray-400 dark:hover:text-gray-100">
                    <FiEye className="inline align-middle text-lg" />
                    <span className="ml-3">View Certificate</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="flex cursor-pointer flex-col rounded-lg border border-transparent shadow-lg filter focus-within:ring-2 focus-within:ring-teal-400 focus-within:ring-offset-2 hover:shadow-2xl dark:border-gray-700 dark:hover:drop-shadow-2xl">
              <a className="h-80 overflow-hidden rounded-t-lg bg-white dark:bg-gray-900">
                <div className="flex flex-1 flex-col justify-between bg-white p-6 dark:bg-gray-900">
                  <div className="flex-1">
                    <div className="mt-2">
                      <p className="text-sm font-medium text-cyan-700 dark:text-green-400">
                        VESIT (QuestIT Cell)
                      </p>
                      <p className="truncate text-xl font-semibold text-gray-900 hover:underline dark:text-gray-100">
                        Deputy Secretary
                      </p>
                      <p className="line-clamp-3 mt-3 text-base text-gray-500 dark:text-gray-300">
                        Being a Deputy Secretary helped me to engage and coordinate amongst the council members. 
                        I have ensured that the meetings are effectively organized and minuted.
                      </p>
                      <p className="truncate text-xl mt-3 font-semibold text-gray-900 hover:underline dark:text-gray-100">
                        Duration
                      </p>
                      <a className="relative inline-flex flex-1 items-center justify-center rounded-br-lg py-5 text-sm font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 dark:text-gray-400 dark:hover:text-gray-100">
                        <FiCalendar className="inline align-middle text-lg" />
                        <span className="ml-3">13th November, 2021 - </span>
                      </a>
                    </div>
                  </div>
                </div>
              </a>
              <div className="flex divide-x divide-gray-200 rounded-b-lg border-t border-gray-200 bg-white dark:divide-gray-700 dark:border-gray-700 dark:bg-gray-900">
                <div className="flex w-0 flex-1">
                  <a className="relative inline-flex w-0 flex-1 items-center justify-center rounded-br-lg py-5 text-sm font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 dark:text-gray-400 dark:hover:text-gray-100">
                    <FiEye className="inline align-middle text-lg" />
                    <span className="ml-3">View Certificate</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="flex cursor-pointer flex-col rounded-lg border border-transparent shadow-lg filter focus-within:ring-2 focus-within:ring-teal-400 focus-within:ring-offset-2 hover:shadow-2xl dark:border-gray-700 dark:hover:drop-shadow-2xl">
              <a className="h-80 overflow-hidden rounded-t-lg bg-white dark:bg-gray-900">
                <div className="flex flex-1 flex-col justify-between bg-white p-6 dark:bg-gray-900">
                  <div className="flex-1">
                    <div className="mt-2">
                      <p className="text-sm font-medium text-cyan-700 dark:text-green-400">
                        VESIT (Admission and ICA Team)
                      </p>
                      <p className="truncate text-xl font-semibold text-gray-900 hover:underline dark:text-gray-100">
                        Full Stack Developer
                      </p>
                      <p className="line-clamp-3 mt-3 text-base text-gray-500 dark:text-gray-300">
                        Assisting the VESIT Admission team in various projects andinitiatives. 
                        I have handled the ICA website of our college andaddressed the queries from the students.
                      </p>
                      <p className="truncate text-xl mt-3 font-semibold text-gray-900 hover:underline dark:text-gray-100">
                        Duration
                      </p>
                      <a className="relative inline-flex flex-1 items-center justify-center rounded-br-lg py-5 text-sm font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 dark:text-gray-400 dark:hover:text-gray-100">
                        <FiCalendar className="inline align-middle text-lg" />
                        <span className="ml-3">25th March, 2021 - </span>
                      </a>
                    </div>
                  </div>
                </div>
              </a>
              <div className="flex divide-x divide-gray-200 rounded-b-lg border-t border-gray-200 bg-white dark:divide-gray-700 dark:border-gray-700 dark:bg-gray-900">
                <div className="flex w-0 flex-1">
                  <a className="relative inline-flex w-0 flex-1 items-center justify-center rounded-br-lg py-5 text-sm font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 dark:text-gray-400 dark:hover:text-gray-100">
                    <FiEye className="inline align-middle text-lg" />
                    <span className="ml-3">View Certificate</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="flex cursor-pointer flex-col rounded-lg border border-transparent shadow-lg filter focus-within:ring-2 focus-within:ring-teal-400 focus-within:ring-offset-2 hover:shadow-2xl dark:border-gray-700 dark:hover:drop-shadow-2xl">
              <a className="h-80 overflow-hidden rounded-t-lg bg-white dark:bg-gray-900">
                <div className="flex flex-1 flex-col justify-between bg-white p-6 dark:bg-gray-900">
                  <div className="flex-1">
                    <div className="mt-2">
                      <p className="text-sm font-medium text-cyan-700 dark:text-green-400">
                        VESIT and COEP (Ganit Lab)
                      </p>
                      <p className="truncate text-xl font-semibold text-gray-900 hover:underline dark:text-gray-100">
                        Python Developer
                      </p>
                      <p className="line-clamp-3 mt-3 text-base text-gray-500 dark:text-gray-300">
                        Worked on database generation and implementing new ways of generating questions. 
                        Currently, working on making a webpage where students can attempt math exams.
                      </p>
                      <p className="truncate text-xl mt-3 font-semibold text-gray-900 hover:underline dark:text-gray-100">
                        Duration
                      </p>
                      <a className="relative inline-flex flex-1 items-center justify-center rounded-br-lg py-5 text-sm font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 dark:text-gray-400 dark:hover:text-gray-100">
                        <FiCalendar className="inline align-middle text-lg" />
                        <span className="ml-3">15th June, 2021 - 30th July, 2021</span>
                      </a>
                    </div>
                  </div>
                </div>
              </a>
              <div className="flex divide-x divide-gray-200 rounded-b-lg border-t border-gray-200 bg-white dark:divide-gray-700 dark:border-gray-700 dark:bg-gray-900">
                <div className="flex w-0 flex-1">
                  <a className="relative inline-flex w-0 flex-1 items-center justify-center rounded-br-lg py-5 text-sm font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 dark:text-gray-400 dark:hover:text-gray-100">
                    <FiEye className="inline align-middle text-lg" />
                    <span className="ml-3">View Certificate</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="flex cursor-pointer flex-col rounded-lg border border-transparent shadow-lg filter focus-within:ring-2 focus-within:ring-teal-400 focus-within:ring-offset-2 hover:shadow-2xl dark:border-gray-700 dark:hover:drop-shadow-2xl">
              <a className="h-80 overflow-hidden rounded-t-lg bg-white dark:bg-gray-900">
                <div className="flex flex-1 flex-col justify-between bg-white p-6 dark:bg-gray-900">
                  <div className="flex-1">
                    <div className="mt-2">
                      <p className="text-sm font-medium text-cyan-700 dark:text-green-400">
                        VESIT (CMS Mentorship Module)
                      </p>
                      <p className="truncate text-xl font-semibold text-gray-900 hover:underline dark:text-gray-100">
                        Laravel Developer
                      </p>
                      <p className="line-clamp-3 mt-3 text-base text-gray-500 dark:text-gray-300">
                        Developed a web application using Laravel Framework for Mentorship Module where mentors connect with the students.
                      </p>
                      <p className="truncate text-xl mt-3 font-semibold text-gray-900 hover:underline dark:text-gray-100">
                        Duration
                      </p>
                      <a className="relative inline-flex flex-1 items-center justify-center rounded-br-lg py-5 text-sm font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 dark:text-gray-400 dark:hover:text-gray-100">
                        <FiCalendar className="inline align-middle text-lg" />
                        <span className="ml-3">11th May, 2020 - 20th June, 2020</span>
                      </a>
                    </div>
                  </div>
                </div>
              </a>
              <div className="flex divide-x divide-gray-200 rounded-b-lg border-t border-gray-200 bg-white dark:divide-gray-700 dark:border-gray-700 dark:bg-gray-900">
                <div className="flex w-0 flex-1">
                  <a className="relative inline-flex w-0 flex-1 items-center justify-center rounded-br-lg py-5 text-sm font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 dark:text-gray-400 dark:hover:text-gray-100">
                    <FiEye className="inline align-middle text-lg" />
                    <span className="ml-3">View Certificate</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
