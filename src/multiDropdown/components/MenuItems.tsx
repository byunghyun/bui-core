import { useEffect, useRef, useState } from 'react';

import Dropdown from './DropDown';

const MenuItems = ({ items, depthLevel }: { items: any; depthLevel: any }) => {
  const [dropdown, setDropdown] = useState(false);

  const ref = useRef<HTMLLIElement | null>(null);

  useEffect(() => {
    const handler = (event: any) => {
      if (dropdown && ref.current && !ref.current.contains(event.target)) {
        setDropdown(false);
      }
    };
    document.addEventListener('click', handler);
    return () => {
      document.removeEventListener('click', handler);
    };
  }, [dropdown]);

  return (
    <>
      <li className='menu-items' ref={ref}>
        {items.submenu ? (
          <>
            <button
              type='button'
              aria-haspopup='menu'
              aria-expanded={dropdown ? 'true' : 'false'}
              onClick={() => setDropdown((prev) => !prev)}
            >
              {items.title}
              {depthLevel > 0 ? <span>222</span> : <span className='arrow' />}
            </button>
            <Dropdown
              depthLevel={depthLevel}
              submenus={items.submenu}
              dropdown={dropdown}
            />
          </>
        ) : (
          <a> {items.title} </a>
        )}
      </li>
    </>
  );
};

export default MenuItems;
