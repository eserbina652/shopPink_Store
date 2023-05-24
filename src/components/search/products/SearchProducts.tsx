import React, {useEffect, useState} from 'react';
import {ImageSearch, InputSearch, SearchedProducts, SearchWrap} from "./index";
import {api} from "../../../api/api";
import SearchedProductComponent from "./product/SearchedProductComponent";
import {DescriptionFont} from "../../../styles";
import {useOutsideClick} from "../../../hooks/detectedClick";

interface ISearch {
    src: string;
    alt: string;
    style?: object
}

const SearchProducts = ({src, alt}: ISearch) => {
    const [inputValue, setInputValue] = useState('')
    const [productList, setProductList] = useState(false)
    const [trigger, {data: productsArr}] = api.endpoints.getSearchedProducts.useLazyQuery()

    const onClose = () => {
        setInputValue('')
    }

    const getSearchedProducts = () => {
        trigger(inputValue)
    }

    useEffect(() => {
        const delay = setTimeout(() => {
            getSearchedProducts()
        }, 500)

        return () => clearTimeout(delay)
    }, [inputValue])

    useEffect(() => {
        if (inputValue) {
            setProductList(true);
        } else {
            setProductList(false);
        }
    }, [inputValue.length]);

    const handleClickOutside = () => {
        setProductList(false);
        setInputValue('')
    };

    const ref = useOutsideClick(handleClickOutside)

    // @ts-ignore
    return (<>
            <SearchWrap>
                <InputSearch
                    value={inputValue}
                    onChange={(event) => setInputValue(event.target.value)}
                />
                <ImageSearch src={src} alt={alt}/>
            </SearchWrap>
            {productList &&
                //@ts-ignore
                <SearchedProducts ref={ref}>
                    {/*@ts-ignore*/}
                    {inputValue && productsArr?.products.length > 0 ? productsArr?.products.map((el, index) => {
                            return <SearchedProductComponent
                                onClose={onClose}
                                product={el}
                                key={index.toString()}/>
                        }) :
                        <div style={{textAlign: "center"}}>
                            <DescriptionFont>Сould not be found</DescriptionFont>
                        </div>
                    }
                </SearchedProducts>
            }
        </>

    );
};

export default SearchProducts;