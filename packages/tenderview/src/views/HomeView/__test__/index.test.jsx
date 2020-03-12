import React from 'react'
import { shallow } from 'enzyme'
import HomeView from '..'

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: () => ({
    push: jest.fn()
  })
}))

describe('HomeView', () => {
  it('renders without crashing', () => {
    const component = shallow(<HomeView />)
    expect(component).toMatchSnapshot()
  })
})
