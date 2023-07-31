import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import apiConfig from '../../api/apiConfig'

const initialState = {
  search: 'Judul',
  searchFilter: 'title',
  keyword: '',
  data: [],
  isFirstFetch: false,
  collections: [],
  materials: [],
}

export const fetchSearch = createAsyncThunk(
  'search/fetchSearch',
  async ({ keyword, search }) => {
    try {
      const response = await axios.get(
        `${apiConfig.baseUrl}/v1/biblios/basic-search?sort=title&type=asc&search=${search}&key=${keyword}`
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

const translateFilters = (filter) => {
  switch (filter) {
    case 'Judul':
      return 'title'
    case 'Pengarang':
      return 'author'
    case 'Penerbit':
      return 'publisher'
    case 'ISBN':
      return 'isbn'
    case 'Tahun Terbit':
      return 'year'
    case 'Kategori':
      return 'category'
    default:
      return 'title'
  }
}

// export const fetchAirport = createAsyncThunk(
//     'search/fetchAirport',
//     async () => {
//       try {
//         const response = await axios.get(`${apiConfig.baseUrl}airports`);
//         // console.log(response);
//         return response.data;
//       } catch (error) {
//         console.error(error);
//       }
//     }
//   );

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
  },
  extraReducers(builder) {
    builder.addCase(fetchSearch.fulfilled, (state, action) => {
      state.isFirstFetch = true
      state.data = action.payload
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

export const { setSearch, setKeyword } = searchSlice.actions

export default searchSlice.reducer
