import { createSlice } from '@reduxjs/toolkit';

const postsSlice = createSlice({
  name: 'auth',
  initialState: {
    email: '',
    name: '',
    isAuthenticated: false,
  },
  reducers: {
    signIn(state, action) {},
    signOut(state, action) {},
  },
});

// Extract the action creators object and the reducer
const { actions, reducer } = postsSlice;
// Extract and export each action creator by name
export const { signIn, signOut } = actions;
// Export the reducer, either as a default or named export
export default reducer;

