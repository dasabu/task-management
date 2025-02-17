import {
  FormControl,
  InputLabel,
  MenuItem,
  Select
} from '@mui/material'
import { FC, ReactElement } from 'react'
import { ISelectField } from '../interfaces/ISelectField'

const TaskSelectField: FC<ISelectField> = (
  props
): ReactElement => {
  const { disabled, name, label, value, onChange, items } =
    props

  return (
    <>
      <FormControl fullWidth size='small'>
        <InputLabel id={`${name}-id`}>{name}</InputLabel>
        <Select
          labelId={`${name}-id`}
          id={`${name}-id-select`}
          value={value}
          label={label}
          onChange={onChange}
          disabled={disabled}
        >
          {items.map((item, index) => (
            <MenuItem
              key={`${index}-item`}
              value={item.value}
            >
              {item.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  )
}

export default TaskSelectField
