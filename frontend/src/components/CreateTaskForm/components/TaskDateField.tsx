import { FC, ReactElement } from 'react'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { IDateField } from '../interfaces/IDateField'

const TaskDateField: FC<IDateField> = (
  props
): ReactElement => {
  const { value, disabled, onChange } = props

  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DesktopDatePicker
          label='Date'
          format='dd/MM/yyyy'
          disabled={disabled}
          value={value}
          onChange={onChange}
        />
      </LocalizationProvider>
    </>
  )
}

export default TaskDateField
