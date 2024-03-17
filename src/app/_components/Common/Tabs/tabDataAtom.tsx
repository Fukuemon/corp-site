import { atom } from 'jotai'

export const tabDataAtom = atom(['All', 'あ行', 'か行', 'さ行', 'た行', 'な行', 'は行', 'ま行', 'や行', 'ら行', 'わ行'])
export const selectedTabAtom = atom('All')
