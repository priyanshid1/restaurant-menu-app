import { takeLatest, call, put } from 'redux-saga/effects';
import axios from 'axios';

function* fetchCategories() {
  try {
    const response = yield call(axios.get, 'https://stream-restaurant-menu-svc.herokuapp.com/category');
    yield put({ type: 'FETCH_CATEGORIES_SUCCESS', payload: response.data });
  } catch (error) {
    console.error('Fetch categories failed', error);
    yield put({ type: 'FETCH_CATEGORIES_FAILURE', payload: error.toString() });
  }
}
function* fetchItems(action) {
    const url = `https://stream-restaurant-menu-svc.herokuapp.com/item?category=${action.payload}`;
    console.log("Initiating API call for items:", url);  // This should log the full API URL
    try {
        const response = yield call(axios.get, url);
        console.log('Items received:', response.data);  // This should log the response data
        yield put({ type: 'FETCH_ITEMS_SUCCESS', payload: response.data });
    } catch (error) {
        console.error('Failed to fetch items:', error);
        yield put({ type: 'FETCH_ITEMS_FAILURE', payload: error.message });
    }
}

export function* watchFetchCategories() {
  yield takeLatest('FETCH_CATEGORIES_START', fetchCategories);
}

export function* watchFetchItems() {
  console.log("watchFetchItems saga is active");  
  yield takeLatest('FETCH_ITEMS_START', fetchItems);
}
