import React from 'react'
import ProductList from 'components/resources/DashboardView/ProductList'
import { actionsData } from 'stories/ProductCard/ProductCard.stories'

import productData from 'data/card-data'

export default {
  title: 'Product List',
  component: ProductList,
  decorators: [story => <div style={{ padding: '2rem' }}>{story()}</div>],
  excludeStories: /.*Data$/
}

export const defaultListData = [
  {
    ...productData,
    id: '1',
    invoiceId: 'INV/2020/001',
    productName: 'Cetaphil',
    totalPrice: '120000'
  },
  {
    ...productData,
    id: '2',
    invoiceId: 'INV/2020/002',
    productName: 'Pepsodent',
    totalPrice: '15000'
  },
  {
    ...productData,
    id: '3',
    invoiceId: 'INV/2020/003',
    productName: 'Lifebuoy',
    totalPrice: '4000'
  },
  {
    ...productData,
    id: '4',
    invoiceId: 'INV/2020/004',
    productName: 'Le Minerale',
    totalPrice: '3000'
  },
  {
    ...productData,
    id: '5',
    invoiceId: 'INV/2020/005',
    productName: 'Pantene',
    totalPrice: '5500'
  },
  {
    ...productData,
    id: '6',
    invoiceId: 'INV/2020/006',
    productName: 'Ciptadent',
    totalPrice: '12000'
  }
]

export const Default = () => (
  <ProductList products={defaultListData} {...actionsData} />
)
