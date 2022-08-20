import helper, { axiosApi } from '../../helper';
import { routes } from '../routes';

const { post } = axiosApi;

/* 

requestBody : {
    "mid": "202109150006",
    "calType": "MiNE" | "ALL",
    "calCurrent": "2022-12"
}
*/
const getEvents = async (requestBody) => {
    const URL = `/updang/api/calendar/lookup`;
    try {
        const a = await post(URL, requestBody);
        return a;
    } catch (err) {
        return { data: null }; // error message;
    }
};
const detailSaveApi = (
    requestUrl,
    requestBody,
    pathFrom,
    successCallback,
    errorCallback
) => {
    const currentPath = pathFrom;
    const successMessage = '저장되었습니다.';
    const failMessage = '실패하였습니다.';
    const nextRouteUrl = `${routes.home}`;
    const url = requestUrl;
    post(url, requestBody).then(successCallback).catch(errorCallback);
};

export { getEvents, detailSaveApi };
