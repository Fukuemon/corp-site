import { FC } from 'react'

import { SuppliersPresenter } from './SuppliersPresenter'

export const Suppliers: FC = () => {
  return (
    <div>
      <SuppliersPresenter suppliers="suppliers" />
    </div>
  )
}
