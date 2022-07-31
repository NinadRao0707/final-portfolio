import React from 'react'
import { FiEye } from 'react-icons/fi'

function ProfileCard() {
  return (
    <section className="mb-10 motion-safe:animate-fadeIn lg:relative lg:z-10 lg:pb-0">
      <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-8 lg:px-6">
        <div className="relative">
          <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:h-full lg:p-0 lg:pt-6">
            <div className="aspect-w-10 aspect-h-6 sm:aspect-w-16 sm:aspect-h-7 lg:aspect-none overflow-hidden lg:h-full">
              <img
                src="/images/profile pic.jpg"
                alt="Profile Picture"
                width={1000}
                height={1000}
                loading="lazy"
                className="rounded-full border-2 border-green-400"
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
                  leadership experience and abilities in order to achieve goals.
                </p>
              </div>
              <footer className="mt-6">
                <p className="text-base font-medium text-white">Ninad Rao</p>
                <p className="text-base font-medium text-cyan-100">
                  Student | Web Developer
                </p>
              </footer>
            </blockquote>
            <a
              href="/Ninad Rao.pdf"
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
  )
}

export default ProfileCard
