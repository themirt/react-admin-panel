import { sessionConstants as SC } from "../_constants";

const initialState = {
  status: SC.SESSION_INIT,
  data: {}
};

export function session(state = initialState, action) {
  switch (action.type) {
    case SC.LOGIN_SUCCESS:
      return {
        status: SC.AUTHENTICATED,
        data: action.payload
      };
    case SC.LOGIN_FAIL:
      return {
        ...state,
        status: SC.LOGIN_FAIL
      };

    case SC.LOGOUT_REQUEST:
      return {
        
        status: SC.LOGGED_OUT,
        data : {}
      };
    default:
      return state;
  }
}