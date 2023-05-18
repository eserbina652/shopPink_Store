import React, {useState} from 'react';
import {ListWrapper, Menu} from "./index";
import {SecondaryFont} from "../../../styles";

interface IMenuButton {
    isActive: boolean
}

const MenuButton = ({isActive}: IMenuButton) => {
    const [menu, setMenu] = useState(false)

    const handleClick = () => {
        if (!menu) {
            setMenu(true)
        } else {
            setMenu(false)
        }
    }


    return (
        <>
            {/*@ts-ignore*/}
            <div onClick={isActive ? handleClick : undefined}>
                <Menu>
                    <SecondaryFont>Menu</SecondaryFont>
                </Menu>
            </div>
            <ListWrapper menu={menu} className={menu ? 'openMenu' : 'closeMenu'}>

            </ListWrapper>
        </>
    );
};

export default MenuButton;