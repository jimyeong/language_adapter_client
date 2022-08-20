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
};
const SystemReducer = (state = initialState, action) => {
    switch (action.type) {
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

export default SystemReducer;
