import { Box } from '@mui/material'
import { FC, ReactElement } from 'react'

import { ITaskInfo } from './interfaces/ITaskInfo'
import { getStatusColor } from '../../helpers/getStatusColor'
import { Status } from '../CreateTaskForm/enums/Status'
import {
  TaskDescription,
  TaskFooter,
  TaskHeader
} from './components'

export const TaskInfo: FC<ITaskInfo> = (
  props
): ReactElement => {
  const {
    id,
    title,
    date,
    description,
    status,
    onStatusChange,
    onClick
  } = props

  return (
    <>
      <Box
        display='flex'
        flexDirection='column'
        justifyContent='flex-start'
        mb={4}
        p={4}
        sx={{
          width: '85%',
          backgroundColor: 'background.paper',
          borderRadius: '8px',
          border: '1px solid',
          borderColor: getStatusColor(status as Status)
        }}
      >
        <TaskHeader title={title} date={date} />
        <TaskDescription description={description} />
        <TaskFooter
          onStatusChange={onStatusChange}
          onClick={onClick}
          id={id}
          status={status}
        />
      </Box>
    </>
  )
}
