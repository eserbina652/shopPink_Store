import React, {useState} from 'react';
import {Header} from "../../../styles";
import BurgerIcon from "../../../assets/images/BurgerIcon";
import CloseButton from "../../../assets/images/CloseButton";
import Navbar from "../../navbar/Navbar";
import {PopupsWrapper} from "../../../popups";
import {BurgerHeader, BurgerMenuContent, LogoName} from "./styles";
import SwitchBtn from "../switch/SwitchBtn";

const BurgerMenu = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {open?<PopupsWrapper>
        <BurgerMenuContent>
          <BurgerHeader onClick={() => setOpen(false)}><CloseButton/></BurgerHeader>
          <Navbar/>
        </BurgerMenuContent>
      </PopupsWrapper> :<Header>
        <LogoName>ShopPink_Store</LogoName>
        <SwitchBtn/>
        <div onClick={() => setOpen(true)}>
          <BurgerIcon/>
        </div>
      </Header>}
    </>
  );
};

export default BurgerMenu;
