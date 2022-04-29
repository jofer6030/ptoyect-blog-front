import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

import Post from './Post';
import { listPosts } from '../../redux/actions/post';

const Posts = () => {
  const { loading, posts } = useSelector(state => state.Posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listPosts());
  }, []);

  return (
    <div className='posts container__section'>
      {loading ? (
        <h1>Cargando...</h1>
      ) : posts.length ? (
        posts.map(post => <Post key={post._id} post={post} />)
      ) : (
        <h1>No hay posts</h1>
      )}
    </div>
  );
};

export default Posts;
