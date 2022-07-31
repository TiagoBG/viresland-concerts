/* eslint-disable no-negated-condition */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable no-undefined */
/* eslint-disable no-extra-parens */
/* eslint-disable no-ternary */
/* eslint-disable multiline-ternary */
/* eslint-disable react/forbid-component-props */
/* eslint-disable sort-keys */
/* eslint-disable sort-imports */
/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import LongLogo from '../../public/assets/images/VConcertsLong.png'
import Logo from '../../public/assets/images/VConcerts.png'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useSession, signOut } from 'next-auth/react'
import { useSessionStatus } from '../../utils/userSessionStatus'


function classNames(...classes : any) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  const { isLoading, isLoggedIn } = useSessionStatus()
  const { data: session } = useSession()
  const userName = session?.user?.email ?? 'My Profile'

  const router = useRouter()

  const navigation = [
    { name: 'Shows',
      href: '/shows',
      requireAuth: false,
      current: router.pathname === '/shows' },
    { name: 'Bands',
      href: '/bands',
      requireAuth: false,
      current: router.pathname === '/bands' },
    { name: 'Log In',
      href: '/login',
      requireAuth: Boolean(session),
      current: router.pathname === '/signin' }
  ]

  console.log(Boolean(session))

  return (
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon aria-hidden="true" className="block h-6 w-6" />
                  ) : (
                    <MenuIcon aria-hidden="true" className="block h-6 w-6" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 flex items-center">
                  <Link href="/">
                    <img
                      alt="Viresland Concerts"
                      className="block lg:hidden h-8 w-20 cursor-pointer"
                      src={Logo.src}
                    />
                  </Link>
                  <Link href="/">
                    <img
                      alt="Viresland Concerts"
                      className="hidden lg:block h-8 w-48 cursor-pointer"
                      src={LongLogo.src}
                      width="300px"
                    />
                  </Link>
                </div>
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      !item.requireAuth ? (
                        <Link href={item.href} key={item.name}>
                          <p
                            aria-current={item.current ? 'page' : undefined}
                            className={classNames(
                              item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                              'px-3 py-2 rounded-md text-sm font-medium cursor-pointer'
                            )}
                          >{item.name}
                          </p>
                        </Link>
                      ) : null
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">

                {/* Profile dropdown */}
                {session ? (
                  <Menu as="div" className="ml-3 relative">
                    <div>
                      <Menu.Button className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                        <span className="sr-only">Open user menu</span>
                        <img
                          alt=""
                          className="h-8 w-8 rounded-full"
                          height="50px"
                          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                          width="200px"
                        />
                      </Menu.Button>
                    </div>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                              href="#"
                            >
                              Your Reservations
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <button
                              className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                              onClick={() => signOut()}
                              type="button"
                            >
                              Sign out
                            </button>
                          )}
                        </Menu.Item>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                ) : null}
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1" style={{ border: '2px solid pink' }}>
              {navigation.map((item) => (
                <Disclosure.Button
                  aria-current={item.current ? 'page' : undefined}
                  as="a"
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block px-3 py-2 rounded-md text-base font-medium'
                  )}
                  href={item.href}
                  key={item.name}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
