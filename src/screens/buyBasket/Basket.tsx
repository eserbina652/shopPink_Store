import React from "react";
import { PrimaryFont, SecondaryFont } from "../../styles";
import { useAppDispatch } from "../../hooks/redux";
import { CountOfElementsWrap, IncDecButton } from "./index";
import { onDecrease, onIncrease } from "../../store/reducers/buyBasket";
import { onOpenPopup } from "../../store/reducers/popup";
import { Product } from "../../components/products/types";
import { Image } from "../productInfo";
import { Elements } from "../../components/products/productPage";

interface IBasket {
  product?: Product;
}

const Basket = ({ product }: IBasket) => {
  const dispatch = useAppDispatch();

  const handleIncrease = () => {
    dispatch(onIncrease(product));
  };
  const handleDecrease = () => {
    if (product?.count === 1) {
      dispatch(onOpenPopup(product));
    } else {
      dispatch(onDecrease(product));
    }
  };
  return (
    <>
      <Elements>
        <Image src={product?.images[0]} alt={product?.title} />
        <PrimaryFont fontSize="1vw">{product?.title}</PrimaryFont>
        <CountOfElementsWrap>
          <IncDecButton onClick={handleDecrease}>-</IncDecButton>
          <SecondaryFont style={{ marginTop: "12px" }}>
            {product?.count}
          </SecondaryFont>
          <IncDecButton onClick={handleIncrease}>+</IncDecButton>
        </CountOfElementsWrap>
      </Elements>
      ) )
    </>
  );
};

export default Basket;
