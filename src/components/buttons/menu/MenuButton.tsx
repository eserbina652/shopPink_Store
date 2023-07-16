import React, {useState} from 'react';
import {ListWrapper, Menu} from "./index";
import {SecondaryFont} from "../../../styles";
import {useGetCategoriesQuery} from "../../../api/api";
import {useOutsideClick} from "../../../hooks/detectedClick";
import CategoryItem from "./categoryItem/CategoryItem";

interface IMenuButton {
    isActive: boolean
}

const MenuButton = ({isActive}: IMenuButton) => {
  const [menu, setMenu] = useState(false);
  const {data: categories = []} = useGetCategoriesQuery();
  const handleClickOutside = () => {
    setMenu(false);
  };
  const handleClick = () => {
    if (!menu) {
      setMenu(true);
    } else {
      setMenu(false);
    }
  };

  const ref = useOutsideClick(handleClickOutside);

  return (
    <>
      {/*@ts-ignore*/}
      <div ref={ref} onClick={isActive ? e => {
        handleClick();
        e.stopPropagation();
      } : undefined}>
        <Menu>
          <SecondaryFont>Menu</SecondaryFont>
        </Menu>
      </div>
      <ListWrapper menu={menu} className={menu ? 'openMenu' : 'closeMenu'}>
        {categories?.map((category, index) => (
          <CategoryItem key={index.toString()} category={category}/>
        ))}
      </ListWrapper>
    </>
  );
};

export default MenuButton;
