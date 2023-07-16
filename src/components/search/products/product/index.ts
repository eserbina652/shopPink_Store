import styled from "styled-components";
import {Elements} from "../../../products/productPage";

export const SearchedProduct = styled(Elements)`
  flex-direction: row;
  border: 1px solid ${props => props.theme.buttons.secondary};
  border-radius: 30px;
  background-color: ${props => props.theme.posts.background};
  margin: 3px;
  padding: 3px;
  padding-right: 5px;
  cursor: pointer;
  @media (max-width: 768px){
    top: 270px;
    left: 155px;
  }
  @media (max-width: 480px){
    flex-direction: column;
    padding: 0;
  }
`;

export const ProductDescriptionWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  border: 1px solid ${props => props.theme.buttons.secondary};
  width: 50%;
  border-radius: 20px;
  box-shadow: inset 0px 5px 15px 5px ${props => props.theme.colors.shadow};
  @media (max-width: 480px){
    width: 90%;
    margin-bottom: 5px;
  }
`;

export const ImgWrapper = styled.div<{ width?: string; height?: string }>`
  width: ${({width}) => width || '60%'};
  height: ${({height}) => height || 'auto'};
  margin: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 480px){
    margin: 5px;
  }
`;

export const FlexImg = styled.img`
  max-width: 95%;
  object-fit: cover;
  height: auto;
  max-height: 90%;
`;
