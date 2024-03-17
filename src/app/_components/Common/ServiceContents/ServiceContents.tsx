import { FC } from 'react'
import { Wrench, Truck, Hammer, Trees } from 'lucide-react'

import { ServiceContent } from '../ServiceContent/ServiceContent'

// Services：営業内容
export const SERVICES_CONTENTS = [
  {
    icon: <Wrench />,
    content: (
      <p>
        機械工具及び省力化機器
        <br />
        伝動機器の販売
      </p>
    )
  },
  {
    icon: <Truck />,
    content: (
      <p>
        物流、機送機器及び
        <br />
        各種工場設備機器の販売
      </p>
    )
  },
  {
    icon: <Hammer />,
    content: (
      <p>
        各種機械加工及び
        <br />
        板金・溶接加工
      </p>
    )
  },
  {
    icon: <Trees />,
    content: (
      <p>
        各種ゴム製品加工及び
        <br />
        樹脂成型加工
      </p>
    )
  }
]

export const ServiceContents: FC = () => {
  return (
    <div className="flex w-full justify-between space-x-8 p-4">
      {SERVICES_CONTENTS.map((service, index) => (
        <ServiceContent {...service} key={index} />
      ))}
    </div>
  )
}
