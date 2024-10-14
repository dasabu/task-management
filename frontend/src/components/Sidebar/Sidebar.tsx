import Grid from '@mui/material/Grid2'

export const Sidebar = () => {
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
      <h2>Sidebar Area</h2>
    </Grid>
  )
}
