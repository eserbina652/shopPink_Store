import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import Basket from "./Basket";
import {onRefreshPage} from "../../store/reducers/buyBasket";
import {Loading} from "../../styles";
import {BasketListWrap} from "./index";
import {ElementSContainer} from "../../components/products/productPage";

const BasketList = () => {
  const basketList = useAppSelector(state => state.basketReducer.basketList);
  const dispatch = useAppDispatch();
  useEffect(() => {
    const basketData = localStorage.getItem("basketList");
    if (basketData) {
      dispatch(onRefreshPage(JSON.parse(basketData)));
    }
  }, []);

  return (
    <BasketListWrap>
      {basketList.map((el, index) => (
        <ElementSContainer key={index.toString()}>
          {<Loading key={index.toString()}/> && <Basket key={index.toString()} product={el}/>}
        </ElementSContainer>
      ))}
    </BasketListWrap>
  );
};

export default BasketList;