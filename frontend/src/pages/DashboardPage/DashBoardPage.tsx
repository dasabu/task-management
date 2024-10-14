import { FC, ReactElement } from 'react'
import Grid from '@mui/material/Grid2'

import Sidebar from '../../components/Sidebar'
import TaskArea from '../../components/TaskArea'

export const DashboardPage: FC = (): ReactElement => {
  return (
    <Grid container minHeight='100vh'>
      <TaskArea />
      <Sidebar />
    </Grid>
  )
}
