import React from 'react';
import './Menu.css';

function Menu({ name, image }) {
  return (
    <div className='food_container'>
      <img src={image} alt={name} title={name} />
      <div className='name'>
        <strong className='ko'>{name}</strong>
      </div>
    </div>
  );
}

export default Menu;
