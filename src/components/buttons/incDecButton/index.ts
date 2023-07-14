import {SeeMore} from "../seeMore";
import styled from "styled-components";

export const PrevNextButton = styled(SeeMore)`
  position: relative;
  max-width: 5vw;
  min-height: 60%;
  margin: 0;
  color: ${props => props.theme.buttons.secondary};
  align-items: center;
  background-color: transparent;
  border: none;
  transition: 1s;

  &:hover {
    background-color: transparent;
    box-shadow: 5px 10px 20px 1px ${props => props.theme.colors.shadow};
    border: none;
  }

  @media (max-width: 1024px) {
    font-size: 18px;
  }
  @media (max-width: 768px) {
    padding: 3vw;
    font-size: 16px;
  }
`;