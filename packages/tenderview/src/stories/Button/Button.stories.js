import React from 'react'
import { action } from '@storybook/addon-actions'
import Button from 'components/common/Button'

export default {
  title: 'Button',
  component: Button,
  decorators: [story => <div style={{ margin: 20 }}>{story()}</div>]
}

export const Text = () => (
  <Button onClick={action('clicked')}>Hello Button</Button>
)
