import { FC } from 'react'

type Props = {
  suppliers: string
}

export const SuppliersPresenter: FC<Props> = ({ suppliers }) => {
  return <div>{suppliers}</div>
}
