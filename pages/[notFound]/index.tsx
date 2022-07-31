/* eslint-disable react/jsx-no-bind */
import NotFoundImg from '../../public/assets/images/NotFoundVC.png'
import { useRouter } from 'next/router'

function NotFound() {
  const router = useRouter()

  function notFoundHandler() {
    router.push('shows')
  }

  return (
    <div className="mt-10 sm:-mt-6 md:mt-0 md:max-w-4xl md:grid-cols-3 md:m-auto md:mt-8 p-6 bg-gray-900 shadow overflow-hidden sm:rounded-md m-auto bg-opacity-60">
      <div className="md:grid md:grid-cols-2">
        <img alt="NotFoundLogo" src={NotFoundImg.src} width="400px" />
        <div className="">
          <h3 className="text-2xl font-medium leading-6 text-white pb-8 text-center mx-4 md:mt-24">Apparently you have reach an ended concert. Let&apos;s look for another one...</h3>
          <div className="text-center justify-center">
            <button className="inline-flex justify-center py-2 px-6 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mt-4" onClick={notFoundHandler} type="button">Go to Shows</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NotFound
