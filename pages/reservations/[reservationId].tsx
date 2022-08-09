
function ReservationId() {
  return (
    <div className="bg-gray-700 bg-opacity-70 w-1/2 p-6 rounded-lg text-white m-auto flex justify-center">
      <form className="w-full">
        <div className="flex flex-col justify-center text-center">
          <h3 className="font-semibold text-xl my-2">Tickets reservation for</h3>
          <h1 className="font-bold text-3xl my-2 mb-6">Artist</h1>
          <p className="font-semibold text-md my-2">Show date</p>
          <p className="font-semibold text-xl my-2 mb-8">X seats left</p>
          <div className="flex justify-center items">
            <input
              className="w-1/4 text-black font-bold text-2xl out-of-range:border-red-500 out-of-range:border-2 out-of-range:text-red-500"
              max="5"
              min="1"
              type="number"
            />
            <p className="font-semibold text-xl my-2 ml-3">tickets</p>
          </div>
        </div>
        <div className="my-4 flex justify-center">
          <button className="font-bold text-md mb-2 mt-4 inline-flex justify-center py-2 px-6 mx-6 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" type="button">Reserve</button>
          <button className="font-bold text-md mb-2 mt-4 inline-flex justify-center py-2 px-8 mx-6 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500" type="button">Back</button>
        </div>
      </form>
    </div>
  )
}

export default ReservationId
