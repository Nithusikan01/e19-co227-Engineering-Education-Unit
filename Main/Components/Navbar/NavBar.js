import React, { useState } from 'react';
import './NavBar.css';
import { BiChevronRight, BiChevronDown } from 'react-icons/bi';

const NavBar = ({ menuData }) => {
  const [isMobile, setIsMobile] = useState(false);

  const toggleSubMenu = (e, index) => {
    e.preventDefault();
    const subMenu = document.getElementById(`sub-menu-${index}`);
    if (subMenu) {
      subMenu.classList.toggle('active');
    }
  };

  const toggleMenu = () => {
    setIsMobile(!isMobile);
  };

  return (
    <nav className={`navbar ${isMobile ? 'mobile' : ''}`}>
      {/*<button
        className={`toggle-button ${isMobile ? 'visible' : ''}`}
        onClick={toggleMenu}
      >
        Toggle Menu
  </button>
      <div className={`toggle-button ${isMobile ? 'visible' : ''}`} onClick={toggleMenu}>
        {isMobile && <i className="bi bi-border-width"></i>}
  </div>*/}
      <div className={`toggle-button ${isMobile ? 'visible' : ''}`} onClick={toggleMenu}>
        <i className="bi bi-border-width"></i> {/* Replace with your icon */}
      </div>
      <ul className={`menu ${isMobile ? 'hidden' : ''}`}>
        {menuData.map((item, index) => (
          <li key={index}>
            <a
              href={item.path}
              onClick={(e) => (item.children ? toggleSubMenu(e, index) : null)}
            >
              {item.icon && !isMobile && <i className={item.icon}></i>}
              {item.title}
              {item.children && !isMobile && (
                <span className="arrow">
                  {item.children.length > 0 ? <BiChevronRight /> : null}
                </span>
              )}
              {item.children && isMobile && (
                <span className="arrow" onClick={(e) => toggleSubMenu(e, index)}>
                  {item.children.length > 0 ? <BiChevronDown /> : null}
                </span>
              )}
            </a>
            {item.children && (
              <ul
                id={`sub-menu-${index}`}
                className={`sub-menu ${isMobile ? '' : 'active'}`}
              >
                {item.children.map((subItem, subIndex) => (
                  <li key={subIndex}>
                    <a href={subItem.path}>{subItem.title}</a>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
      <div className={`search-bar ${isMobile ? '' : 'active'}`}>
        <input type="text" placeholder="Type to search" />
        <button>Search</button>
      </div>
      {/*!isMobile && (
        <div className={`search-bar active`}>
          <input type="text" placeholder="Type to search" />
          <button>Search</button>
        </div>
      )*/}
    </nav>
  );
};

export default NavBar;
