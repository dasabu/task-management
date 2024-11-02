import { Avatar, Box, Typography } from '@mui/material'
import { FC, ReactElement } from 'react'

import { ITaskCounter } from './interfaces/ITaskCounter'
import { Status } from '../CreateTaskForm/enums/Status'
import { getStatusColor } from '../../helpers/getStatusColor'

export const TaskCounter: FC<ITaskCounter> = (
  props
): ReactElement => {
  const { count = 0, status = Status.Completed } = props

  return (
    <>
      <Box
        display='flex'
        flexDirection='column'
        justifyContent='center'
        alignItems='center'
      >
        <Avatar
          sx={{
            backgroundColor: 'transparent',
            border: '5px solid',
            width: '96px',
            height: '96px',
            marginBottom: '16px',
            borderColor: getStatusColor(status)
          }}
        >
          <Typography color='#ffffff' variant='h6'>
            {count}
          </Typography>
        </Avatar>
        <Typography
          color='#ffffff'
          variant='h6'
          fontWeight='bold'
          fontSize='20px'
        >
          {status}
        </Typography>
      </Box>
    </>
  )
}
