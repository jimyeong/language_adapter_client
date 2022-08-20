import { axiosApi } from '../../helper';
const host = 'http://localhost:5000';

const { post, get } = axiosApi;

export const getRegisteredWords = async (
    requestUrl,
    successCallback,
    errorCallback,
    params
) => {
    return await post(requestUrl, params, successCallback, errorCallback);
};

export const addVocaApi = (
    requestUrl,
    requestBody,
    pathFrom,
    successCallback,
    errorCallback
) => {
    return post(requestUrl, requestBody, successCallback, errorCallback);
};

export const getQuizApi = (
    requestUrl,
    params,
    successCallback,
    errorCallback
) => {
    return post(requestUrl, params, successCallback, errorCallback);
};
