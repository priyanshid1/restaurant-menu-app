// src/components/CategoryList.js
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCategoriesStart } from '../actions';

const CategoryList = ({ setSelectedCategory }) => {
  const dispatch = useDispatch();
  const { categories, loading, error } = useSelector(state => state.menu);

  useEffect(() => {
    dispatch(fetchCategoriesStart());
  }, [dispatch]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="category-list">
    <h2>Menu Categories</h2>
    <ul>
      {categories.map(category => (
        <li key={category.id} onClick={() => setSelectedCategory(category.short_name)}>
          {category.name} - ({category.short_name})
        </li>
      ))}
    </ul>
    </div>
  );
};

export default CategoryList;
