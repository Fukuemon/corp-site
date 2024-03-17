import Link from 'next/link'
import { FC } from 'react'

type NavigationBar = {
  logo: React.ReactNode
  companyName: string
  rightTabs: string[]
  contactButton: React.ReactNode
}

export const NavigationBarPresenter: FC<NavigationBar> = (props) => {
  return (
    <nav className="fixed z-20 w-full border-b-2 bg-nav shadow-lg">
      <div className="mx-16 flex items-center justify-between py-4">
        {/* 左サイド */}
        <Link className="flex items-center justify-center space-x-6" href={'#'}>
          {props.logo}
          <h1 className="text-xl font-extrabold">{props.companyName}</h1>
        </Link>
        {/* 右サイド */}
        <div className="flex items-center space-x-10 font-ZenKakuGothicAnitique">
          {props.rightTabs.map((tab, index) => (
            <Link className="text-base font-medium hover:text-gray-300" href={`#${tab}`} key={index}>
              {tab}
            </Link>
          ))}
          {props.contactButton}
        </div>
      </div>
    </nav>
  )
}
