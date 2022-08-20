const utils = {
    dialogDuration: 2000,
    setDialogForSpecificTimes: (flag, exectCallback) => {
        exectCallback(flag);
        setTimeout(() => {
            exectCallback(!flag);
        }, utils.dialogDuration);
    },
};

export default utils;
