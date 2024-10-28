const initialState = {
    categories: [],
    items: [],
    loading: false,
    error: null
  };
  
  export default function menuReducer(state = initialState, action) {
    switch (action.type) {
      case 'FETCH_CATEGORIES_START':
        return { ...state, loading: true, error: null };
      case 'FETCH_CATEGORIES_SUCCESS':
        return { ...state, loading: false, categories: action.payload };
      case 'FETCH_CATEGORIES_FAILURE':
        return { ...state, loading: false, error: action.payload };
        
      // Add cases for fetching items
      case 'FETCH_ITEMS_START':
        return { ...state, loading: true, error: null };    // Reset loading and error states
      case 'FETCH_ITEMS_SUCCESS':
        return { ...state, loading: false, items: action.payload };
      case 'FETCH_ITEMS_FAILURE':
        return { ...state, loading: false, error: action.payload };
        
      default:
        return state;
    }
  }
  
  