import React from 'react';
import menuStyles from '../styles/Menu.module.css'

const Menu = () => {
  return (
    <div className={menuStyles.menu_content}>
      <ul>
        <li>
          <h2 className={menuStyles.menu_item}>Experience</h2>
        </li>
        <li>
          <h2 className={menuStyles.menu_item}>Projects</h2>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
