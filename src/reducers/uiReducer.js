import { TOGGLE_DARK_MODE } from "../actions";

const initialState = {
  darkMode: false,
};

const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_DARK_MODE:
      return {
        ...state,
        darkMode: !state.darkMode,
      };
    default:
      return state;
  }
};

export default uiReducer;
