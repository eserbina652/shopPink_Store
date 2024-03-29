import React from 'react';
import {DescriptionFont} from "../../../../styles";
import {FlexImg, ImgWrapper, ProductDescriptionWrap, SearchedProduct} from "./index";
import {useNavigate} from "react-router-dom";
import {Product} from "../../../products/types";
import useScreenSize from "../../../../hooks/useScreenSize";

interface ISearchedProduct {
    product: Product
    onClose: () => void
}

const SearchedProductComponent = ({product, onClose}: ISearchedProduct) => {
  const isMobile = useScreenSize();
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/productDescription', {state: product});
  };
  return (
    <SearchedProduct onClick={() => {
      handleClick();
      onClose();
    }}>
      {/*@ts-ignore*/}
      <ImgWrapper height={isMobile?'auto':'150px'}>
        <FlexImg src={product?.images[0]} alt={product?.title}/>
      </ImgWrapper>
      <ProductDescriptionWrap>
        <DescriptionFont fontSize='14px' padding='5px'>{product.category}</DescriptionFont>
        <DescriptionFont fontSize='18px' padding='5px'>{product.brand}</DescriptionFont>
        <DescriptionFont fontSize='14px' padding='5px'>Prise: {product.price}$</DescriptionFont>
      </ProductDescriptionWrap>
    </SearchedProduct>
  );
};

export default SearchedProductComponent;
