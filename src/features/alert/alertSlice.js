import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  open: false,
  timeRef: null,
}

const alertSlice = createSlice({
  name: 'alert',
  initialState,
  reducers: {
    setOpen: (state, action) => {
      state.open = action.payload
    },
    handleNotification: (state) => {
      state.open = false
      window.setTimeout(() => {
        state.open = true
      }, 100)
      //   window.clearTimeout(state.timerRef.current)
      //   state.timerRef.current = window.setTimeout(() => {
      //     state.open = true
      //   }, 100)
    },
  },
})

export const getOpen = (state) => state.alert.open
export const getTimerRef = (state) => state.alert.timerRef

export const { setOpen, handleNotification } = alertSlice.actions

export default alertSlice.reducer
