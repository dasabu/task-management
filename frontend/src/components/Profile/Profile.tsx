import { Box, Avatar, Typography } from '@mui/material'
import { FC, ReactElement } from 'react'

interface IProfile {
  name?: string
}

export const Profile: FC<IProfile> = (props): ReactElement => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '16px'
      }}
    >
      <Avatar
        sx={{
          width: '96px',
          height: '96px',
          backgroundColor: 'primary.main',
          marginBottom: '16px'
        }}
      >
        <Typography variant='h4' color='text.primary'>
          {props.name ? props.name[0] : ''}
        </Typography>
      </Avatar>
      <Typography variant='h6' color='text.primary'>
        Welcome{props.name ? `, ${props.name}` : ''}
      </Typography>
      <Typography variant='body1' color='text.primary'>
        This is your personal tasks manager
      </Typography>
    </Box>
  )
}
