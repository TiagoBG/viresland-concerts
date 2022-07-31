import ColdplayImg from '../../public/assets/images/bands/coldplay.png'
import CompanyonImg from '../../public/assets/images/bands/companyon.png'
import FreedomCallImg from '../../public/assets/images/bands/freedom-call.png'
import TWODImg from '../../public/assets/images/bands/the-war-on-drugs.png'

function BandCard({ artist }) {

  function imageHandler(artistName: string) {
    switch (artistName.toLowerCase().split(' ').
      join('')) {
    case 'coldplay':
      return ColdplayImg
    case 'thewarondrugs':
      return TWODImg
    case 'companyon':
      return CompanyonImg
    case 'freedomcall':
      return FreedomCallImg
    default:
      return null
    }
  }

  return (
    <div className="rounded-lg overflow-hidden shadow-lg bg-pink-800 bg-opacity-70 my-3 mx-6 text-white md:flex md:flex-row md:w-full lg:w-9/12 ">
      <img
        alt={artist.band_name}
        className="w-full md:w-40"
        src={imageHandler(artist.band_name)?.src}
      />
      <div>
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{artist.band_name}</div>
          <p className="text-white-700 text-base">
            {artist.band_description}
          </p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Genre: {artist.band_category}</span>
        </div>
      </div>
    </div>
  )
}

export default BandCard
