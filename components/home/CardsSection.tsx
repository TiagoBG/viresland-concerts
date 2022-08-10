import ConcertImg from '../../public/assets/images/concertmain.jpg'
import PeopleImg from '../../public/assets/images/coachella.jpg'
import ShowImg from '../../public/assets/images/concert-signin.jpg'
import Link from 'next/link'

function CardsSection() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 w-5/6 m-auto my-3">
      <Link href="/shows">
        <div className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer h-full">
          <img
            alt="Flower and sky"
            className="object-cover w-full h-48"
            src={ShowImg.src}
            style={{ opacity: '0.9' }}
          />

          <div className="absolute top-0 left-0 px-6 py-4">
            <h4 className="mb-3 text-xl font-bold tracking-tight text-white">Shows</h4>
            <p className="leading-normal text-white font-semibold text-justify">Excited for your next musical adventure? Check out for the upcoming shows.</p>
          </div>
        </div>
      </Link>

      <Link href="/bands">
        <div className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer">
          <img
            alt="Flower and sky"
            className="object-cover w-full h-48"
            src={ConcertImg.src}
            style={{ opacity: '0.9' }}
          />

          <div className="absolute top-0 left-0 px-7 py-4">
            <h4 className="mb-4 text-xl font-bold tracking-tight text-white">Artists</h4>
            <p className="leading-normal text-black font-semibold text-left">Check out for the artists that are currently on tour.</p>
          </div>
        </div>
      </Link>

      <div className="relative overflow-hidden rounded-lg shadow-lg cursor-default">
        <img
          alt="Flower and sky"
          className="object-cover w-full h-48"
          src={PeopleImg.src}
          style={{ opacity: '0.3' }}
        />

        <div className="absolute top-0 left-0 px-6 py-4">
          <h4 className="text-xl font-bold tracking-tight text-white">Venue Meetup</h4>
          <p className="text-md mb-2">*Coming Soon</p>
          <p className="leading-normal font-semibold text-white">A space for you to meet new friends to attend to the concerts and have fun together.</p>
        </div>
      </div>
    </div>
  )
}

export default CardsSection
