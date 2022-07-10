import './styles/global.css';

import Navbar from './multiDropdown/components';

const App = () => {
  return (
    <header>
      <div className='nav-area bg-[#aaa]'>
        <Navbar />
      </div>
    </header>
  );
};

export default App;
