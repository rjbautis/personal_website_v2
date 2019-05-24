import React from 'react';
import styles from '../styles/Menu.module.css';

const Menu = props => {
  const menuItems = [
    {
      key: 1,
      text: 'Experience',
    },
    {
      key: 2,
      text: 'Projects',
    },
  ];

  const setParentState = key => {
    props.setItemActive(key);
  };

  return (
    <div className={styles.menu_content}>
      <ul>
        {menuItems.map(item => {
          return (
            <li
              className={
                props.activeItem === item.key
                  ? styles.menu_item_active
                  : styles.menu_item_inactive
              }
              key={item.key}
            >
              <span
                className={styles.menu_item_text}
                onClick={setParentState.bind(this, item.key)}
                onKeyPress={() => {}}
                tabIndex={-1}
                role="menuitem"
              >
                {item.text}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Menu;
