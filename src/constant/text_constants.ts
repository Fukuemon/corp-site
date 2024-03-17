//  NavigationBar:ナビゲーションバー
export const COMPANY_NAME = '有限会社フクウラ'
export const SITE_SECTIONS = {
  SERVICE: '営業内容',
  SUPPLIERS: '取引先メーカー',
  PRODUCTS: '製品カテゴリ',
  COMPANY: '会社概要'
}
export const CONTACT = 'お問い合わせ'

// Suppliers: 取引先
export const ALPHABETICAL_ORDER_TABS = [
  'All',
  'あ行',
  'か行',
  'さ行',
  'た行',
  'な行',
  'は行',
  'ま行',
  'や行',
  'ら行',
  'わ行'
]
export type SUPPLIERS = [
  {
    name: string
    siteURL?: string
  }
]

// Company Profile：会社概要
export const COMPANY_PROFILE = {
  NAME: COMPANY_NAME,
  PRESIDENT: '福浦 崇志',
  FOUNDING: '1996年 6月',
  CAPITAL: '300万円'
}

// Contact Information：連絡先
export const CONTACT_INFORMATION = {
  POST_CODE: '〒675-1114',
  ADDRESS: '兵庫県加古郡稲美町国安973-10',
  PHONE: '0794-92-6465',
  FAX: '0794-92-6429',
  EMAIL: 'fukuura@mist.ocn.ne.jp'
}

// Products: 製品
type ProductCategory = {
  name: string
  image: string
}
export const PRODUCT_CATEGORIES: ProductCategory[] = [
  { name: '', image: '' },
  { name: '', image: '' }
]
