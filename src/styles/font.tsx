import { NextFontWithVariable } from 'next/dist/compiled/@next/font'
import { Zen_Old_Mincho } from 'next/font/google'
import { Zen_Kaku_Gothic_Antique } from 'next/font/google'

export const ZenKakuGothicAnitique: NextFontWithVariable = Zen_Kaku_Gothic_Antique({
  weight: '500',
  subsets: ['latin'],
  variable: '--font-ZenKakuGothicAnitique'
})

export const ZenOldMincho: NextFontWithVariable = Zen_Old_Mincho({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-ZenOldMincho'
})
