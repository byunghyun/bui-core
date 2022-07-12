import React, { useEffect, useRef, useState } from 'react';

interface DropDownItemsProps {
  data: {
    title: string;
    submenu?: Array<{
      title: string;
    }>;
  };
  onChange?: (selectedEmployee: string) => void;
  onClose?: () => void;
}
const DropDownItems = ({ data, onChange, onClose }: DropDownItemsProps) => {
  const [isShownSubMenu, setToggleSubMenu] = useState(false);
  const ref = useRef<null | HTMLLIElement>(null);
  const handleClickEvent = {
    toggleSubMenu: (data: any) => (event: any) => {
      if (!data.submenu || (data.submenu && data.submenu.length === 0)) {
        onChange && onChange(event.target.textContent);
        onClose && onClose();
      }
      setToggleSubMenu(!isShownSubMenu);
    },
    selectMenu: (data: any) => (event: any) => {
      console.log('data', data);
      onChange && onChange(event.target.textContent);
      onClose && onClose();
    },
    closeSubMenu: (event: any) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setToggleSubMenu(false);
      }
    },
  };
  useEffect(() => {
    document.addEventListener('click', handleClickEvent.closeSubMenu);
    return () => {
      document.removeEventListener('click', handleClickEvent.closeSubMenu);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <li className={`menu-items ` + (isShownSubMenu ? `active` : ``)} ref={ref}>
      <button
        type='button'
        aria-haspopup='menu'
        aria-expanded='false'
        onClick={handleClickEvent.toggleSubMenu(data)}
      >
        <span>{data.title}</span>
        {data.submenu && (
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='13'
            height='8'
            viewBox='0 0 13 8'
            fill='none'
            className='right-arrow'
          >
            <path
              d='M1.06348 1.04015L6.98625 5.95435L12.3167 1.04015'
              stroke='#616166'
              strokeWidth='2'
            ></path>
          </svg>
        )}
      </button>
      {isShownSubMenu && data.submenu && data.submenu.length !== 0 && (
        <>
          <ul className='dropdown dropdown-submenu show'>
            {data.submenu.map((item, index) => {
              return (
                <li className='menu-items' key={index.toString()}>
                  <button
                    type='button'
                    aria-haspopup='menu'
                    aria-expanded='false'
                    onClick={handleClickEvent.selectMenu(item)}
                  >
                    <span>{item.title}</span>
                  </button>
                </li>
              );
            })}
          </ul>
        </>
      )}
    </li>
  );
};

export default DropDownItems;
