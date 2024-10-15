import { FC, ReactElement } from 'react'

import { TextField } from '@mui/material'
import { ITextField } from './interfaces/ITextField'

export const TaskDescriptionField: FC<ITextField> = (
  props
): ReactElement => {
  const { onChange, disabled } = props

  return (
    <TextField
      id='description'
      label='Description'
      placeholder='Description'
      variant='outlined'
      size='small'
      name='title'
      fullWidth
      multiline
      rows='4'
      disabled={disabled}
      onChange={onChange}
    />
  )
}
