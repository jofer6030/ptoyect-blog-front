import axiosFetch from '../../config/axios';
import { reqPosts, postsListSuccess, postsListFailure } from '../reducers/post';

export const listPosts = () => async dispatch => {
  dispatch(reqPosts());
  try {
    const { data } = await axiosFetch.get('/posts');
    dispatch(postsListSuccess(data.posts));
  } catch (error) {
    console.log(error);
    dispatch(postsListFailure());
  }
};
