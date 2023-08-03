import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import apiConfig from '../../api/apiConfig'
import { translateFilters } from '../../helpers/translateData'

const initialState = {
  search: 'Judul',
  searchFilter: 'title',
  keyword: '',
  data: [],
  isFirstFetch: false,
  collections: [],
  materials: [],
  page: 1,
  totalPage: 1,
  totalData: 0,
  limit: 10,
  sort: 'bibid',
  type: 'asc',
  isLoading: false,
}

export const fetchSearch = createAsyncThunk(
  'search/fetchSearch',
  async ({ keyword, search, page, limit, sort, type }) => {
    try {
      const response = await axios.get(
        `${apiConfig.baseUrl}/v1/biblios/basic-search?search=${search}&key=${keyword}&page=${page}&limit=${limit}&sort=${sort}&type=${type}`
      )
      return response.data
    } catch (error) {
      console.error(error)
    }
  }
)

export const fetchCollections = createAsyncThunk(
  'search/fetchCollections',
  async () => {
    try {
      const response = await axios.get(`${apiConfig.baseUrl}/v1/collections`)
      return response.data
    } catch (error) {
      console.error(error)
    }
  }
)

export const fetchMaterials = createAsyncThunk(
  'search/fetchMaterials',
  async () => {
    try {
      const response = await axios.get(`${apiConfig.baseUrl}/v1/materials`)
      return response.data
    } catch (error) {
      console.error(error)
    }
  }
)

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearch(state, action) {
      state.search = action.payload
      state.searchFilter = translateFilters(action.payload)
    },
    setKeyword(state, action) {
      state.keyword = action.payload
    },
    setPagination(state, action) {
      state.page = action.payload.page
      state.limit = action.payload.limit
      state.sort = action.payload.sort
      state.type = action.payload.type
    },
    setSort(state, action) {
      state.sort = action.payload
    },
    setType(state, action) {
      state.type = action.payload
    },
    setIsLoading(state, action) {
      state.isLoading = action.payload
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchSearch.pending, (state) => {
      state.isLoading = true
    }),
      builder.addCase(fetchSearch.fulfilled, (state, action) => {
        state.isFirstFetch = true
        state.data = action.payload
        state.totalData = action.payload.pagination.totalRows
        state.page = action.payload.pagination.currentPage
        state.totalPage = action.payload.pagination.totalPages
        state.isLoading = false
      }),
      builder.addCase(fetchCollections.fulfilled, (state, action) => {
        state.collections = action.payload
      }),
      builder.addCase(fetchMaterials.fulfilled, (state, action) => {
        state.materials = action.payload
      })
  },
})

export const getSearch = (state) => state.search.search
export const getKeyword = (state) => state.search.keyword
export const getSearchFilter = (state) => state.search.searchFilter
export const getSearchData = (state) => state.search.data
export const getIsFirstFetch = (state) => state.search.isFirstFetch
export const getCollections = (state) => state.search.collections
export const getMaterials = (state) => state.search.materials
export const getPage = (state) => state.search.page
export const getTotalData = (state) => state.search.totalData
export const getLimit = (state) => state.search.limit
export const getTotalPage = (state) => state.search.totalPage
export const getSort = (state) => state.search.sort
export const getType = (state) => state.search.type
export const getIsLoading = (state) => state.search.isLoading

export const {
  setSearch,
  setKeyword,
  setPagination,
  setSort,
  setType,
  setIsLoading,
} = searchSlice.actions

export default searchSlice.reducer
