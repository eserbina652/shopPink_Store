import React from 'react';
import {Loading, PrimaryFont, SecondaryFont} from "../../styles";
import {Product} from "../../components/products/types";
import {useAppDispatch} from "../../hooks/redux";
import {Image} from "../../components/products/descriptionPage";
import {Elements} from "../../components/products/productPage";
import {CountOfElementsWrap, IncDecButton} from "./index";
import {onDecrease, onIncrease} from "../../store/reducers/buyBasket";
import {onOpenPopup} from "../../store/reducers/popup";

interface IBasket {
    product?: Product
}

const Basket = ({product}: IBasket) => {
    const dispatch = useAppDispatch()

    const handleIncrease = () => {
        dispatch(onIncrease(product))
    }
    const handleDecrease = () => {
        if (product?.count === 1) {
            dispatch(onOpenPopup(product))
        } else {
            dispatch(onDecrease(product))
        }
    }
    return (
        <>{product ? (<Loading/> && <Elements>
                <Image src={product?.images[0]} alt={product?.title}/>
                <PrimaryFont fontSize='18px'>{product?.title}</PrimaryFont>
                <CountOfElementsWrap>
                    <IncDecButton onClick={handleDecrease}>-</IncDecButton>
                    <SecondaryFont style={{marginTop: '12px'}}>{product.count}</SecondaryFont>
                    <IncDecButton onClick={handleIncrease}>+</IncDecButton>
                </CountOfElementsWrap>
            </Elements>)
            :
            <PrimaryFont>
                Your basket is empty
            </PrimaryFont>
        }</>
    );
};

export default Basket;