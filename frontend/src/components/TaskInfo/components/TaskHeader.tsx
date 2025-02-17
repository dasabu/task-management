import { Box, Chip, Typography } from '@mui/material'
import { FC, ReactElement } from 'react'
import { format } from 'date-fns'
import { ITaskHeader } from '../interfaces/ITaskHeader'

const TaskHeader: FC<ITaskHeader> = (
  props
): ReactElement => {
  const { title = 'Default Title', date = new Date() } =
    props

  return (
    <Box
      display='flex'
      flexDirection='row'
      justifyContent='space-between'
      mb={2}
    >
      <Box>
        <Typography fontSize='22px' fontWeight='bold'>
          {title}
        </Typography>
      </Box>
      <Box>
        <Chip
          variant='outlined'
          label={format(date, 'PPP')}
        />
      </Box>
    </Box>
  )
}

export default TaskHeader
