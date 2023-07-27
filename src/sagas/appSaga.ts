import { put, takeLatest, call } from 'redux-saga/effects';
import {
    USER_REGISTER_REQUEST,
    USER_REGISTER_SUCCESS,
    USER_REGISTER_FAILURE,
} from './../actions/userActionTypes';

function* handleUserRegistration(action: any) {
    try {
        const response = { success: true };

        if (response.success) {
            yield put({ type: USER_REGISTER_SUCCESS });
        } else {
            yield put({ type: USER_REGISTER_FAILURE, payload: 'Registration failed' });
        }
    } catch (error) {
        yield put({ type: USER_REGISTER_FAILURE, payload: 'Error during registration' });
    }
}

function* userSaga() {
    yield takeLatest(USER_REGISTER_REQUEST, handleUserRegistration);
}

export default userSaga;