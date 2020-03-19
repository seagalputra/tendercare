import React from 'react'
import NavigationBar from 'components/common/NavigationBar'

export default {
  title: 'Navigation Bar',
  component: NavigationBar,
  excudeStories: /.*Data$/
}

export const Default = () => <NavigationBar />
