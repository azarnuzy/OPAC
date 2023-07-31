import { createContext, useContext, useRef, useState } from 'react'

const AlertContext = createContext({})

// eslint-disable-next-line react/prop-types
function AlertProvider({ children }) {
  const [open, setOpen] = useState(false)
  const eventDateRef = useRef(new Date())
  const timerRef = useRef(0)

  const handleNotification = () => {
    setOpen(false)
    window.clearTimeout(timerRef.current)
    timerRef.current = window.setTimeout(() => {
      // eventDateRef.current = oneWeekAway()
      setOpen(true)
    }, 100)
  }

  const alertValue = {
    open,
    setOpen,
    eventDateRef,
    timerRef,
    handleNotification,
  }

  return (
    <AlertContext.Provider value={alertValue}>{children}</AlertContext.Provider>
  )
}

export default AlertProvider

// eslint-disable-next-line react-refresh/only-export-components
export const useAlert = () => useContext(AlertContext)
