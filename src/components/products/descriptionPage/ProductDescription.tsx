import React, {useState} from 'react';
import {useLocation} from "react-router-dom";
import {DescriptionBox, FocusElement, Image, ImageGallery, ProductDescriptionWrap} from "./index";
import {DescriptionFont, SecondaryFont} from "../../../styles";
import {useAppDispatch, useAppSelector} from "../../../hooks/redux";
import {PrevNextButton} from "../../buttons/incDecButton";
import {BuyButton} from "../../buttons/buyBtn";
import {onAdd, onIncrease} from "../../../store/reducers/buyBasket";

const ProductDescription = () => {
    const dispatch = useAppDispatch()
    const basketList = useAppSelector(state => state.basketReducer.basketList)
    const {state: product} = useLocation()
    const [imgCount, setImgCount] = useState(0)
    const handleIncrease = () => {
        if (imgCount < product.images.length - 1) {
            setImgCount(imgCount + 1);
        } else {
            setImgCount(0);
        }
    };
    const handleDecrease = () => {
        if (imgCount <= product.images.length - 1) {
            setImgCount(imgCount - 1);
        }
        if (imgCount <= 0) {
            setImgCount(0);
        }
    };

    const handleClick = () => {
        const currentEl = basketList.find(el => el.id === product.id)
        if (currentEl) {
            dispatch(onIncrease(currentEl))
        } else {
            dispatch(onAdd(product))
        }
    }
    return (
        <ProductDescriptionWrap>
            <ImageGallery>
                <PrevNextButton onClick={handleDecrease}>Prev</PrevNextButton>
                <Image src={product.images[imgCount]}/>
                <PrevNextButton onClick={handleIncrease}>Next</PrevNextButton>
            </ImageGallery>
            <DescriptionBox>
                <FocusElement>
                    <SecondaryFont>Category: {product.category}</SecondaryFont>
                </FocusElement>
                <FocusElement>
                    <SecondaryFont>Brand name: {product.brand}</SecondaryFont>
                </FocusElement>
                <FocusElement>
                    <SecondaryFont>'{product.description}'</SecondaryFont>
                </FocusElement>
                <DescriptionFont>
                    <p>Product Description:</p>
                    <p>Company name: {product.brand}</p>
                    <p>Product name: {product.title}</p>
                    <p>Rating: {product.rating}</p>
                    <p>Count: {product.stock}</p>
                    <p>Discount: {product.discountPercentage}%</p>
                    <p>Price with discount: {product.price}$</p>
                </DescriptionFont>
                <BuyButton onClick={handleClick}>Buy</BuyButton>
            </DescriptionBox>
        </ProductDescriptionWrap>
    );
};

export default ProductDescription;