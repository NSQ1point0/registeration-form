import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userRegisterSuccess } from './../actions/userActions';
import { RootState } from './../reducers';
import { USER_REGISTER_SUCCESS } from './../actions/userActionTypes';

const initialFormState = {
    name: '',
    email: '',
    dob: '',
    city: '',
    pincode: '',
};

const RegistrationForm: React.FC = () => {
    const [userData, setUserData] = useState(initialFormState);
    const { loading, success, error } = useSelector((state: RootState) => state.user);

    const dispatch = useDispatch();

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        const dob = new Date(userData.dob);
        const currentDate = new Date();
        const ageDiff = currentDate.getFullYear() - dob.getFullYear();
        const isOver18 = ageDiff > 18;

        if (isOver18) {
            dispatch({ type: USER_REGISTER_SUCCESS, payload: userData });
            setUserData(initialFormState);
        } else {
            alert('You must be over 18 years old to register.');
        }
    };

    return (
        <form onSubmit={handleSubmit} id='registrationForm'>
            <div>
                <label>Name</label>
                <input
                    type="text"
                    value={userData.name}
                    onChange={(e) => setUserData({ ...userData, name: e.target.value })}
                    required
                />
            </div>
            <div>
                <label>Email</label>
                <input
                    type="email"
                    value={userData.email}
                    onChange={(e) => setUserData({ ...userData, email: e.target.value })}
                    required
                />
            </div>
            <div>
                <label>Date of Birth</label>
                <input
                    type="date"
                    value={userData.dob}
                    onChange={(e) => setUserData({ ...userData, dob: e.target.value })}
                    required
                />
            </div>
            <div>
                <label>City</label>
                <select
                    value={userData.city}
                    onChange={(e) => setUserData({ ...userData, city: e.target.value })}
                    required
                >
                    <option value="">Select City</option>
                    <option value="city1">City 1</option>
                    <option value="city2">City 2</option>
                    {/* Add more city options as needed */}
                </select>
            </div>
            <div>
                <label>Pincode</label>
                <input
                    type="number"
                    value={userData.pincode}
                    onChange={(e) => setUserData({ ...userData, pincode: e.target.value })}
                    required
                    minLength={6}
                    maxLength={6}
                />
            </div>
            <button type="submit" disabled={loading}>
                {loading ? 'Registering...' : 'Register'}
            </button>
            {success && <p className='success'>Registration successful!</p>}
            {error && <p className='error'>{error}</p>}
        </form>
    );
};

export default RegistrationForm;
