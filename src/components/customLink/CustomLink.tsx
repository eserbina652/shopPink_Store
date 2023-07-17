import React from 'react';
import {Link} from "react-router-dom";
import {PrimaryFont} from "../../styles";
import {useAppSelector} from "../../hooks/redux";


interface ICustomLink {
    to: string;
    linkText?: string;
    handleClick?: () => void
}

const CustomLink = ({to, linkText, handleClick}: ICustomLink) => {
  const isActive = useAppSelector(state => state.authReducer.user);
  if (isActive) {
    return (
      <Link style={{textDecoration: "none", maxHeight: '40px', width: 'fit-content',
        margin: '0 auto'}} onClick={handleClick} to={to}>
        <PrimaryFont>{linkText}</PrimaryFont>
      </Link>
    );
  }
  return <PrimaryFont>{linkText}</PrimaryFont>;
};

export default CustomLink;
