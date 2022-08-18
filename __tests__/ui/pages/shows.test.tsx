import { render, screen } from '@testing-library/react'
import Shows from '@/pages/shows/index'

test('Should display the Shows Page correctly', () => {
  render(<Shows />)

  const showsTitle = screen.getByRole('heading', {
    name: /upcoming shows/iu
  })

  expect(showsTitle).toBeInTheDocument()
})
