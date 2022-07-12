import './styles/global.css';

const App = () => {
  const data = [
    {
      title: 'Services',
      submenu: [
        {
          title: 'web design',
        },
        {
          title: 'web development',
          submenu: [
            {
              title: 'Frontend',
            },
            {
              title: 'Backend',
              submenu: [
                {
                  title: 'NodeJS',
                },
                {
                  title: 'PHP',
                },
              ],
            },
          ],
        },
        {
          title: 'SEO',
        },
      ],
    },
  ];
  return (
    <div className='nav-area bg-[#aaa]'>
      <p>qwf</p>
    </div>
  );
};

export default App;
