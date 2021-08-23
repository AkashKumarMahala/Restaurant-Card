import React,{ useState } from 'react';
import Menu from './MenuApi.js';
import './style.css'
import MenuCard from './MenuCard';
import Navbar from './Navbar.js';

const uniqueList = [
  ...new Set (Menu.map((el) => {
  return el.category
})),"All"
]

const Restaurant = () => {
    const [menuData, setMenuData] = useState(Menu);
    const [menuList, setMenuList] = useState(uniqueList)

    const menuFilter = (category) => {
      if(category === "All"){
        setMenuData(Menu);
        return; 
      }
        const updatedList = Menu.filter((el) => {
        return el.category === category;
      })
      setMenuData(updatedList)
    }
    return (
      <>
        <Navbar menuFilter={menuFilter} menuList={menuList}/>
        <MenuCard menuData={menuData}/>
      </>
    )
}

export default Restaurant
