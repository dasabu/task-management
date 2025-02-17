import React from 'react'

export interface ITaskFooter {
  id?: string
  status?: string
  onStatusChange?: (
    id: string,
    e: React.ChangeEvent<HTMLInputElement>
  ) => void
  onClick?: (
    id: string,
    e:
      | React.MouseEvent<HTMLButtonElement>
      | React.MouseEvent<HTMLAnchorElement>
  ) => void
}
