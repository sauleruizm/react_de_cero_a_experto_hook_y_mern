import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({ setCategories }) => {
    
    const [inputValue, setInputValue] = useState('');
    const handleInputChange = ( e ) => {
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim().length > 2) {
            setCategories(cats => [inputValue, ...cats]);
            setInputValue('');            
        }
        //console.log('submit echo');
    }
    return (
        <form onSubmit={handleSubmit}>
            <h2>Add category</h2>
            <p>{inputValue}</p>
            <input type="text" 
                value={inputValue} 
                onChange= { handleInputChange }/ >
        </form>
    )
    
}

AddCategory.propTypes =  {
    setCategories: PropTypes.func.isRequired
}