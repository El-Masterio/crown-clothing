import './category-list.styles.scss';
import React from 'react';
import categories from './category-list-data';
import CategoryItem from '../category-item/category-item.component';

const CategoryList = () => {
  return (
    <div className="categories-container">
      {categories?.map((category) => (
        <CategoryItem category={category} key={category.id} />
      ))}
    </div>
  );
};

export default CategoryList;
