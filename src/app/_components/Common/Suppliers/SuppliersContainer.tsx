'use client'
import { FC } from 'react'

import { suppliers } from '@/constant/suppliers'

import { SuppliersPresenter } from './SuppliersPresenter'
import { useSortedFilteredSuppliers } from './useSortedFilterdSuppliers'

export const Suppliers: FC = () => {
  const displayData = useSortedFilteredSuppliers(suppliers)

  return <SuppliersPresenter displayData={displayData} />
}
