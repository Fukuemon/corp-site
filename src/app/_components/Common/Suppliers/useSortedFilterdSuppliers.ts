import { useAtom } from 'jotai'

import { SupplierProps } from '@/constant/suppliers'

import { selectedTabAtom } from '../Tabs/tabDataAtom'

export const useSortedFilteredSuppliers = (suppliers: SupplierProps[]): SupplierProps[] => {
  const [selectedTab] = useAtom(selectedTabAtom)

  // alphabeticalカテゴリと会社名でソート
  const sortedData = suppliers.slice().sort((a, b) => {
    const categoryCompare = a.alphabetical.localeCompare(b.alphabetical, 'ja')
    if (categoryCompare !== 0) return categoryCompare
    return a.name.localeCompare(b.name, 'ja')
  })

  // 選択されたタブが 'All' の場合は全データを返す
  if (selectedTab === 'All') {
    return sortedData
  }

  // 選択されたタブに応じてデータをフィルタリング
  return sortedData.filter((item) => item.alphabetical === selectedTab)
}
