/* eslint-disable @next/next/no-img-element */
import CardsSection from './CardsSection'
import YellowConcert from '../../public/assets/images/light-concert.jpg'

function MainBanner() {
  return (
    <div className="bg-gray-800 bg-opacity-70 text-white w-5/6 h-3/5 m-auto my-3 p-6 rounded-lg">
      <div className="relative overflow-hidden rounded-lg shadow-lg cursor-default">
        <img alt="yellow-main-concert" className="sm:h-96 h-1/2 sm:w-5/6 m-auto rounded-lg" src={YellowConcert.src} />

        <div className="absolute sm:top-6 top-2 sm:left-24 left-3 sm:px-6 py-4">
          <h4 className="mb-3 sm:text-4xl text-2lg font-bold tracking-tight text-white">Welcome to Viresland Concerts</h4>
          <p className="sm:text-2xl text-md">Are you ready for the show?!</p>
        </div>
        <div className="sm:absolute sm:bottom-2 sm:left-24 sm:px-6 py-4 relative text-justify">
          <p className="sm:text-xl text-sm sm:w-5/6 sm:font-semibold text-white">This is an app for you to find information about your favorite artists, their current shows and events, and of course, reserve the tickets to attend. So let's check it out!</p>
        </div>
      </div>
      <CardsSection />
    </div>
  )
}

export default MainBanner
