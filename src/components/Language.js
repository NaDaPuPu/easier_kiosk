import React, { useState } from 'react';
import './Language.css';

function Language() {
  const [isChecked, setIsChecked] = useState(true);
  const handleChange = () => {
    setIsChecked((isChecked) => {
      return !isChecked;
    });
  };
  return (
    <div className='language'>
      <input
        type='radio'
        id='Korean'
        name='radioGroup'
        value='Korean'
        onChange={handleChange}
        checked={isChecked}
      />
      <label htmlFor='Korean'>한국어</label>
      <input
        type='radio'
        id='English'
        name='radioGroup'
        value='English'
        onChange={handleChange}
        checked={!isChecked}
      />
      <label htmlFor='English'>English</label>
    </div>
  );
}

export default Language;
