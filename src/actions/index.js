import { LOGIN, SIGN_UP, USER_DETAILS, PROFILE, FOLLOWING, LOGOUT, INITIALIZED, ERROR, CLEAR } from '../actions/action-constants';
import axios from 'axios';
import globals from '../globals';
const url = `${globals.BASE_URL}/users`;

export function register(props, payload) {
    return (dispatch) => {
        axios.post(`${url}/register`, payload)
            .then((response) => {
                if (response.data.success === false) {
                    return console.log(response, 'not successful');
                }
                const user = response.data;
                dispatch(profileCreated(user));
                props.history.push('/login');
            })
            .catch(error => {
                console.log('catch error register', error);
                throw (error);
            })
    }
}

export function logout() {
    return (dispatch) => {
        dispatch(clearUser());
    }
}

export function login(props, payload) {
    return dispatch => {
        dispatch(initialized());
        axios.post(`${url}/login`, payload)
            .then(response => {
                if (response.success === false) {
                    return console.log(response, 'not successful');
                }
                const res = response.data;
                localStorage.setItem('mcUserToken', res.token);
                dispatch(saveUserAuth(res));
                props.history.push('/');
            })
            .catch(error => {
                console.log('catch error register', error);
                throw (error);
            })
    }
}

export function editProfile(props, payload) {
    const userToken = localStorage.getItem('mcUserToken');
    console.log(props);
    return dispatch => {
        dispatch(initialized());
        axios.put(`${url}/profile`, payload, {
            headers: {
                'Authorization': userToken
            }
        })
            .then(response => {
                if (response.success === false) {
                    dispatch(error());
                    return console.log(response, 'not successful');
                }
                dispatch(clear());
                props.history.push(`/user/${props.match.params.id}`);
            })
            .catch(error => {
                console.log('catch error register', error);
                throw (error);
            })
    }
}

export function userFollows(id) {
    const userToken = localStorage.getItem('mcUserToken');
    return dispatch => {
        dispatch(clear());
        axios.get(`${url}/user/${id}`, {
            headers: {
                'Authorization': userToken
            }
        })
            .then(response => {
                if (response.success === false) {
                    return console.log(response, 'not successful');
                }
                const res = response.data;
                dispatch(following(res.user));
            })
            .catch(error => {
                console.log('catch error register', error);
                throw (error);
            })
    }
}

export function userrr(id) {
    const userToken = localStorage.getItem('mcUserToken');
    return dispatch => {
        axios.get(`${url}/user/${id}`, {
            headers: {
                'Authorization': userToken
            }
        })
            .then(response => {
                if (response.success === false) {
                    return console.log(response, 'not successful');
                }
                const res = response.data.user;
                if (res.following && res.following.length > 0) {
                    res.following.forEach(f => {
                        userFollows(f);
                    })
                }
                dispatch(profile(res));
            })
            .catch(error => {
                console.log('catch error register', error);
                throw (error);
            })
    }
}

export function profileDetails() {
    const userToken = localStorage.getItem('mcUserToken');
    return dispatch => {
        axios.get(`${url}/profile`, {
            headers: {
                'Authorization': userToken
            }
        })
            .then(response => {
                if (response.success === false) {
                    return console.log(response, 'not successful');
                }
                const res = response.data;
                dispatch(user(res.user));
            })
            .catch(error => {
                console.log('catch error register', error);
                throw (error);
            })
    }
}

function saveUserAuth(data) {
    return {
        type: LOGIN,
        payload: data
    };
}

function following(payload) {
    return {
        type: FOLLOWING,
        payload
    }
}

function profile(payload) {
    return {
        type: PROFILE,
        payload
    }
}
function profileCreated(data) {
    return {
        type: SIGN_UP,
        payload: data
    }
}

function user(data) {
    return {
        type: USER_DETAILS,
        payload: data
    };
}

function clearUser() {
    return {
        type: LOGOUT,
        payload: ''
    }
}
function clear() {
    return {
        type: CLEAR,
        payload: ''
    }
}

function initialized() {
    return {
        type: INITIALIZED,
        payload: ''
    }
}

function error() {
    return {
        type: ERROR,
        payload: ''
    }
}