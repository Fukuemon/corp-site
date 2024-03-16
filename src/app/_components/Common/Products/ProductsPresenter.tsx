import { FC } from 'react'

type Props = {
  products: string
}

export const ProductsPresenter: FC<Props> = ({ products }) => {
  return <div>{products}</div>
}
