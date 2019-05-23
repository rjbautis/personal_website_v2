import React from 'react';
import menuStyles from '../styles/Menu.module.css'

const Menu = () => {
  return (
    <div className={menuStyles.menu_content}>
      <ul>
        <li className={menuStyles.menu_item}>
          <span className={menuStyles.menu_item_text}>Experience</span>
        </li>
        <li className={menuStyles.menu_item}>
          <span className={menuStyles.menu_item_text}>Projects</span>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
