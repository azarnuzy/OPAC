import { configureStore } from '@reduxjs/toolkit'
import searchReducer from '../features/search/searchSlice'
import alertReducer from '../features/alert/alertSlice'

export const store = configureStore({
  reducer: {
    search: searchReducer,
    alert: alertReducer,
  },
})
