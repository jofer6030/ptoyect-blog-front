import { configureStore } from '@reduxjs/toolkit';

import postsReducer from './reducers/post';

export const store = configureStore({
  reducer: {
    // TODO add reducers
    Posts: postsReducer,
  },
});
