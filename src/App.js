// src/App.js
import React, { useState } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import CategoryList from './components/CategoryList';
import MenuItemList from './components/MenuItemList';
import './App.css';

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <Provider store={store}>
      <div className="app-container">
        <CategoryList setSelectedCategory={setSelectedCategory} />
        {selectedCategory && <MenuItemList selectedCategory={selectedCategory} />}
      </div>
    </Provider>
  );
}

export default App;
