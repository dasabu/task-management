import Grid from '@mui/material/Grid2'
import { FC, ReactElement } from 'react'

export const DashboardPage: FC = (): ReactElement => {
  return (
    <Grid container minHeight='100vh'>
      <Grid size={{ md: 8 }}>
        <h2>Task Area</h2>
      </Grid>
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
        <h2>Sidebar Area</h2>
      </Grid>
    </Grid>
  )
}
