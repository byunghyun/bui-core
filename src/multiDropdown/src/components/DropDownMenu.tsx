import '../styles/multiDropDown.css';

import React, { useEffect, useRef, useState } from 'react';

import DropDownItems from './DropDownItems';

interface DropDownMenuProps {
  selectedValue?: string;
  data?: Array<any>;
  onChange?: (event: any) => void;
  className?: string;
}

const DropDownMenu = ({
  selectedValue = '전체',
  data,
  onChange,
  className,
}: DropDownMenuProps) => {
  const [isShownDropDown, setToggleDropDown] = useState(false);
  const ref = useRef<null | HTMLElement>(null);
  const handleClickEvent = {
    toggleDropdown: (event: any) => {
      setToggleDropDown(!isShownDropDown);
    },
    closeDropdown: (event: any) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setToggleDropDown(false);
      }
    },
    closeDropdownAction: () => {
      setToggleDropDown(false);
    },
  };
  useEffect(() => {
    document.addEventListener('click', handleClickEvent.closeDropdown);
    return () => {
      document.removeEventListener('click', handleClickEvent.closeDropdown);
    };
  }, []);
  return (
    <nav
      ref={ref}
      className={`multi-select-option ` + (className ? className : ``)}
    >
      <ul className='menus'>
        <li className='menu-items '>
          <button
            type='button'
            aria-haspopup='menu'
            aria-expanded='false'
            onClick={handleClickEvent.toggleDropdown}
          >
            <span className=''>{selectedValue}</span>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='13'
              height='8'
              viewBox='0 0 13 8'
              fill='none'
              className='bottom-arrow'
            >
              <path
                d='M1.06348 1.04015L6.98625 5.95435L12.3167 1.04015'
                stroke='#616166'
                strokeWidth='2'
              ></path>
            </svg>
            <span className='arrow'></span>
          </button>
          <ul className='dropdown show'>
            {data &&
              data.length !== 0 &&
              isShownDropDown &&
              data.map((item, index) => {
                return (
                  <DropDownItems
                    data={item}
                    onChange={onChange}
                    onClose={handleClickEvent.closeDropdownAction}
                    key={index.toString()}
                  />
                );
              })}
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default DropDownMenu;
