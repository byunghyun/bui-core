## Installation

```
$ npm install react-multi-dropdown-menu
$ yarn add react-multi-dropdown-menu
```

## Features
- Easy 2-step multi-select option
- And much more !

## How to Use?

```jsx
  import React from 'react';

  import DropDownMenu from 'react-multi-dropdown-menu';
  
  function App(){
     const [selectedDateRangeType, setDateRangeType] = useState(`default`);
     const handleClickEvent = {
       changeDateRangeType: (dateRangeType: string) => {
         setDateRangeType(dateRangeType);
       },
     };
    return (
      <div>
       <DropDownMenu
        selectedValue={selectedDateRangeType}
        onChange={handleClickEvent.changeDateRangeType}
        className={'custom className'}
        data={[
          {
            title: '111',
            submenu: [{ title: '222' }],
          },
          {
            title: '22',
            submenu: [{ title: '33' }, { title: '3333' }],
          },
          {
            title: '44',
          },
        ]}
       />
      </div>
    );
  }
```