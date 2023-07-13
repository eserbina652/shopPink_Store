import React from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {onLogin} from "../../store/reducers/authorization";
import CustomLink from "../customLink/CustomLink";
import {searchProduct} from "../../assets";
import MenuBtn from "../buttons/menu/MenuButton";
import SwitchBtn from "../buttons/switch/SwitchBtn";
import SearchProducts from "../search/products/SearchProducts";
import useScreenSize from "../../hooks/useScreenSize";

const Navbar = () => {
    const dispatch = useAppDispatch()
    const islogin = useAppSelector(state => state.authReducer.user)
    const isMobile = useScreenSize()
    const handleLogOut = () => {
        dispatch(onLogin(null))
        localStorage.clear()
    }

    return (
        <>
            {/*@ts-ignore*/}
            {isMobile? <>
                <MenuBtn isActive={!!islogin}/>
                <CustomLink to='/home' linkText='Home'/>
                <CustomLink to='/buyBasket' linkText='Basket'/>
                <SearchProducts src={searchProduct} alt={'search product'}/>
                <CustomLink to='/profile' linkText='Profile'/>
                <CustomLink handleClick={handleLogOut} to='/' linkText='Log Out'/>
            </>: <>
                <MenuBtn isActive={!!islogin}/>
                <CustomLink to='/home' linkText='Home'/>
                <CustomLink to='/buyBasket' linkText='Basket'/>
                <SearchProducts src={searchProduct} alt={'search product'}/>
                <CustomLink to='/profile' linkText='Profile'/>
                <SwitchBtn/>
                <CustomLink handleClick={handleLogOut} to='/' linkText='Log Out'/>
            </>}
        </>
    );
};

export default Navbar;
