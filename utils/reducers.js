import { combineReducers } from 'redux';
const reducers = {};
const requireReducer = require.context('store', true, /\.slice\.js$/);
requireReducer.keys().forEach((fileName) => {
  if (fileName.includes('store')) return;
  const reducerName = fileName.replace(/(\.\/|\.slice.js)/g, '');
  const reducerModule = requireReducer(fileName);
  const reducer = reducerModule.default;
  reducers[reducerName] = reducer;
});
const rootReducer = combineReducers(reducers);
export default rootReducer;
