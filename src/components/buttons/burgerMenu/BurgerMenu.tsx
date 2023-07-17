import React, {useState} from 'react';
import {Header} from "../../../styles";
import BurgerIcon from "../../../assets/images/BurgerIcon";
import CloseButton from "../../../assets/images/CloseButton";
import Navbar from "../../navbar/Navbar";
import {BurgerHeader, BurgerMenuContent, BurgerMenuWrapper, LogoName, NavbarMobileContent} from "./styles";
import SwitchBtn from "../switch/SwitchBtn";

const BurgerMenu = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Header>
        <LogoName>ShopPink_Store</LogoName>
        <SwitchBtn/>
        <div onClick={() => setOpen(true)}>
          <BurgerIcon/>
        </div>
      </Header>
      {open&&<BurgerMenuWrapper onClick={() => setOpen(false)}>
        <BurgerMenuContent>
          <BurgerHeader onClick={() => setOpen(false)}>
            <CloseButton/></BurgerHeader>
          <NavbarMobileContent>
            <Navbar/>
          </NavbarMobileContent>
        </BurgerMenuContent>
      </BurgerMenuWrapper>}
    </>
  );
};

export default BurgerMenu;
