// src/components/MenuItemList.js
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchItemsStart } from '../actions';

const MenuItemList = ({ selectedCategory }) => {
  const dispatch = useDispatch();
  const items = useSelector(state => state.menu.items);
  const loading = useSelector(state => state.menu.loading);
  const error = useSelector(state => state.menu.error);

  useEffect(() => {
    if (selectedCategory) {
      dispatch(fetchItemsStart(selectedCategory));
    }
  }, [dispatch, selectedCategory]);

  if (loading) return <div>Loading items...</div>;
  if (error) return <div>Error loading items: {error}</div>;
  if (items.length === 0) return <div>No items found.</div>;

  return (
    <div className="menu-item-list">
      <h2>Items in Category: ({selectedCategory})</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {items.map(item => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MenuItemList;
