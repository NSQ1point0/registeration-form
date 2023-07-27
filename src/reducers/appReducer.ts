import {
    USER_REGISTER_REQUEST,
    USER_REGISTER_SUCCESS,
    USER_REGISTER_FAILURE,
} from '../actions/userActionTypes';

interface User {
    name: string;
    email: string;
    dob: string;
    city: string;
    pincode: string;
}

interface UserState {
    loading: boolean;
    success: boolean;
    error: any;
    users: User[];
}

const initialState: UserState = {
    loading: false,
    success: false,
    error: null,
    users: [],
};

const userReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case USER_REGISTER_REQUEST:
            // Handle request action
            return { ...state, loading: true, success: false, error: null };
        case USER_REGISTER_SUCCESS:
            // Handle success action
            return {
                ...state,
                loading: false,
                success: true,
                users: [...state.users, action.payload],
            };
        case USER_REGISTER_FAILURE:
            // Handle failure action
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
};

export default userReducer;
