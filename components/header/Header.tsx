'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

export default function Header({home} : {home:boolean}) {
    const [navbar, setNavbar] = useState(false);
  return (
    // ${(home === true) ? 'fixed ' : ''}
    <header className={`${(home === true) ? 'relative ' : ''} z-50 w-full`}>
        <nav className='px-2 sm:px-4 py-2.5 rounded'>
            <div className="container flex flex-wrap justify-between items-center mx-auto">
                <Link href='/' className="flex items-center">
                    <img
                        className="imgNav"
                        src="/log.png"
                        alt="Tsukimoto Logo"
                    />
                    <h1 className="text-xl font-semibold text-white pl-2 headLink">
                        Tsukimoto
                    </h1>
                </Link>
                <button
            className={`p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border md:hidden ${navbar ? 'btnav pb-4' : 'rounded-xl pb-2'}`}
            onClick={() => setNavbar(!navbar)}
          >
            {navbar ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`w-6 h-6 ${navbar ? 'text-white' : 'text-white'}`}
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`w-6 h-6 ${navbar ? 'text-white' : 'text-white'}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
          <div
            className={`w-full md:block md:w-auto ${
              navbar ? "block resnav" : "hidden"
            }`}
          >
            <ul className="flex flex-col p-4 mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0">
              <li>
                <a href="/" className="block py-2 pr-4 pl-3 text-white rounded md:hover:bg-transparent md:border-0 md:hover:text-black md:p-0 headLink">
                    Inicio
                </a>
              </li>
              <li>
                <a href={(home === true) ? '#news' : '/news'} className="block py-2 pr-4 pl-3 text-white rounded md:hover:bg-transparent md:border-0 md:hover:text-black md:p-0 headLink">
                  Noticias
                </a>
              </li>
              <li>
                <a href={(home === true) ? '#series' : '/#series'} className="block py-2 pr-4 pl-3 text-white rounded md:hover:bg-transparent md:border-0 md:hover:text-black md:p-0 headLink">
                  Series
                </a>
              </li>
              <li>
                <a href={(home === true) ? '#stores' : '/#stores'} className="block py-2 pr-4 pl-3 text-white rounded md:hover:bg-transparent md:border-0 md:hover:text-black md:p-0 headLink">
                  Tiendas
                </a>
              </li>
              <li>
                <div className='pl-4 flex flex-1 items-center justify-center'>
                  <Link className='pr-1' href='https://www.instagram.com/tsukimotoeditorial/'>
                    <img className='imgNavSocial' alt='' src='/instagram.png' width={30} height={30}/>
                  </Link>
                  <Link className='pr-1' href='https://twitter.com/TsukimotoEdit'>
                    <img alt='' className='rounded-lg imgNavSocial' src='/twitter.png' width={30} height={30}/>
                  </Link>
                  <Link href='https://www.facebook.com/TsukimotoEdit/'>
                    <img alt='' className='rounded-lg imgNavSocial' src='/facebook.png' width={30} height={30}/>
                  </Link>
                </div>
              </li>
            </ul>
          </div>
            </div>
        </nav>
    </header>
  )
}
