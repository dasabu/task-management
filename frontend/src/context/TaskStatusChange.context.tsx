import {
  createContext,
  FC,
  ReactElement,
  PropsWithChildren,
  useState
} from 'react'

export const TaskStatusChangeContext = createContext({
  updated: false,
  toggle: () => {}
})

export const TaskStatusChangeContextProvider: FC<
  PropsWithChildren
> = (props): ReactElement => {
  const [updated, setUpdated] = useState<boolean>(false)
  const toggleHandler = () => setUpdated(!updated)

  return (
    <TaskStatusChangeContext.Provider
      value={{
        updated: updated,
        toggle: toggleHandler
      }}
    >
      {props.children}
    </TaskStatusChangeContext.Provider>
  )
}
