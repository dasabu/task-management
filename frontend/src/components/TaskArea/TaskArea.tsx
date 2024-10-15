import { Box } from '@mui/material'
import Grid from '@mui/material/Grid2'
import { format } from 'date-fns'

import TaskCounter from '../TaskCounter'

export const TaskArea = () => {
  return (
    <Grid size={{ md: 8 }} px={4}>
      <Box mb={8} px={4}>
        <h2>Task Status: {format(new Date(), 'PPPP')}</h2>
      </Box>
      <Grid
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-around',
          mb: 8
        }}
      >
        <TaskCounter />
        <TaskCounter />
        <TaskCounter />
      </Grid>
    </Grid>
  )
}
