import React from 'react';

function Menu({ name, image }) {
  return (
    <div className='container'>
      <img src={image} alt={name} title={name} />
      <p className='name'>{name}</p>
    </div>
  );
}

export default Menu;
