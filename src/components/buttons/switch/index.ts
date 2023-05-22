import styled from "styled-components";

export const Form = styled.form``

export const Label = styled.label`
  input[type='checkbox'] {
    z-index: -1;
    opacity: 0;
  }

  input:checked + .checkbox__text:before {
    background-color: ${props => props.theme.buttons.primary};
  }

  input:checked + .checkbox__text:after {
    left: 1.7vw;
    @media (max-width: 1024px) {
      left: 2.7vw;
    }

  }

`

export const CheckBoxText = styled.div`
  font-size: 2vw;
  position: relative;
  padding: 0 0 0.3vw 4vw;
  cursor: pointer;

  &:before {
    content: '';
    position: absolute;
    top: -0.5vw;
    left: 0;
    width: 3.25vw;
    height: 2vw;
    border-radius: 1.8vw;
    background: ${props => props.theme.buttons.primary};
    box-shadow: inset 0 0.3vw 0.3vw ${props => props.theme.colors.shadow};
    transition: .2s;
    @media (max-width: 1024px) {
      width: 5.25vw;
      height: 2.5vw;
      border-radius: 1vw;
    }
  }

  &:after {
    content: '';
    position: absolute;
    top: -0.4vw;
    left: 0.1vw;
    width: 1.4vw;
    height: 1.8vw;
    border-radius: 0.9vw;
    background: ${props => props.theme.buttons.border};
    box-shadow: 0 0.2vw 0.5vw ${props => props.theme.colors.shadow};
    transition: .2s;
    @media (max-width: 1024px) {
      width: 2.25vw;
      left: 0.5vw;
      border-radius: 5vw;
      top: -0.1vw;
    }
  }
`


