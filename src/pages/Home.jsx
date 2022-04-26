import { BsCodeSlash, BsStar } from 'react-icons/bs';
import { FaGlide, FaHeart } from 'react-icons/fa';
import Categoria from '../components/Categoria';
import Posts from '../components/Posts/Posts';
import { categories } from '../data/categories';

const Home = () => {
  return (
    <>
      <header className='home__header'>
        <h2>Startup Framework. Suit Up Your Startup</h2>
        <p>
          We have created a new product that will help designers, developers and
          companies create websites for their startups quickly and easily.
        </p>
        <div className='home__header__buttons'>
          <button>Get Started</button>
          <button>Learn More</button>
        </div>
      </header>

      <section className='home__better'>
        <div className='homer__better__icons'>
          <BsCodeSlash />
          <FaHeart />
          <BsStar />
        </div>
        <h2>Better Landing for Your Startup</h2>
        <p>
          We have created a new product that will help designers, developers and
          companies create websites for their startups quickly and easily.
        </p>
        <div className='home__better__category'>
          <h3>Categories</h3>

          <div className='category__list container__section'>
            {categories.map(category => (
              <Categoria key={category.title} category={category} />
            ))}
          </div>
        </div>
      </section>
      <section className='home__productive container__section'>
        <div className='home__productive_left'>
          <FaGlide />
          <h2>
            Be more productive <span>Lookback is free to try for 14 days</span>
          </h2>
        </div>
        <button>Sign Up</button>
      </section>

      <section className='home__posts'>
        <h2>Posts</h2>
        <Posts />
      </section>
    </>
  );
};

export default Home;
