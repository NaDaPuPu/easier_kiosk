import React from 'react';
import './Order.css';
import Menu from '../components/Menu';
import burger_list from '../food/burger_list.json';

function Order() {
  console.log(burger_list);
  return (
    <div className='container'>
      <div className='foods'>
        {burger_list.map((menu) => (
          <Menu
            key={menu.id}
            id={menu.id}
            image={menu.image}
            name={menu.name}
          />
        ))}
      </div>
    </div>
  );
}

export default Order;
