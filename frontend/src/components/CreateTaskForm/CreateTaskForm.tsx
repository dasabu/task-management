import { Box, Stack, Typography } from '@mui/material'

import { TaskTitleField } from './_TaskTitleField'
import { TaskDescriptionField } from './_TaskDescriptionField'
import { TaskDateField } from './_TaskDateField'
import { TaskSelectField } from './_TaskSelectField'
import { Status } from './enums/Status'
import { Priority } from './enums/Priority'

export const CreateTaskForm = () => {
  return (
    <Box
      display='flex'
      flexDirection='column'
      alignItems='flex-start'
      width='100%'
      px={4}
      my={6}
    >
      <Typography mb={2} component='h2' variant='h6'>
        Create a task
      </Typography>
      <Stack sx={{ width: '100%' }} spacing={3}>
        <TaskTitleField />
        <TaskDescriptionField />
        <TaskDateField />
        <Stack
          direction='row'
          sx={{ width: '100%' }}
          spacing={2}
        >
          <TaskSelectField
            name='Status'
            label='status'
            items={[
              {
                value: Status.Todo,
                label: Status.Todo
              },
              {
                value: Status.InProgress,
                label: Status.InProgress
              },
              {
                value: Status.Completed,
                label: Status.Completed
              }
            ]}
          />
          <TaskSelectField
            name='Priority'
            label='priority'
            items={[
              {
                value: Priority.High,
                label: Priority.High
              },
              {
                value: Priority.Normal,
                label: Priority.Normal
              },
              {
                value: Priority.Low,
                label: Priority.Low
              }
            ]}
          />
        </Stack>
      </Stack>
    </Box>
  )
}
