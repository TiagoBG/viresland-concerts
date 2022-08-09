/* eslint-disable camelcase */
/* eslint-disable sort-keys */
const ReservationI = {
  band_name: { type: String,
    required: true },
  city: { type: String,
    required: true },
  country: { type: String,
    required: true },
  reservation_id: { type: Number,
    required: true },
  show_date: { type: String,
    required: true },
  show_id: { type: Number,
    required: true },
  tickets_amount: { type: Number,
    required: true },
  user_id: { type: Number,
    required: true },
  venue_name: { type: String,
    required: true }
}

export default ReservationI
