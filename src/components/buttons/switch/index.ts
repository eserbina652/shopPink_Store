import styled from "styled-components";

export const Form = styled.form`
  position: relative;
  margin-bottom: 26px;
`;

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
    @media (max-width: 768px) {
      left: 20px;
    }
  }

`;

export const CheckBoxText = styled.div`
  position: relative;
  font-size: 15px;
  padding: 0 0 3px 4px;
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
    @media (max-width: 768px) {
      width: 35px;
      height: 20px;
      border-radius: 10px;
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
    @media (max-width: 768px) {
      width: 11px;
      left: 4px;
      border-radius: 5px;
      top: -0.5px;
      height: 16px;
    }
  }
`;


