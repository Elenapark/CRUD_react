const LOGIN = 'user/LOGIN';
const LOGOUT = 'user/LOGOUT';

export const Userlogin = (payload) => {
  return {
    type: LOGIN,
    payload,
  };
};

export const Userlogout = () => {
  return {
    type: LOGOUT,
  };
};

const initialState = '';

export default function UserReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      return { ...state, token: action.payload };
    case LOGOUT:
      return { ...state, token: '' };
    default:
      return state;
  }
}
