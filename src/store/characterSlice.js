import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchCharacterAPI, fetchComicAPI } from '../api/mockAPI';

export const fetchCharacter = createAsyncThunk(
  'character/fetchCharacter',
  async (characterName = 'Spider-Man', { rejectWithValue }) => {
    try {
      const response = await fetchCharacterAPI(characterName);
      return response.data.data.results[0];
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchComics = createAsyncThunk(
  'character/fetchComics',
  async (comicId = '15997', { rejectWithValue }) => {
    try {
      const response = await fetchComicAPI(comicId);
      return response.data.data.results[0];
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const initialState = {
  characters: null,
  comic: null,
  isLoading: false,
  error: null,
  apiDataLoaded: false,
};

const characterSlice = createSlice({
  name: 'character',
  initialState,
  extraReducers: (builder) => {
    builder
      // Fetch Character
      .addCase(fetchCharacter.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchCharacter.fulfilled, (state, action) => {
        state.characters = action.payload;
        state.isLoading = false;
        state.apiDataLoaded = true;
      })
      .addCase(fetchCharacter.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
        state.apiDataLoaded = false;
      })
      // Fetch Comics
      .addCase(fetchComics.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchComics.fulfilled, (state, action) => {
        state.comic = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchComics.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      });
  },
});

export default characterSlice.reducer;
