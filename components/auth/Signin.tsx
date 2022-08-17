/* eslint-disable no-undefined */
/* eslint-disable no-negated-condition */
/* eslint-disable no-ternary */
/* eslint-disable prefer-named-capture-group */
import axios from 'axios'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import Swal from 'sweetalert2'

function SignInForm() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm()
  const [
    passwordMatch,
    setPasswordMatch
  ] = useState('')

  const router = useRouter()

  const signinHandler = (data: any) => {
    if (data.user_password === data.confirm_password) {
      axios.post('/api/users', data).
        then((res) => {
          Swal.fire({
            title: 'Sign up successfully',
            icon: 'success',
            html: '<p>Please log in to access to your account</p>',
            confirmButtonText: 'OK'

          }).then(() => {
            router.replace('/login')
          })
        }).
        catch((err) => {
          Swal.fire({
            title: `${err.statusCode === undefined
              ? 'Oops :('
              : err.statusCode} Something went wrong`,
            icon: 'error',
            html: '<p>Please contact rthe admin and try again later</p>',
            confirmButtonText: 'OK'

          })
        })
    }
  }

  console.log(watch('example')) // Watch input value by passing the name of it

  return (
    <div className="mt-10 sm:-mt-6 md:mt-0 md:max-w-5xl md:m-auto md:mt-8 p-2">
      <div className="md:grid md:grid-cols-3 shadow overflow-hidden sm:rounded-md">
        <div className="bg-[url('../public/assets/images/concert-signin.jpg')] h-full bg-cover">
          <div className="px-4 sm:px-0 mt-6 ml-6">
            <h3 className="text-lg font-medium leading-6 text-white">Sign In</h3>
            <p className="mt-6 text-sm text-white">Register to get tickets and enjoy the party</p>
          </div>
          <div className="mt-48 px-6 py-4 w-5/6">
            <p className="text-sm font-medium leading-6 text-white">Already registered? <span className="text-pink-400 font-bold"><Link href="/login">Log In</Link></span></p>
          </div>
        </div>
        <div className="mt-5 md:mt-0 md:col-span-2">
          <form onSubmit={handleSubmit(signinHandler)}>
            <div className="">
              <div className="px-4 py-5 bg-white sm:p-6">
                <div className="grid grid-cols-6 gap-6">
                  <div className="col-span-6 sm:col-span-3">
                    <label className="block text-sm font-medium text-gray-700" htmlFor="first-name">First name</label>
                    <input
                      autoComplete="given-name"
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      id="name"
                      type="text"
                      {...register('username', { pattern: /^[A-Za-z]+$/iu,
                        required: true })}
                    />
                    {errors.username
                      ? <p className="text-red-500 text-xs italic mt-2"> Please type a valid name </p>
                      : null}
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <label className="block text-sm font-medium text-gray-700" htmlFor="last-name">Last name</label>
                    <input
                      autoComplete="family-name"
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      id="lastname"
                      type="text"
                      {...register('lastname', { pattern: /^[A-Za-z]+$/iu,
                        required: true })}
                    />
                    {errors.lastname
                      ? <p className="text-red-500 text-xs italic mt-2"> Please type a valid lastname </p>
                      : null}
                  </div>

                  <div className="col-span-6 sm:col-span-4">
                    <label className="block text-sm font-medium text-gray-700" htmlFor="email-address">Email</label>
                    <input
                      autoComplete="email"
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      id="email"
                      type="text"
                      {...register('email', { pattern: /^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/u,
                        required: true })}
                    />
                    {errors.email
                      ? <p className="text-red-500 text-xs italic mt-2"> Please type a valid email </p>
                      : null}
                  </div>
                  <div className="col-span-6 sm:col-span-2">
                    <label className="block text-sm font-medium text-gray-700" htmlFor="password">City</label>
                    <input
                      autoComplete="city"
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      id="city"
                      type="text"
                      {...register('city', { pattern: /^[A-Za-z]+$/iu,
                        required: true })}
                    />
                    {errors.city
                      ? <p className="text-red-500 text-xs italic mt-2"> Please type a valid city </p>
                      : null}
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <label className="block text-sm font-medium text-gray-700" htmlFor="password">Password</label>
                    <input
                      autoComplete="password-level2"
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      id="password"
                      type="password"
                      {...register('user_password', { pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/u,
                        required: true })}
                    />
                    {errors.user_password
                      ? <p className="text-red-500 text-xs italic mt-2"> Please type a valid password </p>
                      : null}
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <label className="block text-sm font-medium text-gray-700" htmlFor="password">Confirm password</label>
                    <input
                      autoComplete="password-level2"
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      id="password"
                      type="password"
                      {...register('confirm_password', { required: true })}
                    />
                    {errors.confirm_password
                      ? <p className="text-red-500 text-xs italic mt-2"> Passwords do not match. Please type the right password </p>
                      : null}
                    {
                      passwordMatch !== ''
                        ? <p>{passwordMatch}</p>
                        : null
                    }
                  </div>
                </div>
                <div className="col-span-6 sm:col-span-8 text-center pt-6">
                  <p className="text-sm font-medium text-gray-400">*We value your privacy and will never share your information with anyone</p>
                </div>
              </div>
              <div className="px-4 pb-3 text-center bg-white sm:px-6">
                <button className="inline-flex justify-center py-2 px-6 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" type="submit">Sign In</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SignInForm
