import React from "react";
import  Link  from 'next/link'
import Image from 'next/image'


const Instructions = () => {

    return (
        <div className="px-4 py-16 mx-auto w-full bg-white md:px-24 lg:px-8 lg:py-20">
        <div className="grid gap-6 row-gap-10 lg:grid-cols-2 max-w-6xl mx-auto">
        <h2 id="details-heading" className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              How it works
                </h2>
          <div className="lg:py-6 lg:pr-16">
            <div className="flex">
              <div className="flex flex-col items-center mr-4">
                <div>
                  <div className="flex items-center justify-center w-10 h-10 border rounded-full">
                    <svg
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      viewBox="0 0 24 24"
                      className="w-4 text-red-500"
                    >
                      <line
                        fill="none"
                        strokeMiterlimit={10}
                        x1={12}
                        y1={2}
                        x2={12}
                        y2={22}
                      />{" "}
                      <polyline
                        fill="none"
                        strokeMiterlimit={10}
                        points="19,15 12,22 5,15"
                      />
                    </svg>
                  </div>
                </div>{" "}
                <div className="w-px h-full bg-gray-300" />
              </div>{" "}
              <div className="pt-1 pb-8">
                <p className="text-gray-900 mb-2 text-lg font-bold">
                  Order a Bundle book:
                </p>{" "}
                <p className="text-gray-700">
                  Order a Bundle book. Input the email addresses of the family and friends of the person you are giving a Bundle book to. You&apos;ll also write a brief message that will be sent out to all Bundle contributors.
                </p>
              </div>
            </div>{" "}
            <div className="flex">
              <div className="flex flex-col items-center mr-4">
                <div>
                  <div className="flex items-center justify-center w-10 h-10 border rounded-full">
                    <svg
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      viewBox="0 0 24 24"
                      className="w-4 text-red-500"
                    >
                      <line
                        fill="none"
                        strokeMiterlimit={10}
                        x1={12}
                        y1={2}
                        x2={12}
                        y2={22}
                      />{" "}
                      <polyline
                        fill="none"
                        strokeMiterlimit={10}
                        points="19,15 12,22 5,15"
                      />
                    </svg>
                  </div>
                </div>{" "}
                <div className="w-px h-full bg-gray-300" />
              </div>{" "}
              <div className="pt-1 pb-8">
                <p className="text-gray-900 mb-2 text-lg font-bold">Collect the letters:</p>{" "}
                <p className="text-gray-700">
                  We reach out, with your message, to your Bundle book contributors. We start collecting letters and that ask that your contributors to offer advice to your recipient, any favorite memories they have with your recipient, and/or qualities they admire about your recipient via prompts (you can add your own prompts here, too!). We also collect pictures during this time.
                  
                </p>
              </div>
            </div>{" "}
            <div className="flex">
              <div className="flex flex-col items-center mr-4">
                <div>
                  <div className="flex items-center justify-center w-10 h-10 border rounded-full">
                    <svg
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      viewBox="0 0 24 24"
                      className="w-4 text-red-500"
                    >
                      <line
                        fill="none"
                        strokeMiterlimit={10}
                        x1={12}
                        y1={2}
                        x2={12}
                        y2={22}
                      />{" "}
                      <polyline
                        fill="none"
                        strokeMiterlimit={10}
                        points="19,15 12,22 5,15"
                      />
                    </svg>
                  </div>
                </div>{" "}
                <div className="w-px h-full bg-gray-300" />
              </div>{" "}
              <div className="pt-1 pb-8">
                <p className="text-gray-900 mb-2 text-lg font-bold">
                  Compile the letters:
                </p>{" "}
                <p className="text-gray-700">
                 Once the letters and pictures are collected from friends and family, their kind words and special pictures will be
                  compiled into a personalized bundle of love aka a physical Bundle book. 
                </p>
              </div>
            </div>{" "}
            <div className="flex">
              <div className="flex flex-col items-center mr-4">
                <div>
                  <div className="flex items-start justify-center w-10 h-10 border rounded-full">
                    <svg
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      className="mt-2 w-6 text-red-500"
                    >
                      <polyline
                        fill="none"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeMiterlimit={10}
                        points="6,12 10,16 18,8"
                      />
                    </svg>
                  </div>
                </div>
              </div>{" "}
              <div className="pt-1 pb-8">
                <p className="text-gray-900 mb-2 text-lg font-bold">
                  Give the gift:
                </p>{" "}
                <p className="text-gray-700">
                  We deliver your Bundle book a few days ahead of schedule, so you have time to gift it to your lucky recipient.
                </p>
              </div>
            </div>
          </div>{" "}
        </div>
      </div>
    );

}

export default Instructions;