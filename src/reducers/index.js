import { combineReducers } from 'redux';
import SystemReducer from './SystemSlice';
import ExpressionsReducer from './ExpressionSlice';

const reducer = combineReducers({
    system: SystemReducer,
    expressisons: ExpressionsReducer,
});

export default reducer;
