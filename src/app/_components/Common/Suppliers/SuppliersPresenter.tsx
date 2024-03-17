import { FC } from 'react'

import { SupplierProps } from '@/constant/suppliers'

import TabsContainer from '../Tabs/TabsContainer'
import { GridData } from '../GridData/GridData'

type SuppliersPresenterProps = {
  displayData: SupplierProps[]
}
export const SuppliersPresenter: FC<SuppliersPresenterProps> = ({ displayData }) => {
  return (
    <div className="flex w-full flex-col">
      <TabsContainer />
      <GridData dataItems={displayData.map((supplier) => supplier.name)} />
    </div>
  )
}
