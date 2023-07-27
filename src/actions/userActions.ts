import {
    USER_REGISTER_REQUEST,
    USER_REGISTER_SUCCESS,
    USER_REGISTER_FAILURE,
} from './../actions/userActionTypes';

export const userRegisterRequest = (userData: any) => {
    return {
        type: USER_REGISTER_REQUEST,
        payload: userData,
    };
};

export const userRegisterSuccess = (userData: any) => {
    return {
        type: USER_REGISTER_SUCCESS,
        payload: userData,
    };
};

export const userRegisterFailure = (error: any) => {
    return {
        type: USER_REGISTER_FAILURE,
        payload: error,
    };
};
