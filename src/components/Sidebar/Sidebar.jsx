import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { MENU_DEFINITION, SETTING_DEFINITION } from './menuDefinition';
import Divider from '../Divider/Divider.jsx';
import { setMenu } from '../../store/coreSlice.js';
import ProfileImage from '../../assets/man.png';
import { renderImage } from './utils.js';
import './Sidebar.css';

const renderMenu = ({ menus, selectedMenu, dispatch }) => {
  return (
    <>
      <ul className="menu">
        {Object.keys(menus).map((key) => {
          return (
            <li
              onClick={() => dispatch(setMenu(menus[key].stateKey))}
              className={`menu--item ${
                menus[key].stateKey === selectedMenu ? 'menu--item-active' : ''
              }`}
            >
              {renderImage({
                className: 'menu--img',
                src: `${menus[key].icon}`,
                alt: `${menus[key].title}`,
              })}

              <span className="menu--title">{menus[key].title}</span>
            </li>
          );
        })}
      </ul>
      <Divider />
    </>
  );
};

const Sidebar = () => {
  const selectedMenu = useSelector((state) => state.core.selectedMenu);
  const dispatch = useDispatch();
  return (
    <div className="sidebar">
      <div className="sidebar--profile flex">
        <img src={ProfileImage} alt="profile"></img>
        <div className="flex space-between direction-column">
          <span className="sidebar--profile-name">Jitendra</span>
          <span className="sidebar--profile-email">jk@gmail.com</span>
        </div>
      </div>

      <div className="h100 flex space-between direction-column">
        <div className="sidebar--menus">
          {Object.keys(MENU_DEFINITION).map((key) => {
            return renderMenu({
              menus: MENU_DEFINITION[key],
              selectedMenu,
              dispatch,
            });
          })}
        </div>

        <div className="sidebar--setting">
          {Object.keys(SETTING_DEFINITION).map((key) => {
            return renderMenu({
              menus: SETTING_DEFINITION[key],
              selectedMenu,
              dispatch,
            });
          })}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
