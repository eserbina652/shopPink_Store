import React from 'react';
import {Loading, PrimaryFont} from "../../../styles";
import {Elements} from "./index";
import {useNavigate} from "react-router-dom";
import {Image} from "../descriptionPage";
import {SeeMore} from "../../buttons/seeMore";
import {Product} from "../types";

interface IProductItem {
    product: Product
}

const ProductItem = ({product}: IProductItem) => {
    const navigate = useNavigate()
    const handleClick = () => {
        navigate("/productDescription", {state: product});
    }
    return (
        <>
            {!product ? <Loading/> : <Elements>
                <Image src={product?.images[0]} alt={product?.title}/>
                <PrimaryFont fontSize='18px'>{product?.title}</PrimaryFont>
                <SeeMore onClick={handleClick}>See more</SeeMore>
            </Elements>}
        </>
    );
};

export default ProductItem;