import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';
// import PropTypes from 'prop-types';

export const GifExpertApp = ({ defaultCategories = [] }) => {

  // const categories = ['One Punch','Samurai X', 'Dragon Ball']
  const [categories, setCategories] = useState( defaultCategories );

  // const handleAdd = () => {
  //   // setCategories([...categories,'HunterX Hunter']);
  //   setCategories( cats => [...cats,'Hunter X Hunter']);
  // };

  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories= { setCategories }/>
      <hr/>
      <button onClick={ handleAdd }>Agregar</button>
      <ol>
        {
          categories.map((category, i) => 
            <GifGrid key= { category } category = { category }/>
          )
        }
      </ol>
    </>
  );
};