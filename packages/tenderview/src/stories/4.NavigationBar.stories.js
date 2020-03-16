import React from 'react'
import NavigationBar from 'components/common/NavigationBar'
import { MemoryRouter } from 'react-router'
import { storiesOf } from '@storybook/react'

storiesOf('Navigation Bar', module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
  ))
  .add('Default', () => <NavigationBar isLoggedIn={() => false} />)
  .add('While Logged In', () => <NavigationBar isLoggedIn={() => true} />)
