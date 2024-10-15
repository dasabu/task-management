import { Box, Typography } from '@mui/material'
import { FC, ReactElement } from 'react'

import { ITaskDescription } from './interfaces/ITaskDescription'

export const TaskDescription: FC<ITaskDescription> = (
  props
): ReactElement => {
  const { description = 'Default Task Description' } = props

  return (
    <Box>
      <Typography>{description}</Typography>
    </Box>
  )
}
