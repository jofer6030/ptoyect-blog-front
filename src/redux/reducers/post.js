import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
  loading: false,
  posts: [],
};

const postsSlice = createSlice({
  name: 'POSTS',
  initialState: INITIAL_STATE,
  reducers: {
    reqPosts: (state, action) => {
      state.loading = true;
    },
    postsListSuccess: (state, action) => {
      // console.log(action.payload);
      state.loading = false;
      state.posts = action.payload;
    },
    postsListFailure: (state, action) => {
      state.loading = false;
    },
  },
});

export const { postsListSuccess, reqPosts, postsListFailure } =
  postsSlice.actions;

export default postsSlice.reducer;
