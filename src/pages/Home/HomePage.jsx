import Logo from '../../components/logo';
import Navbar from '../../components/navbar';
import Builder from '../../components/navbar/builder';

import './HomePage.css';
export default function HomePage() {
  // const navItems = [
  //   { id: 1, title: 'Item 1', content: 'Content for item 1' },
  //   { id: 2, title: 'Item 2', content: 'Content for item 2' },
  //   { id: 3, title: 'Item 3', content: 'Content for item 3' },
  // ];
  // const [activeNavItem, setActiveNavItem] = useState(null);
  // function handleNavItemClick(itemId) {
  //   setActiveNavItem(itemId);
  // }

  return (
    <div className='home'>
      <div className='sidebar'>
        <Logo />
        {/* <Navbar item={handleNavItemClick} /> */}
        <Navbar />
      </div>
      <div className='main'>
        {/* {activeNavItem ? <Collection content={activeNavItem} /> : <Builder data={data} />} */}
        <Builder />
      </div>
    </div>
  );
}
