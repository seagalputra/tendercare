import React from 'react'
import { shallow } from 'enzyme'
import NavigationBar from '..'

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: () => ({
    push: jest.fn()
  })
}))

describe('NavigationBar', () => {
  it('renders without crashing', () => {
    const component = shallow(<NavigationBar />)
    expect(component).toMatchSnapshot()
  })
})
