import React, {useState} from 'react';
import {Header} from "../../../styles";
import BurgerIcon from "../../../assets/images/BurgerIcon";
import CloseButton from "../../../assets/images/CloseButton";
import Navbar from "../../navbar/Navbar";
import {PopupsWrapper} from "../../../popups";
import {BurgerHeader, BurgerMenuContent, LogoName} from "./styles";
import MenuBtn from "../menu/MenuButton";
import SearchProducts from "../../search/products/SearchProducts";
import {searchProduct} from "../../../assets";
import SwitchBtn from "../switch/SwitchBtn";
import {useAppSelector} from "../../../hooks/redux";

const BurgerMenu = () => {
    const [open, setOpen] = useState(false)
    const islogin = useAppSelector(state => state.authReducer.user)

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
