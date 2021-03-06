import { uiConstants } from "../_constants";

// const initialState = {
//   loading: true,
//   activeLanguage: null,
//   items: [],
//   translations: []
// };

export function ui(state = {}, action) {
  switch (action.type) {
    case uiConstants.FETCH_SIDEBAR_REQUEST:
      return {
        sideBar: {
          loading: true
        }
      };

    case uiConstants.FETCH_SIDEBAR_SUCCESS:
      return {
        sideBar: action.payload
      };

    case uiConstants.FETCH_SIDEBAR_FAILURE:
      return {
        sideBar: {
          error: action.payload
        }
      };

    default:
      return state;
  }
}
