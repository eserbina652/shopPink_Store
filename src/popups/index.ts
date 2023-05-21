import styled from "styled-components";
import {SeeMore} from "../components/buttons/seeMore";

export const PopupsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.77);
  position: fixed;
  z-index: 10;
`;

export const PopupWindow = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1vw 2vw 3vw 2vw;
  background-color: ${props => props.theme.buttons.primary};
  border: 0.1rem solid ${props => props.theme.buttons.secondary};
  border-radius: 2vw;
  box-shadow: 5px 5px 10px 1px ${props => props.theme.colors.shadow};
`;

export const CloseButton = styled.div`

  margin-left: 100%;
  cursor: pointer;
  font-size: 25px;
  font-weight: bold;
  color: ${props => props.theme.buttons.secondary};
`;

export const ButtonsWrap = styled.div<{ isCenter?: boolean }>`
  display: flex;
  position: relative;
  justify-content: ${(props) => (props.isCenter ? "center" : "flex-end")};
`;

export const YOrNButton = styled(SeeMore)``;
