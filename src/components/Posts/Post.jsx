import { BsFillHeartFill, BsShareFill } from 'react-icons/bs';
import { FaCommentDots } from 'react-icons/fa';

const Post = () => {
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
        <img
          src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmE--NjTTosid1jFeMFdc12EVQtKi7XPRMYqeHI0_4jJlqBanUiyQ-KrqN5tsdK_MO0j8&usqp=CAU'
          alt='Imagen Avatar'
        />
      </div>
      <div className='post__article__body'>
        <h3>A Guide To Rocky Mountain Vacations</h3>
        <p>
          These tips come from the safety experts at Voith Turbo, York, Pa.,
          which manufactures a device that helps trains with braking, to make
          train travel even better. The new type of railcar is on
        </p>
      </div>
      <div className='post__article__footer'>
        <div className='article__footer__stats'>
          <BsFillHeartFill />
          <span>325</span>
        </div>
        <div className='article__footer__stats'>
          <FaCommentDots />
          <span>115</span>
        </div>
        <div className='article__footer__stats'>
          <BsShareFill />
          <span>47</span>
        </div>
      </div>
    </article>
  );
};

export default Post;
