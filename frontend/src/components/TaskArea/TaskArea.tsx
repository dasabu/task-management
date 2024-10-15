import { Box, Typography } from '@mui/material'
import Grid from '@mui/material/Grid2'
import { format } from 'date-fns'

import TaskCounter from '../TaskCounter'
import TaskInfo from '../TaskInfo'

export const TaskArea = () => {
  return (
    <Grid size={{ md: 8 }} px={4} mt={4}>
      <Box mb={8} px={4}>
        <Typography variant='h6' fontWeight='bold'>
          Task Status: {format(new Date(), 'PPPP')}
        </Typography>
      </Box>
      <Grid
        container
        display='flex'
        flexDirection='column'
        justifyContent='center'
      >
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
        <Grid
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            xs: 10,
            md: 8
          }}
        >
          <TaskInfo />
          <TaskInfo />
        </Grid>
      </Grid>
    </Grid>
  )
}
