// src/actions/index.js
export const fetchCategoriesStart = () => ({
    type: 'FETCH_CATEGORIES_START'
  });
  
  export const fetchItemsStart = (category) => ({
    type: 'FETCH_ITEMS_START',
    payload: category
  });
  
  // Ensure all these are exported if used
  export const fetchCategoriesSuccess = categories => ({
    type: 'FETCH_CATEGORIES_SUCCESS',
    payload: categories
  });
  
  export const fetchCategoriesFailure = error => ({
    type: 'FETCH_CATEGORIES_FAILURE',
    payload: error
  });
  
  export const fetchItemsSuccess = items => ({
    type: 'FETCH_ITEMS_SUCCESS',
    payload: items
  });
  
  export const fetchItemsFailure = error => ({
    type: 'FETCH_ITEMS_FAILURE',
    payload: error
  });
  