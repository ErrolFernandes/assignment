import React from 'react'
import '../../Styles/NavBar.css'

const Navbar = () => {
    // const [isDarkMode, setIsDarkMode] = useState(false);
  
    // const toggleDarkMode = () => {
    //   setIsDarkMode((prevMode) => !prevMode);
    //   // Add logic for toggling dark mode
    // };
  
    return (
      <div className='NavigationBar'>
        <div className='left'>
        <div className="logo">
          
          <img src="/Logo.png" alt="Logo" />
        
        </div>
        <div className="nav-links">
          <a href="#">Overview</a>
          <a href="#">Transaction</a>
          <a href="#">Invoice</a>
          <a href="#">Activity</a>
        </div>
        </div>
        <div >
         <span className='profile-icon'> &nbsp; </span>
        </div>
      </div>
    );
  };
  
  export default Navbar;