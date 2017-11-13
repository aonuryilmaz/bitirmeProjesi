import update from 'react-addons-update';
import constants from "./actionConstants";

/* Const */
const {
    USER_LOGIN
     } = constants;

/* ACTIONS */
export function userLogin(username) {
    return (dispatch) => {
        dispatch({
            type: USER_LOGIN,
            payload: username
        })
    }
}

/* HANDLERS */
function handleUserLogin(state, action) {
    return update(state, {
        user: {
            'name': {
                $set: action.payload
            }
        }
    })

}

const ACTION_HANDLERS = {
    USER_LOGIN: handleUserLogin
};
const initialState = {user:{}};

export function HomeReducer(state = initialState, action) {
    const handler = ACTION_HANDLERS[action.type];

    return handler ? handler(state, action) : state;
}