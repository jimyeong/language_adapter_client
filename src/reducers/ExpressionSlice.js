import { useDispatch } from 'react-redux';
import helper, { axiosApi } from '../helper';
const { post } = axiosApi;

const initialState = [];

const ExpressionsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'expressions/set_expressions':
            return [...action.payload];
        default:
            return state;
    }
};

// Actions must be plain objects. Use custom middleware for async actions
// function을 사용할 수 없다. 미들웨어 안쓰면
export const setExpressions = async (params) => {
    const result = await post(params.path, { user_id: params.user_id });
    return (dispatch, getState) => {
        dispatch({
            type: 'expressions/set_expressions',
            payload: result.data,
        });
    };
};

export default ExpressionsReducer;
