import React from 'react'
import ProductCard from 'components/common/ProductCard'
import { action } from '@storybook/addon-actions'

import productData from 'data/card-data'

export default {
  title: 'Product Card',
  component: ProductCard,
  decorators: [story => <div style={{ margin: 20 }}>{story()}</div>],
  excludeStories: /.*Data$/
}

export const actionsData = {
  onTakeProduct: action('onTakeProduct'),
  onDetailProduct: action('onDetailProduct')
}

export const Default = () => (
  <ProductCard product={{ ...productData }} {...actionsData} />
)
