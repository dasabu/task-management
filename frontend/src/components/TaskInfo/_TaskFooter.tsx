import {
  Box,
  Button,
  FormControlLabel,
  Switch,
  Typography
} from '@mui/material'
import { FC, ReactElement } from 'react'
import { ITaskFooter } from './interfaces/ITaskFooter'

export const TaskFooter: FC<ITaskFooter> = (
  props
): ReactElement => {
  const { onStatusChange, onClick } = props

  return (
    <Box
      display='flex'
      flexDirection='row'
      justifyContent='space-between'
      alignItems='center'
      mt={4}
    >
      <FormControlLabel
        label={
          <Typography
            sx={{
              fontSize: '16px'
            }}
          >
            In Progress
          </Typography>
        }
        control={
          <Switch
            color='warning'
            onChange={(e) => onStatusChange(e)}
            onClick={onClick}
          />
        }
      />
      <Button
        variant='contained'
        color='success'
        size='small'
        sx={{
          color: 'white',
          fontSize: '14px',
          fontWeight: 'bold'
        }}
      >
        Mark Complete
      </Button>
    </Box>
  )
}
