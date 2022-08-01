/* eslint-disable @next/next/no-img-element */
import CardsSection from './CardsSection'
import Test from '../../public/assets/images/light-concert.jpg'

function MainBanner() {
  return (
    <div className="bg-gray-800 bg-opacity-70 text-white w-screen h-3/5 m-auto my-3 p-6 rounded-lg -mt-12">
      <img alt="wtf" className="h-96 w-5/6 m-auto rounded-lg" src={Test.src} />
      <CardsSection />
    </div>
  )
}

export default MainBanner
