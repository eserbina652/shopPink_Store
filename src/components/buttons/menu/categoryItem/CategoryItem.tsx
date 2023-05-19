import React from 'react';
import {List} from "../index";
import {useNavigate} from "react-router-dom";

interface ICategoryItem {
    category: string;
}

const CategoryItem = ({category}: ICategoryItem) => {
    const navigate = useNavigate()
    const handleClick = () => {
        navigate('/products', {state: category})
    }
    return (<>
        {<List onClick={handleClick} className='category'>{category}</List>}
    </>)
};

export default CategoryItem;