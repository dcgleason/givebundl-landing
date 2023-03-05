import React from "react";
import  Link  from 'next/link'
import Image from 'next/image'


const Instructions = () => {

    return (
        <div className="px-4 py-16 mx-auto w-full bg-white md:px-24 lg:px-8 lg:py-20">
        <div className="grid gap-6 row-gap-10 lg:grid-cols-2 max-w-6xl mx-auto">
        <h2 id="details-heading" className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              How it works:
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
                  Initiate a Bundl:
                </p>{" "}
                <p className="text-gray-700">
                  From within the app, select the team members you&apos;d like to contribute to your teammate&apos;s Bundl book. You&apos;ll also write a brief message that will be sent out to all of the group members contributing to your teammate&apos;s Bundl that explains the purpose of this surprise.
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
                <p className="text-gray-900 mb-2 text-lg font-bold">Collect the love:</p>{" "}
                <p className="text-gray-700">
                  Your Bundl contributors are invited into a temporary, private, and secret channel that collects their words of support, congratulations, and care via available prompts that you as the Bundl gifter select. Contributors also have the option to upload a relevent picture.
                  
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
                  Compile the love:
                </p>{" "}
                <p className="text-gray-700">
                 Once the messages and pictures are collected from your team, their kind words and special pictures are compiled
                   into a personalized, physical book aka a Bundl book and delivered to your recipient&apos;s home or office address (a digital web-based, personalized version is also made available)
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
                  Feel the love:
                </p>{" "}
                <p className="text-gray-700">
                  Your teammate recipient will be surprised and delighted to receive a personalized, physical book of words of support, congratulations, and care to them from their team.
                </p>
              </div>
            </div>
          </div>{" "}
        </div>
      </div>
    );

}

export default Instructions;