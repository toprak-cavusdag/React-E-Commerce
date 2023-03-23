import React, { useEffect, useState } from 'react';
import {
  BsFillMoonFill,
  BsFillBasket2Fill,
  BsFillSunFill,
} from 'react-icons/bs';
const Navbar = () => {
  const [color, setColor] = useState(false);

  const root = document.querySelector('#root');
  console.log(root);
  useEffect(() => {
    if (color) {
      root.style.backgroundColor = 'black';
      root.style.color = 'white';
    } else {
      root.style.backgroundColor = 'white';
      root.style.color = 'black';
    }
  }, [color]);

  return (
    <div className='flex items-center justify-between px-3 h-28'>
      <div className='text-3xl font-bold tracking-wider'>LOGO</div>

      <div className='flex items-center space-x-4'>
        <input
          className='border p-3 outline-none rounded-lg'
          type='text'
          placeholder='Search'
        />
        <div
          onClick={() => {
            setColor(!color);
          }}
        >
          {color ? (
            <BsFillMoonFill size={25} className='cursor-pointer' />
          ) : (
            <BsFillSunFill size={25} className='cursor-pointer' />
          )}
        </div>

        <div className='relative'>
          <BsFillBasket2Fill size={25} className='cursor-pointer' />
          <span className='px-1 absolute top-0 -right-1 bg-red-600 text-white rounded-full text-xs'>
            3
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
