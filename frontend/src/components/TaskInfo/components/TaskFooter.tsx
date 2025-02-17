import {
  Box,
  Button,
  FormControlLabel,
  Switch,
  Typography
} from '@mui/material'
import { FC, ReactElement } from 'react'
import { ITaskFooter } from '../interfaces/ITaskFooter'
import { Status } from '../../CreateTaskForm/enums/Status'

const TaskFooter: FC<ITaskFooter> = (
  props
): ReactElement => {
  const {
    id,
    status,
    onStatusChange = (e) =>
      console.log(`onStatusChange: id: ${id}\ne: ${e}`),
    onClick = (e) =>
      console.log(`onClick: id: ${id}\ne: ${e}`)
  } = props

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
            onChange={(e) => onStatusChange(id!, e)}
            defaultChecked={status === Status.InProgress}
          />
        }
      />
      <Button
        onClick={(e) => onClick(id!, e)}
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

export default TaskFooter
