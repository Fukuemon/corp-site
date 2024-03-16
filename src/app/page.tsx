import { Header } from './_components/Common/Header/Header'
import { ServiceContent } from './_components/Common/ServiceContent/ServiceContent'
import { Suppliers } from './_components/Common/Suppliers/SuppliersContainer'
import { Products } from './_components/Common/Products/ProductsContainer'
import { CompanyProfile } from './_components/Common/CompanyProfile/CompanyProfile'
import { Footer } from './_components/Common/Footer/Footer'

const Sections = [
  {
    name: '営業内容',
    component: <ServiceContent />
  },
  {
    name: '取引先メーカー',
    component: <Suppliers />
  },
  {
    name: '製品カテゴリ',
    component: <Products />
  },
  {
    name: '会社概要',
    component: <CompanyProfile />
  }
]

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Header />
      <div className="flex w-full flex-col items-center justify-center px-40 py-8">
        {Sections.map((section, index) => (
          <section className="flex w-full flex-col items-start justify-start py-4" key={index}>
            <h1 className="p-4 font-ZenKakuGothicAnitique text-lg font-bold">{section.name}</h1>
            {section.component}
          </section>
        ))}
      </div>
      <Footer />
    </main>
  )
}
