import axios from 'axios'
import { useForm } from 'react-hook-form'

function LoginForm() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm()
  const signinHandler = (data: any) => {
    axios.post('/api/users', data).
      then((res) => {
        console.log(res)
      }).
      catch((err) => console.log(err))
  }

  console.log(watch('example')) // Watch input value by passing the name of it

  return (
    <div className="mt-10 sm:-mt-6 md:mt-0 md:max-w-3xl md:m-auto md:mt-8 p-2">
      <div className="md:grid md:grid-cols-2 shadow overflow-hidden sm:rounded-md m-auto">
        <div className="mt-5 md:mt-0">
          <form onSubmit={handleSubmit(signinHandler)}>
            <div className="">
              <div className="px-4 py-5 bg-white sm:p-6">
                <h3 className="text-lg font-medium leading-6 text-dark pb-8">Log In</h3>
                <div className="grid grid-cols-6 gap-8">
                  <div className="col-span-6 sm:col-span-8">
                    <label className="block text-sm font-medium text-gray-700" htmlFor="first-name">First name</label>
                    <input
                      autoComplete="given-name"
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      id="name"
                      type="text"
                      {...register('username')}
                    />
                  </div>
                  <div className="col-span-6 sm:col-span-8">
                    <label className="block text-sm font-medium text-gray-700" htmlFor="password">Password</label>
                    <input
                      autoComplete="password-level2"
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      id="password"
                      type="password"
                      {...register('password')}
                    />
                  </div>
                </div>
              </div>
              <div className="px-4 py-3 text-center bg-white sm:px-6">
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
