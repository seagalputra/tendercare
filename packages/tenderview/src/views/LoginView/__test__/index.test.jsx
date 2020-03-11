import React from 'react'
import { shallow } from 'enzyme'
import LoginView from '..'

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: () => ({
    push: jest.fn()
  })
}))

describe('LoginView', () => {
  it('renders without crashing', () => {
    const component = shallow(<LoginView />)
    expect(component).toMatchSnapshot()
  })
})
