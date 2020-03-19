import React from 'react'
import { shallow } from 'enzyme'
import NavigationBar from '..'

describe('NavigationBar', () => {
  it('renders without crashing', () => {
    const component = shallow(<NavigationBar />)
    expect(component).toMatchSnapshot()
  })
})
