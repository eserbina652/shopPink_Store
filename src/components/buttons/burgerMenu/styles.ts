import styled from "styled-components";
import {PopupsWrapper} from "../../../popups";

export const BurgerMenuWrapper = styled(PopupsWrapper)`
    align-items: flex-start;
`;
export const BurgerMenuContent = styled.div`
    display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
`;

export const BurgerHeader = styled.div`
    display: flex;
  justify-content: flex-end;
`;

export const LogoName = styled.h1`
    color: ${props => props.theme.posts.primary};
  font-size: 18px;
`;

export const NavbarMobileContent = styled.div`
    display: flex;
  justify-content: space-between;
  flex-direction: column;
  top: 100px;
`;