import { FC, ReactElement } from 'react'
import Grid from '@mui/material/Grid2'

import Sidebar from '../../components/Sidebar'
import TaskArea from '../../components/TaskArea'

const Dashboard: FC = (): ReactElement => {
  return (
    <Grid
      container
      minHeight='100vh'
      sx={{
        overflowY: 'hidden'
      }}
    >
      <Sidebar />
      <TaskArea />
    </Grid>
  )
}

export default Dashboard
