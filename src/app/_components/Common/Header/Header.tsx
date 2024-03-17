import Image from 'next/image'
import { FC } from 'react'

export const Header: FC = () => {
  return (
    <div className="h-[800px] w-full bg-gradient-custom">
      <div className="flex flex-col px-40 py-64">
        <h1 className="text-start font-ZenOldMincho text-xl font-bold text-white">
          「創意」<span className="text-lg">と</span>「誠意」<span className="pr-4 text-lg">で</span> <br />
          <span className="pl-16">真心奉仕</span>
        </h1>
        <h2 className="px-14  py-6 text-lg font-bold text-white">
          機能工具と関連機器の販売から加工、
          <br />
          制作まで幅広く扱います
        </h2>
      </div>
      <Image alt="gear" className=" absolute bottom-10 right-20 z-10" height={800} src="/gear.png" width={800} />
    </div>
  )
}
