import Post from './Post';

const Posts = () => {
  const postsNum = [1, 2, 3, 4, 5, 6];

  return (
    <div className='posts container__section'>
      {postsNum.map(post => (
        <Post key={post} />
      ))}
    </div>
  );
};

export default Posts;
