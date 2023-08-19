import styled, { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

export const AppGridBox = styled.div<{ margin?: string; tempRow?: string }>`
  display: grid;
  position: relative;
  margin: ${({ margin }) => margin || "0"};
  border: ${(props) => props.theme.colors.secondary};
  grid-template-rows: ${({ tempRow }) => tempRow || "0.2fr 3fr"};
  background-color: ${(props) => props.theme.colors.secondary};
`;

export const PrimaryFont = styled.h1<{ fontSize?: string; padding?: string }>`
  font-size: ${({ fontSize }) => fontSize || "24px"};
  color: ${(props) => props.theme.fontColors.secondary};
  padding: ${({ padding }) => padding || "0.7vw"};
  text-align: center;
  & a {
    text-decoration: none;
  }
  @media (max-width: 1024px) {
    font-size: 20px;
    padding: 10px 5px;
  }
  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

export const SecondaryFont = styled.h1<{ fontSize?: string; padding?: string }>`
  font-size: ${({ fontSize }) => fontSize || "20px"};
  color: ${(props) => props.theme.fontColors.secondary};
  padding: ${({ padding }) => padding || "10px"};
  @media (max-width: 1024px) {
    font-size: 18px;
  }
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export const DescriptionFont = styled.h1<{
  fontSize?: string;
  padding?: string;
}>`
  font-size: ${({ fontSize }) => fontSize || "20px"};
  color: ${(props) => props.theme.fontColors.description};
  padding: ${({ padding }) => padding || "10px"};
  @media (max-width: 1024px) {
    font-size: 18px;
  }
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export const ErrorFont = styled.h1<{ fontSize?: string; padding?: string }>`
  font-size: ${({ fontSize }) => fontSize || "18px"};
  color: ${(props) => props.theme.fontColors.primary};
  padding: ${({ padding }) => padding || "10px"};
  @media (max-width: 1024px) {
    font-size: 16px;
  }
`;
export const Loading = styled.span`
  width: 88px;
  height: 88px;
  display: block;
  margin: 15px auto;
  position: relative;
  color: #FFF;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;

  &::after, ::before {
    content: '';
    box-sizing: border-box;
    position: absolute;
    width: 35px;
    height: 35px;
    top: 0;
    background-color: #FFF;
    border-radius: 50%;
    animation: scale50 1s infinite ease-in-out;
  }

  &::before {
    top: auto;
    bottom: 0;
    background-color: ${(props) => props.theme.elements.secondary};
    animation-delay: 0.5s;
  }

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  @keyframes scale50 {
    0%, 100% {
      transform: scale(0);
    }
    50% {
      transform: scale(1);
    }
`;

export const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: fit-content;
  position: sticky;
  padding: 25px 5%;
  background-color: ${(props) => props.theme.colors.secondary};
  top: 0;
  grid-template-columns: 1fr 1fr 1fr 2fr 1fr 1fr 1fr;
  justify-items: center;
  width: auto;
  max-height: 150px;
  z-index: 2;
  box-shadow: 10px 10px 10px 1px ${(props) => props.theme.colors.shadow};
  @media (max-width: 1024px) {
    padding: 25px 20px 10px 20px;
  }
  @media (max-width: 768px) {
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
  @media (max-width: 480px) {
    ::-webkit-scrollbar {
      width: 12px;
    }

    ::-webkit-scrollbar-thumb {
      background-color: ${(props) => props.theme.posts.accentColor};
      border-radius: 20px;
      box-shadow: ${(props) => props.theme.buttons.secondary} 2px 4px 10px 1px;
    }

    ::-webkit-scrollbar-track {
      border-radius: 30px;
      background-color: transparent;
      box-shadow: inset 3px 10px 6px -2px ${(props) => props.theme.colors.shadow};
      margin: 24px;
    }
  }
`;
