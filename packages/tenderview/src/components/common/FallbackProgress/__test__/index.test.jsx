import React from 'react'
import { shallow } from 'enzyme'
import FallbackProgress from '..'

describe('FallbackProgress', () => {
  it('renders without crashing', () => {
    const component = shallow(<FallbackProgress />)
    expect(component).toMatchSnapshot()
  })
})
