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
}

export const fetchSearch = createAsyncThunk(
  'search/fetchSearch',
  async ({ keyword, search, page, limit, sort, type }) => {
    try {
      const response = await axios.get(
        `${apiConfig.baseUrl}/v1/biblios/basic-search?sort=bibid&type=asc&search=${search}&key=${keyword}&page=${page}&limit=${limit}&sort=${sort}&type=${type}`
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
  },
  extraReducers(builder) {
    builder.addCase(fetchSearch.fulfilled, (state, action) => {
      state.isFirstFetch = true
      state.data = action.payload
      state.totalData = action.payload.pagination.totalRows
      state.page = action.payload.pagination.currentPage
      state.limit = action.payload.pagination.thisPageRows
      state.totalPage = action.payload.pagination.totalPages
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

export const { setSearch, setKeyword, setPagination } = searchSlice.actions

export default searchSlice.reducer
