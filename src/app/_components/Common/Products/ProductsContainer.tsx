import { FC } from 'react'

import { ProductsPresenter } from './ProductsPresenter'

export const Products: FC = () => {
  return (
    <div>
      <ProductsPresenter products="products" />
    </div>
  )
}
