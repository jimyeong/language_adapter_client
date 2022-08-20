import { axiosApi } from '../helper';
const { privatePostAxios } = axiosApi;
export const loadingState = {
    idle: 'IDLE',
    error: 'ERROR',
    loading: 'FAIL',
    success: 'SUCCESS',
    unclear: 'UNCLEAR',
};
const initialState = {
    popUp: false,
    dialog: false,
    messages: [],
    alertDialog: { show: false, message: '' },
    showCalendar: false,
    loading: loadingState.idle,
    user: null,
};
const SystemReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'system/getUser':
            return {
                ...state,
                user: action.payload,
            };
        case 'system/setAlertDialog':
            return {
                ...state,
                alertDialog: {
                    show: action.payload.show,
                    message: action.payload.message,
                },
            };
        case 'system/setDialog':
            return {
                ...state,
                dialog: action.payload,
            };
        case 'system/setPopUp':
            return {
                ...state,
                popUp: action.payload,
            };
        case 'system/setEventPopUp':
            return {
                ...state,
                dialog: action.payload,
            };
        case 'system/showCalendar':
            return {
                ...state,
                showCalendar: action.payload,
            };
        case 'system/loadingState':
            return {
                ...state,
                loading: action.payload.loading,
            };
        default:
            return state;
    }
};

export const createAlertDialogAction = (flag, message) => {
    return {
        type: 'system/setAlertDialog',
        payload: { show: flag, message },
    };
};

export const getUser = async ({ navigate, destination }) => {
    // destination: {from: "", to:" "}
    const url = '/v1/oauth/user';
    const successCallback = () => {
        console.log('getUser Success');
    };
    const errorCallback = () => {
        console.log('getUser Fail');
    };
    const result = await privatePostAxios(
        url,
        {},
        successCallback,
        errorCallback,
        { navigate, destination }
    );
    console.log(['@@@@@@@@'], result);
    return (dispatch, getState) => {
        dispatch({ type: 'system/getUser', payload: result.data });
    };
};

export default SystemReducer;
