import { TCategories, TOldWinners } from '@/interfaces';
import { createSlice } from '@reduxjs/toolkit';

interface INominatedState {
  categories: TCategories;
  nominateds: TOldWinners;
  winners: TOldWinners;
  oldWinners: TOldWinners;
}

const nominatedsSlice = createSlice({
  name: 'auth',
  initialState: {
    categories: [],
    nominateds: [],
    winners: [],
    oldWinners: [],
  } as INominatedState,
  reducers: {
    initializeStore(state, action) {
      state.categories = action.payload.categories;
      state.nominateds = action.payload.nominateds;
      state.oldWinners = action.payload.oldWinners;
    },
    setWinners(state, action) {
      state.winners = action.payload;
    },
  },
});

// Extract the action creators object and the reducer
const { actions, reducer } = nominatedsSlice;
// Extract and export each action creator by name
export const { initializeStore, setWinners } = actions;
// Export the reducer, either as a default or named export
export default reducer;

