import React, { useState, useEffect } from 'react';
import  Link  from 'next/Link'
import Image from 'next/Image'


const AILandingPage = () => {
  

    return (
        <>
  <link
    href="https://unpkg.com/tailwindcss@2.0.2/dist/tailwind.min.css"
    rel="stylesheet"
  />
  {/**/} {/**/}{" "}
  <div className="px-4 py-5 mx-auto w-full md:px-24 lg:px-8 bg-gray-200">
    <div className="relative flex grid items-center max-w-6xl grid-cols-2 mx-auto lg:grid-cols-3">
      <ul className="flex items-center hidden space-x-8 lg:flex">
        <li>
          <Link
            href="/"
            aria-label="Our product"
            title="Our product"
            className="font-medium tracking-wide text-gray-700 transition-colors duration-200"
          >
            About
          </Link>
        </li>{" "}
        <li>
          <Link
            href="/"
            aria-label="Our product"
            title="Our product"
            className="font-medium tracking-wide text-gray-700 transition-colors duration-200"
          >
            Browse
          </Link>
        </li>{" "}
        <li>
          <Link
            href="/"
            aria-label="Product pricing"
            title="Product pricing"
            className="font-medium tracking-wide text-gray-700 transition-colors duration-200"
          >
            Give a Bundle
          </Link>
        </li>
      </ul>{" "}
      <Link
        href="/"
        aria-label="Company"
        title="Company"
        className="inline-flex items-center lg:mx-auto"
      >
        <svg
          viewBox="0 0 24 24"
          strokeLinejoin="round"
          strokeWidth={2}
          strokeLinecap="round"
          strokeMiterlimit={10}
          stroke="currentColor"
          fill="none"
          className="w-8 text-gray-700"
        >
          <rect x={3} y={1} width={7} height={12} />{" "}
          <rect x={3} y={17} width={7} height={6} />{" "}
          <rect x={14} y={1} width={7} height={6} />{" "}
          <rect x={14} y={11} width={7} height={12} />
        </svg>{" "}
        <span className="ml-2 text-xl font-bold tracking-wide text-gray-900 uppercase">
          Company
        </span>
      </Link>{" "}
      <ul className="flex items-center hidden ml-auto space-x-8 lg:flex">
        <li>
          <Link
            href="/"
            aria-label="Sign in"
            title="Sign in"
            className="font-medium tracking-wide text-gray-700 transition-colors duration-200"
          >
            Signup
          </Link>
        </li>{" "}
        <li>
          <Link
            href="/"
            aria-label="Sign up"
            title="Sign up"
            className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-red-500 hover:bg-red-500 focus:shadow-outline focus:outline-none"
          ></Link>
        </li>
      </ul>{" "}
      <div className="ml-auto lg:hidden">
        <button
          aria-label="Open Menu"
          title="Open Menu"
          className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
        >
          <svg viewBox="0 0 24 24" className="w-5 text-gray-600">
            <path
              fill="currentColor"
              d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
            />{" "}
            <path
              fill="currentColor"
              d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
            />{" "}
            <path
              fill="currentColor"
              d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
            />
          </svg>
        </button>
      </div>
    </div>
  </div>{" "}
  {/**/} {/**/} {/**/} {/**/} {/**/} {/**/} {/**/} {/**/} {/**/}
  <div className="px-4 py-16 mx-auto w-full md:px-24 lg:px-8 lg:py-16 bg-gray-200">
    <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
      <div className="flex flex-col mb-16 sm:text-center sm:mb-0">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
            <span className="relative inline-block">
              <svg
                viewBox="0 0 52 24"
                fill="currentColor"
                className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
              >
                <defs>
                  <pattern
                    id="e77df901-b9d7-4b9b-822e-16b2d410795b"
                    x={0}
                    y={0}
                    width=".135"
                    height=".30"
                  >
                    <circle cx={1} cy={1} r=".7" />
                  </pattern>
                </defs>{" "}
                <rect
                  fill="url(#e77df901-b9d7-4b9b-822e-16b2d410795b)"
                  width={52}
                  height={24}
                />
              </svg>
            </span>
            What your friends and family really think.
          </h2>{" "}
          <p className="text-base text-gray-700 md:text-lg">
            Bundle is a book of love letters written by a recipient&apos;s friends
            and family and gifted to that person.
          </p>
        </div>{" "}
        <div>
          <Link
            href="/"
            className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-red-500 hover:bg-red-500 focus:shadow-outline focus:outline-none"
          >
            Buy now
          </Link>
        </div>
      </div>
    </div>
  </div>{" "}
  {/**/} {/**/} {/**/} {/**/} {/**/} {/**/} {/**/} {/**/} {/**/} {/**/} {/**/}
  {/**/}{" "}
  <div className="px-4 py-16 mx-auto bg-white w-full md:px-24 lg:px-8 lg:py-20">
    <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
      <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
        Give a Bundle of Love.
      </h2>{" "}
      <p className="text-base text-gray-700 md:text-lg">
        Send someone you love the ultimate gift--a book of letters from their friends
        and family to let them know how much they mean to you.
      </p>
    </div>{" "}
    <div className="grid max-w-screen-lg gap-8 row-gap-10 mx-auto lg:grid-cols-2">
      <div className="flex flex-col max-w-md sm:mx-auto sm:flex-row">
        <div className="mr-4">
          <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-red-100">
            <svg
              stroke="currentColor"
              viewBox="0 0 52 52"
              className="w-10 h-10 text-red-500"
            >
              <polygon
                strokeWidth={3}
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                points="29 13 14 29 25 29 23 39 38 23 27 23"
              />
            </svg>
          </div>
        </div>{" "}
        <div>
          <h6 className="mb-3 text-xl font-bold leading-5 text-gray-900">
            100% made with love.
          </h6>{" "}
          <p className="mb-3 text-sm text-gray-700">
            Our books are made with love, and we&apos;ll ship anywhere in the world!
          </p>{" "}
          <Link
            href="/"
            aria-label=""
            className="inline-flex items-center font-semibold text-red-500 transition-colors duration-200 hover:text-red-500"
          >
            Learn more
          </Link>
        </div>
      </div>{" "}
      <div className="flex flex-col max-w-md sm:mx-auto sm:flex-row">
        <div className="mr-4">
          <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-red-100">
            <svg
              stroke="currentColor"
              viewBox="0 0 52 52"
              className="w-10 h-10 text-red-500"
            >
              <polygon
                strokeWidth={3}
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                points="29 13 14 29 25 29 23 39 38 23 27 23"
              />
            </svg>
          </div>
        </div>{" "}
        <div>
          <h6 className="mb-3 text-xl font-bold leading-5 text-gray-900">
            The best way to show your partner how much they mean to you.
          </h6>{" "}
          <p className="mb-3 text-sm text-gray-700">
            The perfect gift for anniversaries, birthdays or just because!
          </p>{" "}
          <Link
            href="/"
            aria-label=""
            className="inline-flex items-center font-semibold text-red-500 transition-colors duration-200 hover:text-red-500"
          >
            Learn more
          </Link>
        </div>
      </div>
    </div>
  </div>{" "}
  {/**/} {/**/} {/**/} {/**/} {/**/} {/**/} {/**/} {/**/} {/**/} {/**/}
  {/**/} {/**/} {/**/} {/**/} {/**/} {/**/}{" "}
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
              family, then we send you the Bundle book.
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
            <p className="text-gray-900 mb-2 text-lg font-bold">Register</p>{" "}
            <p className="text-gray-700">
              Once initated by you, with your help, we start collecting letters from loved
              ones who want to write for your loved one.
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
             We&apos;ll collect letters from your friends and family which will be
              compiled into a personalized bundle of love aka a Bundle book for this one lucky
              recipient.
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
              We deliver Bundles quickly, so you won&apos;t be waiting long.
            </p>
          </div>
        </div>
      </div>{" "}
      <div className="relative">
        <Image
          src="https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          alt=""
          className="inset-0 object-cover object-bottom w-full rounded shadow-lg h-96 lg:absolute lg:h-full"
        />
      </div>
    </div>
  </div>{" "}
  {/**/} {/**/} {/**/} {/**/} {/**/}
  {/**/} {/**/} {/**/} {/**/} {/**/} {/**/} {/**/}{" "}
  <div className="px-4 py-16 mx-auto w-full bg-white md:px-24 lg:px-8 lg:py-20">
    <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
      <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
        It&apos;s time to express your love in a new way.
      </h2>{" "}
      <p className="text-base text-gray-700 md:text-lg">
        Bundle is the perfect gift for couples who are celebrating an
        anniversary, or just want to remind their partner how much they mean to
        them.
      </p>
    </div>{" "}
    <div className="grid gap-10 mx-auto sm:grid-cols-2 lg:grid-cols-4 lg:max-w-screen-lg">
      <div>
        <Image
          src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
          alt="Person"
          className="object-cover w-24 h-24 rounded-full shadow"
        />{" "}
        <div className="flex flex-col justify-center mt-2">
          <p className="text-lg font-bold text-gray-900">Oliver Aguilerra</p>{" "}
          <p className="mb-4 text-xs text-gray-900">Product Manager</p>{" "}
          <p className="text-sm tracking-wide text-gray-900">
            Pommy ipsum bent as a nine bob note naff off biscuits nowt, a cuppa
            unhand me sir hadn&apos;t done it in donkey&apos;s years sod&apos;s law.
          </p>
        </div>
      </div>{" "}
      <div>
        <Image
          src="https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          alt="Person"
          className="object-cover w-24 h-24 rounded-full shadow"
        />{" "}
        <div className="flex flex-col justify-center mt-2">
          <p className="text-lg font-bold text-gray-900">Marta Clermont</p>{" "}
          <p className="mb-4 text-xs text-gray-900">Design Team Lead</p>{" "}
          <p className="text-sm tracking-wide text-gray-900">
            Secondary fermentation degrees plato units of bitterness, cask
            conditioned ale ibu real ale pint glass craft beer. krausen goblet
            grainy ibu.
          </p>
        </div>
      </div>{" "}
      <div>
        <Image
          src="https://images.pexels.com/photos/3747435/pexels-photo-3747435.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          alt="Person"
          className="object-cover w-24 h-24 rounded-full shadow"
        />{" "}
        <div className="flex flex-col justify-center mt-2">
          <p className="text-lg font-bold text-gray-900">Alice Melbourne</p>{" "}
          <p className="mb-4 text-xs text-gray-900">Human Resources</p>{" "}
          <p className="text-sm tracking-wide text-gray-900">
            I just closed my eyes and in a nanosecond I cured myself from this
            ridiculous model of disease, addiction and obsession.
          </p>
        </div>
      </div>{" "}
      <div>
        <Image
          src="https://images.pexels.com/photos/3931603/pexels-photo-3931603.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          alt="Person"
          className="object-cover w-24 h-24 rounded-full shadow"
        />{" "}
        <div className="flex flex-col justify-center mt-2">
          <p className="text-lg font-bold text-gray-900">Martin Garix Potter</p>{" "}
          <p className="mb-4 text-xs text-gray-900">Good guy</p>{" "}
          <p className="text-sm tracking-wide text-gray-900">
            Est Schlitz shoreditch fashion axe. Messenger bag cupidatat
            Williamsburg sustainable aliqua, umami shabby chic artisan duis
            pickled.
          </p>
        </div>
      </div>
    </div>
  </div>{" "}
  {/**/} {/**/} {/**/} {/**/}
  {/**/} {/**/} {/**/} {/**/}{" "}
  <div className="relative w-full h-full w-full bg-white">
    <div className="absolute hidden w-full bg-gray-100 lg:block h-96" />{" "}
    <div className="relative px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
          The best present you&apos;ll ever give.
        </h2>{" "}
        <p className="text-base text-gray-700 md:text-lg">
          A Bundle is a thoughtful gift that celebrates the relationships of
          your friends and family with you. Each letter contains words to
          encourage, inspire and bring out the best in you.
        </p>
      </div>{" "}
      <div className="grid max-w-screen-md gap-10 md:grid-cols-2 sm:mx-auto">
        <div>
          <div className="p-8 bg-gray-900 rounded">
            <div className="mb-4 text-center">
              <p className="text-xl font-medium tracking-wide text-white">
                Starter Plan
              </p>{" "}
              <div className="flex items-center justify-center">
                <p className="mr-2 text-5xl font-semibold text-white lg:text-6xl">
                  $39
                </p>{" "}
                <p className="text-lg text-gray-500">/ month</p>
              </div>
            </div>{" "}
            <ul className="mb-8 space-y-2">
              <li className="flex items-center">
                <div className="mr-3">
                  <svg
                    viewBox="0 0 24 24"
                    strokeLinecap="round"
                    strokeWidth={2}
                    className="w-4 h-4 text-red-100"
                  >
                    <polyline
                      fill="none"
                      stroke="currentColor"
                      points="6,12 10,16 18,8"
                    />{" "}
                    <circle
                      cx={12}
                      cy={12}
                      fill="none"
                      r={11}
                      stroke="currentColor"
                    />
                  </svg>
                </div>{" "}
                <p className="font-medium text-gray-300">10 deploys per day</p>
              </li>{" "}
              <li className="flex items-center">
                <div className="mr-3">
                  <svg
                    viewBox="0 0 24 24"
                    strokeLinecap="round"
                    strokeWidth={2}
                    className="w-4 h-4 text-red-100"
                  >
                    <polyline
                      fill="none"
                      stroke="currentColor"
                      points="6,12 10,16 18,8"
                    />{" "}
                    <circle
                      cx={12}
                      cy={12}
                      fill="none"
                      r={11}
                      stroke="currentColor"
                    />
                  </svg>
                </div>{" "}
                <p className="font-medium text-gray-300">10 GB of storage</p>
              </li>{" "}
              <li className="flex items-center">
                <div className="mr-3">
                  <svg
                    viewBox="0 0 24 24"
                    strokeLinecap="round"
                    strokeWidth={2}
                    className="w-4 h-4 text-red-100"
                  >
                    <polyline
                      fill="none"
                      stroke="currentColor"
                      points="6,12 10,16 18,8"
                    />{" "}
                    <circle
                      cx={12}
                      cy={12}
                      fill="none"
                      r={11}
                      stroke="currentColor"
                    />
                  </svg>
                </div>{" "}
                <p className="font-medium text-gray-300">3 domains</p>
              </li>{" "}
              <li className="flex items-center">
                <div className="mr-3">
                  <svg
                    viewBox="0 0 24 24"
                    strokeLinecap="round"
                    strokeWidth={2}
                    className="w-4 h-4 text-red-100"
                  >
                    <polyline
                      fill="none"
                      stroke="currentColor"
                      points="6,12 10,16 18,8"
                    />{" "}
                    <circle
                      cx={12}
                      cy={12}
                      fill="none"
                      r={11}
                      stroke="currentColor"
                    />
                  </svg>
                </div>{" "}
                <p className="font-medium text-gray-300">SSL Certificates</p>
              </li>
            </ul>{" "}
            <button
              type="submit"
              className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-red-500 hover:bg-red-500 focus:shadow-outline focus:outline-none"
            >
              Get Now
            </button>
          </div>{" "}
          <div className="w-11/12 h-2 mx-auto bg-gray-900 rounded-b opacity-75" />{" "}
          <div className="w-10/12 h-2 mx-auto bg-gray-900 rounded-b opacity-50" />{" "}
          <div className="w-9/12 h-2 mx-auto bg-gray-900 rounded-b opacity-25" />
        </div>{" "}
        <div>
          <div className="p-8 bg-gray-900 rounded">
            <div className="mb-4 text-center">
              <p className="text-xl font-medium tracking-wide text-white">
                Pro Plan
              </p>{" "}
              <div className="flex items-center justify-center">
                <p className="mr-2 text-5xl font-semibold text-white lg:text-6xl">
                  $59
                </p>{" "}
                <p className="text-lg text-gray-500">/ month</p>
              </div>
            </div>{" "}
            <ul className="mb-8 space-y-2">
              <li className="flex items-center">
                <div className="mr-3">
                  <svg
                    viewBox="0 0 24 24"
                    strokeLinecap="round"
                    strokeWidth={2}
                    className="w-4 h-4 text-red-100"
                  >
                    <polyline
                      fill="none"
                      stroke="currentColor"
                      points="6,12 10,16 18,8"
                    />{" "}
                    <circle
                      cx={12}
                      cy={12}
                      fill="none"
                      r={11}
                      stroke="currentColor"
                    />
                  </svg>
                </div>{" "}
                <p className="font-medium text-gray-300">100 deploys per day</p>
              </li>{" "}
              <li className="flex items-center">
                <div className="mr-3">
                  <svg
                    viewBox="0 0 24 24"
                    strokeLinecap="round"
                    strokeWidth={2}
                    className="w-4 h-4 text-red-100"
                  >
                    <polyline
                      fill="none"
                      stroke="currentColor"
                      points="6,12 10,16 18,8"
                    />{" "}
                    <circle
                      cx={12}
                      cy={12}
                      fill="none"
                      r={11}
                      stroke="currentColor"
                    />
                  </svg>
                </div>{" "}
                <p className="font-medium text-gray-300">50 GB of storage</p>
              </li>{" "}
              <li className="flex items-center">
                <div className="mr-3">
                  <svg
                    viewBox="0 0 24 24"
                    strokeLinecap="round"
                    strokeWidth={2}
                    className="w-4 h-4 text-red-100"
                  >
                    <polyline
                      fill="none"
                      stroke="currentColor"
                      points="6,12 10,16 18,8"
                    />{" "}
                    <circle
                      cx={12}
                      cy={12}
                      fill="none"
                      r={11}
                      stroke="currentColor"
                    />
                  </svg>
                </div>{" "}
                <p className="font-medium text-gray-300">Unlimited domains</p>
              </li>{" "}
              <li className="flex items-center">
                <div className="mr-3">
                  <svg
                    viewBox="0 0 24 24"
                    strokeLinecap="round"
                    strokeWidth={2}
                    className="w-4 h-4 text-red-100"
                  >
                    <polyline
                      fill="none"
                      stroke="currentColor"
                      points="6,12 10,16 18,8"
                    />{" "}
                    <circle
                      cx={12}
                      cy={12}
                      fill="none"
                      r={11}
                      stroke="currentColor"
                    />
                  </svg>
                </div>{" "}
                <p className="font-medium text-gray-300">SSL Certificates</p>
              </li>
            </ul>{" "}
            <button
              type="submit"
              className="inline-flex items-center justify-center w-full h-12 px-6 font-semibold tracking-wide text-white transition duration-200 rounded shadow-md bg-red-500 hover:bg-red-500 focus:shadow-outline focus:outline-none"
            >
              Get Now
            </button>
          </div>{" "}
          <div className="w-11/12 h-2 mx-auto bg-gray-900 rounded-b opacity-75" />{" "}
          <div className="w-10/12 h-2 mx-auto bg-gray-900 rounded-b opacity-50" />{" "}
          <div className="w-9/12 h-2 mx-auto bg-gray-900 rounded-b opacity-25" />
        </div>
      </div>
    </div>
  </div>{" "}
  {/**/} {/**/} {/**/} {/**/} {/**/} {/**/} {/**/}
</>

    );

}

export default AILandingPage;