import { render, screen } from '@testing-library/react'
import NotFound from '@/pages/[notFound]/index'

test('Should display the 404 Not found Page correctly', () => {
  render(<NotFound />)

  const goShowsBtn = screen.getByRole('button', {
    name: /go to shows/iu
  })

  expect(goShowsBtn).toBeInTheDocument()
})
