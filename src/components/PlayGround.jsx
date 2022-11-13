import React from "react";
import module_styles from "./playground.module.css";

export const PlayGround = () => {
  const styles = { color: "red" };
  const { playground } = module_styles;

  return (
    <React.Fragment>
      <nav className='bg-gray-800'>
        <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
          <div className='relative flex h-16 items-center justify-between'>
            <div className='absolute inset-y-0 left-0 flex items-center sm:hidden'>
              {/* Mobile menu button*/}
              <button
                type='button'
                className='inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'
                aria-controls='mobile-menu'
                aria-expanded='false'
              >
                <span className='sr-only'>Open main menu</span>
                {/*
      Icon when menu is closed.

      Heroicon name: outline/bars-3

      Menu open: "hidden", Menu closed: "block"
    */}
                <svg
                  className='block h-6 w-6'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth='1.5'
                  stroke='currentColor'
                  aria-hidden='true'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
                  />
                </svg>
                {/*
      Icon when menu is open.

      Heroicon name: outline/x-mark

      Menu open: "block", Menu closed: "hidden"
    */}
                <svg
                  className='hidden h-6 w-6'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth='1.5'
                  stroke='currentColor'
                  aria-hidden='true'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M6 18L18 6M6 6l12 12'
                  />
                </svg>
              </button>
            </div>
            <div className='flex flex-1 items-center justify-center sm:items-stretch sm:justify-start'>
              <div className='flex flex-shrink-0 items-center'>
                <img
                  className='block h-8 w-auto lg:hidden'
                  src='https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500'
                  alt='Your Company'
                />
                <img
                  className='hidden h-8 w-auto lg:block'
                  src='https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500'
                  alt='Your Company'
                />
              </div>
              <div className='hidden sm:ml-6 sm:block'>
                <div className='flex space-x-4'>
                  {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                  <a
                    href='#'
                    className='bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium'
                    aria-current='page'
                  >
                    Dashboard
                  </a>
                  <a
                    href='#'
                    className='text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'
                  >
                    Team
                  </a>
                  <a
                    href='#'
                    className='text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'
                  >
                    Projects
                  </a>
                  <a
                    href='#'
                    className='text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'
                  >
                    Calendar
                  </a>
                </div>
              </div>
            </div>
            <div className='absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0'>
              <button
                type='button'
                className='rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800'
              >
                <span className='sr-only'>View notifications</span>
                {/* Heroicon name: outline/bell */}
                <svg
                  className='h-6 w-6'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth='1.5'
                  stroke='currentColor'
                  aria-hidden='true'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0'
                  />
                </svg>
              </button>
              {/* Profile dropdown */}
              <div className='relative ml-3'>
                <div>
                  <button
                    type='button'
                    className='flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800'
                    id='user-menu-button'
                    aria-expanded='false'
                    aria-haspopup='true'
                  >
                    <span className='sr-only'>Open user menu</span>
                    <img
                      className='h-8 w-8 rounded-full'
                      src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                      alt
                    />
                  </button>
                </div>
                {/*
      Dropdown menu, show/hide based on menu state.

      Entering: "transition ease-out duration-100"
        From: "transform opacity-0 scale-95"
        To: "transform opacity-100 scale-100"
      Leaving: "transition ease-in duration-75"
        From: "transform opacity-100 scale-100"
        To: "transform opacity-0 scale-95"
    */}
                <div
                  className='absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'
                  role='menu'
                  aria-orientation='vertical'
                  aria-labelledby='user-menu-button'
                  tabIndex={-1}
                >
                  {/* Active: "bg-gray-100", Not Active: "" */}
                  <a
                    href='#'
                    className='block px-4 py-2 text-sm text-gray-700'
                    role='menuitem'
                    tabIndex={-1}
                    id='user-menu-item-0'
                  >
                    Your Profile
                  </a>
                  <a
                    href='#'
                    className='block px-4 py-2 text-sm text-gray-700'
                    role='menuitem'
                    tabIndex={-1}
                    id='user-menu-item-1'
                  >
                    Settings
                  </a>
                  <a
                    href='#'
                    className='block px-4 py-2 text-sm text-gray-700'
                    role='menuitem'
                    tabIndex={-1}
                    id='user-menu-item-2'
                  >
                    Sign out
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Mobile menu, show/hide based on menu state. */}
        <div className='sm:hidden' id='mobile-menu'>
          <div className='space-y-1 px-2 pt-2 pb-3'>
            {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
            <a
              href='#'
              className='bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium'
              aria-current='page'
            >
              Dashboard
            </a>
            <a
              href='#'
              className='text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium'
            >
              Team
            </a>
            <a
              href='#'
              className='text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium'
            >
              Projects
            </a>
            <a
              href='#'
              className='text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium'
            >
              Calendar
            </a>
          </div>
        </div>
      </nav>

      <div className='relative overflow-hidden bg-white'>
        <div className='mx-auto max-w-7xl'>
          <div className='relative z-10 bg-white pb-8 sm:pb-16 md:pb-20 lg:w-full lg:max-w-2xl lg:pb-28 xl:pb-32'>
            <svg
              className='absolute inset-y-0 right-0 hidden h-full w-48 translate-x-1/2 transform text-white lg:block'
              fill='currentColor'
              viewBox='0 0 100 100'
              preserveAspectRatio='none'
              aria-hidden='true'
            >
              <polygon points='50,0 100,0 50,100 0,100' />
            </svg>
            <div>
              <div className='relative px-4 pt-6 sm:px-6 lg:px-8'>
                <nav
                  className='relative flex items-center justify-between sm:h-10 lg:justify-start'
                  aria-label='Global'
                >
                  <div className='flex flex-shrink-0 flex-grow items-center lg:flex-grow-0'>
                    <div className='flex w-full items-center justify-between md:w-auto'>
                      <a href='#'>
                        <span className='sr-only'>Your Company</span>
                        <img
                          alt='Your Company'
                          className='h-8 w-auto sm:h-10'
                          src='https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600'
                        />
                      </a>
                      <div className='-mr-2 flex items-center md:hidden'>
                        <button
                          type='button'
                          className='inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'
                          aria-expanded='false'
                        >
                          <span className='sr-only'>Open main menu</span>
                          {/* Heroicon name: outline/bars-3 */}
                          <svg
                            className='h-6 w-6'
                            xmlns='http://www.w3.org/2000/svg'
                            fill='none'
                            viewBox='0 0 24 24'
                            strokeWidth='1.5'
                            stroke='currentColor'
                            aria-hidden='true'
                          >
                            <path
                              strokeLinecap='round'
                              strokeLinejoin='round'
                              d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className='hidden md:ml-10 md:block md:space-x-8 md:pr-4'>
                    <a
                      href='#'
                      className='font-medium text-gray-500 hover:text-gray-900'
                    >
                      Product
                    </a>
                    <a
                      href='#'
                      className='font-medium text-gray-500 hover:text-gray-900'
                    >
                      Features
                    </a>
                    <a
                      href='#'
                      className='font-medium text-gray-500 hover:text-gray-900'
                    >
                      Marketplace
                    </a>
                    <a
                      href='#'
                      className='font-medium text-gray-500 hover:text-gray-900'
                    >
                      Company
                    </a>
                    <a
                      href='#'
                      className='font-medium text-indigo-600 hover:text-indigo-500'
                    >
                      Log in
                    </a>
                  </div>
                </nav>
              </div>
              {/*
    Mobile menu, show/hide based on menu open state.

    Entering: "duration-150 ease-out"
      From: "opacity-0 scale-95"
      To: "opacity-100 scale-100"
    Leaving: "duration-100 ease-in"
      From: "opacity-100 scale-100"
      To: "opacity-0 scale-95"
  */}
              <div className='absolute inset-x-0 top-0 z-10 origin-top-right transform p-2 transition md:hidden'>
                <div className='overflow-hidden rounded-lg bg-white shadow-md ring-1 ring-black ring-opacity-5'>
                  <div className='flex items-center justify-between px-5 pt-4'>
                    <div>
                      <img
                        className='h-8 w-auto'
                        src='https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600'
                        alt
                      />
                    </div>
                    <div className='-mr-2'>
                      <button
                        type='button'
                        className='inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'
                      >
                        <span className='sr-only'>Close main menu</span>
                        {/* Heroicon name: outline/x-mark */}
                        <svg
                          className='h-6 w-6'
                          xmlns='http://www.w3.org/2000/svg'
                          fill='none'
                          viewBox='0 0 24 24'
                          strokeWidth='1.5'
                          stroke='currentColor'
                          aria-hidden='true'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            d='M6 18L18 6M6 6l12 12'
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div className='space-y-1 px-2 pt-2 pb-3'>
                    <a
                      href='#'
                      className='block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900'
                    >
                      Product
                    </a>
                    <a
                      href='#'
                      className='block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900'
                    >
                      Features
                    </a>
                    <a
                      href='#'
                      className='block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900'
                    >
                      Marketplace
                    </a>
                    <a
                      href='#'
                      className='block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900'
                    >
                      Company
                    </a>
                  </div>
                  <a
                    href='#'
                    className='block w-full bg-gray-50 px-5 py-3 text-center font-medium text-indigo-600 hover:bg-gray-100'
                  >
                    Log in
                  </a>
                </div>
              </div>
            </div>
            <main className='mx-auto mt-10 max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28'>
              <div className='sm:text-center lg:text-left'>
                <h1 className='text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl'>
                  <span className='block xl:inline'>Data to enrich your</span>
                  <span className='block text-indigo-600 xl:inline'>
                    online business
                  </span>
                </h1>
                <p className='mt-3 text-base text-gray-500 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0'>
                  Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure
                  qui lorem cupidatat commodo. Elit sunt amet fugiat veniam
                  occaecat fugiat aliqua.
                </p>
                <div className='mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start'>
                  <div className='rounded-md shadow'>
                    <a
                      href='#'
                      className='flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 md:py-4 md:px-10 md:text-lg'
                    >
                      Get started
                    </a>
                  </div>
                  <div className='mt-3 sm:mt-0 sm:ml-3'>
                    <a
                      href='#'
                      className='flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-100 px-8 py-3 text-base font-medium text-indigo-700 hover:bg-indigo-200 md:py-4 md:px-10 md:text-lg'
                    >
                      Live demo
                    </a>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
        <div className='lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2'>
          <img
            className='h-56 w-full object-cover sm:h-72 md:h-96 lg:h-full lg:w-full'
            src='https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80'
            alt
          />
        </div>
      </div>
    </React.Fragment>
  );
};
