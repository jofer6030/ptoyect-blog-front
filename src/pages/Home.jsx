import { BsCodeSlash, BsStar } from 'react-icons/bs';
import { FaHeart } from 'react-icons/fa';
import Categoria from '../components/Categoria';
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

          <div className='category__list'>
            {categories.map(category => (
              <Categoria key={category.title} category={category} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
