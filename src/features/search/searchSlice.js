import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  subject: 'judul',
  search: '',
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
    setSubject(state, action) {
      state.subject = action.payload
    },
    setSearch(state, action) {
      state.search = action.payload
    },
  },
})

export const getSubject = (state) => state.search.subject
export const getSearch = (state) => state.search.search

export const { setSubject, setSearch } = searchSlice.actions

export default searchSlice.reducer
