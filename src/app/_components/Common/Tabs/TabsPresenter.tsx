import React from 'react'

type TabsPresenterProps = {
  tabData: string[]
  selectedTab: string
  onSelectTab: (tab: string) => void
}

const TabsPresenter: React.FC<TabsPresenterProps> = ({ tabData, selectedTab, onSelectTab }) => (
  <div className="flex items-center justify-between  border-b">
    {tabData.map((tab) => (
      <button
        className={`px-4 py-2 text-center text-lg font-medium ${
          tab === selectedTab
            ? 'border-b-2 border-primary  text-primary'
            : 'border-b-2 border-transparent text-gray-400  hover:border-primary hover:text-primary'
        }`}
        key={tab}
        onClick={() => onSelectTab(tab)}
      >
        {tab}
      </button>
    ))}
  </div>
)

export default TabsPresenter
