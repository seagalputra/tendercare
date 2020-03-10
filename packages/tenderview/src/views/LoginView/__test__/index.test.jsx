import React from 'react'
import { shallow } from 'enzyme'
import LoginView from '..'

describe('LoginView', () => {
  it('renders without crashing', () => {
    const component = shallow(<LoginView />)
    expect(component).toMatchSnapshot()
  })
})
