import React, { FC } from 'react'

import { Card, CardContent } from '@/components/ui/card'

export type ServiceContentProps = {
  icon: React.ReactNode
  content: React.ReactNode
}
export const ServiceContent: FC<ServiceContentProps> = ({ icon, content }) => {
  return (
    <Card className="w-full bg-nav">
      <CardContent className="font-ZenKakuGothicAnitique text-lg">
        <div className="py-4">{icon}</div>
        {content}
      </CardContent>
    </Card>
  )
}
