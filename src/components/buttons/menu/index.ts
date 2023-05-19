import styled from "styled-components";


export const Menu = styled.button`
  background-color: ${props => props.theme.buttons.secondary};
  border: none;
  border-radius: 0.5vw;
  padding: 0 10px;
  margin-left: 35px;
  cursor: pointer;
  @media (max-width: 1024px) {
    margin-left: 0;
  }
  @media (max-width: 768px) {
    padding: 0;
  }
`
export const ListWrapper = styled.div<{ menu: boolean }>`
  background-color: ${props => props.theme.colors.secondary};
  width: auto;
  border: ${props => props.theme.buttons.secondary} 2px solid;
  border-radius: 0.5vw;
  display: flex;
  position: absolute;
  //z-index: -3;
  top: 13.5vh;
  left: 0;
  padding: 10px 30px;
  flex-direction: column;
  overflow-x: hidden;
  height: 83vh;
  animation-duration: 1s;
  @media (max-width: 1024px) {
    top: 10.25vh;
  }
  @media (max-width: 768px) {
    top: 8.25vh;
  }
  @media (max-width: 480px) {
    top: 10vh;
  }

  &.openMenu {
    animation: left-right-slide 1.0s forwards;
    opacity: 1;
    transition: 1s;
  }

  &.closeMenu {
    animation: right-left-slide 1.0s forwards;
    opacity: 0;
    transition: 1s;
  }

  @keyframes left-right-slide {
    0% {
      transform: translateX(-150%);
    }
    100% {
      transform: translateY(0);
    }
  }
  @keyframes right-left-slide {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateX(-150%);
      display: none;
    }
  }

  ::-webkit-scrollbar {
    width: 12px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${props => props.theme.posts.accentColor};
    border-radius: 20px;
    box-shadow: ${props => props.theme.buttons.secondary} 2px 4px 10px 1px;
  }

  ::-webkit-scrollbar-track {
    border-radius: 30px;
    background-color: transparent;
    box-shadow: inset 3px 10px 6px -2px ${props => props.theme.colors.shadow};
    margin: 24px;
  }
`
export const List = styled.h2`
  display: flex;
  list-style-type: none;
  justify-content: center;
  align-items: center;
  padding: 15px 10px;
  font-size: 20px;
  color: ${props => props.theme.fontColors.primary};
  cursor: pointer;

  :hover {
    transition-duration: 1s;
    color: ${props => props.theme.fontColors.secondary};
    background-color: ${props => props.theme.colors.shadow};
    border-radius: 20px;
  }

`