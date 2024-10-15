import Grid from '@mui/material/Grid2'
import Profile from '../Profile'
import CreateTaskForm from '../CreateTaskForm'
import { FC, ReactElement } from 'react'

export const Sidebar: FC = (): ReactElement => {
  return (
    <Grid
      size={{ md: 4 }}
      sx={{
        height: '100vh',
        position: 'fixed',
        right: 0,
        top: 0,
        width: '100%',
        backgroundColor: 'background.paper',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Profile name='Anh' />
      <CreateTaskForm />
    </Grid>
  )
}
