/* eslint-disable no-undefined */
/* eslint-disable no-ternary */
/* eslint-disable no-undef */
/* eslint-disable sort-imports */
import axios from 'axios'
import Link from 'next/link'
import { signIn } from 'next-auth/react'
import Swal from 'sweetalert2'
import { appendErrors, useForm } from 'react-hook-form'
import { useRouter } from 'next/router'

import { setToken } from '../../utils/jwtMiddleware'
import AuthContext from 'context/userAuth'
import { useContext, useEffect } from 'react'


function LoginForm() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm()
  const router = useRouter()

  const { user, login } = useContext(AuthContext)

  function loginValidation(res: any, data: any) {
    const loggedUser = res.data.rows.find((item:any) => item.email === data.email)

    if (loggedUser === undefined || data.password !== loggedUser.user_password) {
      Swal.fire(
        'Something went wrong',
        'Please check the credentials and try again later',
        'error'
      )
    } else {
      sessionStorage.setItem('pumpkin', setToken(loggedUser))
      login({ token: setToken(loggedUser),
        username: loggedUser.username })
      router.replace('/shows')
    }
  }

  const loginHandler = (data: any) => {
    axios.get('/api/getUsers').
      then((res) => {
        loginValidation(res, data)
      }).
      catch((err) => console.log(err))
  }


  console.log(watch('example')) // Watch input value by passing the name of it

  return (
    <div className="mt-10 sm:-mt-6 md:mt-0 md:max-w-3xl md:m-auto md:mt-8 p-2">
      <div className="md:grid md:grid-cols-2 shadow overflow-hidden sm:rounded-md m-auto">
        <div className="mt-5 md:mt-0">
          <form onSubmit={handleSubmit(loginHandler)}>
            <div className="">
              <div className="px-4 pt-4 bg-white sm:p-6">
                <h3 className="text-lg font-medium leading-6 text-dark pb-8 text-center">Log In</h3>
                <div className="grid grid-cols-6 gap-8">
                  <div className="col-span-6 sm:col-span-8">
                    <label className="block text-sm font-medium text-gray-700" htmlFor="first-name">Email</label>
                    <input
                      autoComplete="given-email"
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      id="login-email"
                      type="email"
                      {...register('email', { required: true })}
                    />
                    {errors.email
                      ? <p className="text-red-500 text-xs italic mt-2"> Email is not valid </p>
                      : null}
                  </div>
                  <div className="col-span-6 sm:col-span-8">
                    <label className="block text-sm font-medium text-gray-700" htmlFor="password">Password</label>
                    <input
                      autoComplete="password-level2"
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      id="password"
                      type="password"
                      {...register('password', { required: true })}
                    />
                    {errors.email
                      ? <p className="text-red-500 text-xs italic mt-2"> Password is not valid </p>
                      : null}
                  </div>
                  <div className="col-span-6 sm:col-span-8 text-center">
                    <p className="text-sm font-medium leading-6 text-dark">Not registered? <span style={{ color: 'blue' }}><Link href="/signin">Sign In</Link></span></p>
                  </div>
                </div>
              </div>
              <div className="px-4 pb-3 text-center bg-white sm:px-6">
                <button className="inline-flex justify-center py-2 px-6 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" type="submit">Let's go!</button>
              </div>
            </div>
          </form>
        </div>
        <div className="bg-[url('../public/assets/images/coachella.jpg')] h-full bg-cover bg-opacity-40 w-96 rounded-r-md" />
      </div>
    </div>
  )
}

export default LoginForm
