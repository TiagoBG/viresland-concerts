import { render, screen } from '@testing-library/react'
import Bands from '@/pages/bands/index'

test('Should display the Artists Page correctly', () => {
  render(<Bands />)

  const artistsTitle = screen.getByRole('heading', {
    name: /artists/iu
  })

  expect(artistsTitle).toBeInTheDocument()
})
