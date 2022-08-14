import React from 'react';
import pokemart from '../images/pokemart.png';
import pokeball from '../images/pokeball.svg';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="about">
      <div className="about-heading">
        <img src={pokeball} alt='Pokéball' />
        <h1>Welcome to the Pokémart!</h1>
        <img src={pokeball} alt='Pokéball' />
      </div>
      <img src={pokemart} alt='Pokémart' />
      <p>Cheapest Pokéballs and potions in all the region! We deliver to all major cities!</p>
      <Link to='/shop'>
        <button>Shop Now</button>
      </Link>
    </div>
  )
}

export default About;