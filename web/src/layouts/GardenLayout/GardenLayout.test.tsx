import { render } from '@redwoodjs/testing/web'

import GardenLayout from './GardenLayout'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('GardenLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<GardenLayout />)
    }).not.toThrow()
  })
})
