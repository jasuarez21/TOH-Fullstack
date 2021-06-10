import actionTypes from '../actions/actionTypes';

function reducer(auth = {
  isLoggedIn: true
}, action) {
  switch (action.type) {
    case actionTypes.AUTH_LOGIN:
      return {
        ...auth,
        isLoggedIn: true,
        user: action.user
      };

    case actionTypes.AUTH_LOGOUT:
      return {
        ...auth,
        isLoggedIn: false,
        user: null
      };

    default:
      return auth;
  }
}

export default reducer;
