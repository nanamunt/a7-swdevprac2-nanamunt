import '@testing-library/jest-dom'
import { screen, render } from '@testing-library/react'
import Page from '@/app/(venueinfo)/venue/[vid]/page'

describe('venue id route section page', () => {
  it('Page contains Banner and CardPanel', () => {
    render(<Page params={{vid:'001'}}/>)
    const venueImage = screen.getByRole("img")
    expect(venueImage).toBeInTheDocument 
    expect(screen.getByText(/Bloom/i)).toBeInTheDocument 
  })
})
