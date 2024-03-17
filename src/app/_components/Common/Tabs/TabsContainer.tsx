import React from 'react'
import { useAtom } from 'jotai'

import { tabDataAtom, selectedTabAtom } from './tabDataAtom'
import TabsPresenter from './TabsPresenter'

const TabsContainer: React.FC = () => {
  const [tabData] = useAtom(tabDataAtom)
  const [selectedTab, setSelectedTab] = useAtom(selectedTabAtom)

  const handleSelectTab = (tab: string) => {
    setSelectedTab(tab)
  }

  return <TabsPresenter onSelectTab={handleSelectTab} selectedTab={selectedTab} tabData={tabData} />
}

export default TabsContainer
