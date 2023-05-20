import React from 'react';
import {useLocation} from "react-router-dom";
import {useGetProductsQuery} from "../../../api/api";
import {CategoryListWrap, ElementSContainer} from "./index";
import ProductItem from "./ProductItem";

const ProductsList = () => {
    const {state: category} = useLocation()
    const {data: products} = useGetProductsQuery(category)

    return (<>
            <CategoryListWrap>
                {products?.products.map((product, index) => (
                    <ElementSContainer key={index.toString()}>
                        <ProductItem key={index.toString()} product={product}/>
                    </ElementSContainer>
                ))}
            </CategoryListWrap>
        </>
    );
};

export default ProductsList;