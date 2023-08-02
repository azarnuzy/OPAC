import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import apiConfig from '../../api/apiConfig'
import { filterAttributes } from '../../helpers/filterData'

const initialState = {
  data: {},
  dataFilter: {},
  isFirstFetch: false,
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
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchDetailBiblio.fulfilled, (state, action) => {
      state.data = action.payload
      state.dataFilter = filterAttributes(action.payload.data)
      state.isFirstFetch = true
    })
  },
})

export const getData = (state) => state.detail.data
export const getDataFilter = (state) => state.detail.dataFilter
export const getIsFirstFetch = (state) => state.detail.isFirstFetch

export default detailSlice.reducer
