import { BsFillHeartFill, BsShareFill } from 'react-icons/bs';
import { FaCommentDots } from 'react-icons/fa';

const Post = ({ post }) => {
  return (
    <article
      className='post__article'
      style={{
        background:
          'linear-gradient(to bottom, #05050573 0%, #05050573 100%), url(https://i.pinimg.com/736x/04/0e/ce/040ece9078b22e7315de96aa620057c5.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'bottom',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className='post__article__avatar'>
        <img src={post.avatar} alt='Imagen Avatar' />
      </div>
      <div className='post__article__body'>
        <h3>{post.title}</h3>
        <p>{post.description}</p>
      </div>
      <div className='post__article__footer'>
        <div className='article__footer__stats'>
          <BsFillHeartFill />
          <span>{post.likes}</span>
        </div>
        <div className='article__footer__stats'>
          <FaCommentDots />
          <span>{post.comments}</span>
        </div>
        <div className='article__footer__stats'>
          <BsShareFill />
          <span>{post.share}</span>
        </div>
      </div>
    </article>
  );
};

export default Post;
