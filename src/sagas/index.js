import { all } from 'redux-saga/effects';
import { watchFetchCategories, watchFetchItems } from './menuSagas';

export default function* rootSaga() {
    yield all([
        watchFetchCategories(),
        watchFetchItems(),
    ]);
}