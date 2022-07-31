import React from 'react'

function Timeline() {
  return (
    <section className="motion-safe:animate-fadeIn">
      <div className="mx-auto max-w-md px-4 py-8 text-center sm:max-w-3xl sm:px-6 lg:max-w-7xl">
        <h3 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
          <span className="bg-clip-text text-cyan-700 text-transparent dark:text-green-400">
            Education Timeline
          </span>
        </h3>
      </div>
      <div className="container">
        <div className="mx-auto flex grid-cols-9 flex-col p-2 text-blue-50 md:grid">
          <div className="flex flex-row-reverse md:contents">
            <div className="col-start-1 col-end-5 my-4 ml-auto rounded-xl border border-gray-700 p-4 shadow-md">
              <h3 className="mb-1 text-lg font-semibold">
                Vivekanand Education Society's Institute Of Technology (VESIT)
              </h3>
              <p className="text-justify leading-tight">
                <time className="mb-2 block text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                  Will graduate on May, 2023
                </time>
                Secured an average of 9.87 pointer
              </p>
            </div>
            <div className="relative col-start-5 col-end-6 mr-10 md:mx-auto">
              <div className="flex h-full w-6 items-center justify-center">
                <div className="pointer-events-none h-full w-1 bg-cyan-700"></div>
              </div>
              <div className="absolute top-1/2 -mt-3 h-6 w-6 rounded-full bg-green-400 shadow"></div>
            </div>
          </div>
          <div className="flex md:contents">
            <div className="relative col-start-5 col-end-6 mr-10 md:mx-auto">
              <div className="flex h-full w-6 items-center justify-center">
                <div className="pointer-events-none h-full w-1 bg-cyan-700"></div>
              </div>
              <div className="absolute top-1/2 -mt-3 h-6 w-6 rounded-full bg-green-400 shadow"></div>
            </div>
            <div className="col-start-6 col-end-10 my-4 mr-auto rounded-xl border border-gray-700 p-4 shadow-md">
              <h3 className="mb-1 text-lg font-semibold">
                Fr. Agnels Multipurpose School and Jr. College
              </h3>
              <p className="text-justify leading-tight">
                <time className="mb-2 block text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                  Graduated on June 11th, 2019
                </time>
                Scored 86% in my final board exam.
              </p>
            </div>
          </div>
          <div className="flex flex-row-reverse md:contents">
            <div className="col-start-1 col-end-5 my-4 ml-auto rounded-xl border border-gray-700 p-4 shadow-md">
              <h3 className="mb-1 text-lg font-semibold">North Point School</h3>
              <p className="text-justify leading-tight">
                <time className="mb-2 block text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                  Graduated on May 30th, 2017
                </time>
                Scored 93% in my final board exam.
              </p>
            </div>
            <div className="relative col-start-5 col-end-6 mr-10 md:mx-auto">
              <div className="flex h-full w-6 items-center justify-center">
                <div className="pointer-events-none h-full w-1 bg-cyan-700"></div>
              </div>
              <div className="absolute top-1/2 -mt-3 h-6 w-6 rounded-full bg-green-400 shadow"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Timeline
