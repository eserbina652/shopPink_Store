import React, {useState} from 'react';
import {ImageSearch, InputSearch, SearchWrap} from "./index";

interface ISearch {
    src: string;
    alt: string;
    style?: object
}

const SearchProducts = ({src, alt}: ISearch) => {
    const [inputValue, setInputValue] = useState('')

    return (
        <>
            <SearchWrap>
                <InputSearch
                    value={inputValue}
                    onChange={(event) => setInputValue(event.target.value)}
                />
                <ImageSearch src={src} alt={alt}/>
            </SearchWrap>
        </>
    );
};

export default SearchProducts;