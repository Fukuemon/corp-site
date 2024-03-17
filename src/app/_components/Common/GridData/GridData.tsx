import { FC } from 'react'

import { ScrollArea } from '@/components/ui/scroll-area'

type Props = {
  dataItems: string[]
}

export const GridData: FC<Props> = ({ dataItems }) => {
  return (
    <ScrollArea className="grid h-[400px] border-2 shadow-md">
      <div className="grid grid-cols-3 gap-4">
        {dataItems.map((item, index) => (
          <div
            className="py-4 text-center font-ZenKakuGothicAnitique text-base font-extrabold text-foreground md:text-lg"
            key={index}
          >
            {item}
          </div>
        ))}
      </div>
    </ScrollArea>
  )
}
