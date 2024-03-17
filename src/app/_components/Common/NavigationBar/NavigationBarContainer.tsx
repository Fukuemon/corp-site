import { FC } from 'react'
import Image from 'next/image'

import * as TEXT from '@/constant/text_constants'
import { Button } from '@/components/ui/button'

import { NavigationBarPresenter } from './NavigationBarPresenter'

const Logo = () => {
  return <Image alt="logo" height="50" src="/logo.svg" width="50" />
}

export const navigationBar = {
  logo: <Logo />,
  companyName: TEXT.COMPANY_NAME,
  rightTabs: [
    TEXT.SITE_SECTIONS.SERVICE,
    TEXT.SITE_SECTIONS.SUPPLIERS,
    TEXT.SITE_SECTIONS.PRODUCTS,
    TEXT.SITE_SECTIONS.COMPANY
  ],
  contactButton: <Button>{TEXT.CONTACT}</Button>
}

export const NavigationBar: FC = () => {
  return <NavigationBarPresenter {...navigationBar} />
}
