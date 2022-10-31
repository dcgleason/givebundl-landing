import React from "react";
import  Link  from 'next/link'
import Image from 'next/image'


const Instructions = () => {

    return (
        <div className="px-4 py-16 mx-auto w-full bg-white md:px-24 lg:px-8 lg:py-20">
        <div className="grid gap-6 row-gap-10 lg:grid-cols-2 max-w-6xl mx-auto">
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
                  How it works.
                </p>{" "}
                <p className="text-gray-700">
                  We create a book of love letters written by your friends and
                  family, then we send you the completed Bundle book to gift.
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
                <p className="text-gray-900 mb-2 text-lg font-bold">Initiate Collection</p>{" "}
                <p className="text-gray-700">
                  Once we start the proces by you, with your help we start collecting letters from the family and friends of your loved one who will be recieving the Bundle book. 
                  
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
                  Gather letters
                </p>{" "}
                <p className="text-gray-700">
                 Once we collect letters from your friends and family, their words of advice, love, and support will be
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
                  Give the gift
                </p>{" "}
                <p className="text-gray-700">
                  We deliver your Bundle book a few days ahead of schedule, so you have time to gift it to your recipient.
                </p>
              </div>
            </div>
          </div>{" "}
          <div className="relative">
            <Image
              src="https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              alt=""
              className="inset-0 object-cover object-bottom w-full rounded shadow-lg h-96 lg:absolute lg:h-full"
              width="50"
              height="50"
            />
          </div>
        </div>
      </div>
    );

}

export default Instructions;