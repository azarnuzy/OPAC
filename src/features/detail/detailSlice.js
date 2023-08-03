import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import apiConfig from '../../api/apiConfig'
import { filterAttributes } from '../../helpers/filterData'

const initialState = {
  data: {},
  dataFilter: {},
  isFirstFetch: false,
  isLoading: false,
}

export const fetchDetailBiblio = createAsyncThunk(
  'search/fetchDetailBiblio',
  async ({ id }) => {
    try {
      const response = await axios.get(`${apiConfig.baseUrl}/v1/biblios/${id}`)
      return response.data
    } catch (error) {
      console.error(error)
    }
  }
)

const detailSlice = createSlice({
  name: 'detail',
  initialState,
  reducers: {
    setIsLoading(state, action) {
      state.isLoading = action.payload
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchDetailBiblio.pending, (state) => {
      state.isLoading = true
    }),
      builder.addCase(fetchDetailBiblio.fulfilled, (state, action) => {
        state.data = action.payload
        state.dataFilter = filterAttributes(action.payload.data)
        state.isFirstFetch = true
        state.isLoading = false
      })
  },
})

export const getData = (state) => state.detail.data
export const getDataFilter = (state) => state.detail.dataFilter
export const getIsFirstFetch = (state) => state.detail.isFirstFetch
export const getIsLoading = (state) => state.detail.isLoading

export const { setIsLoading } = detailSlice.actions

export default detailSlice.reducer
