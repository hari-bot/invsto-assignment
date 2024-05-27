import { SET_SLIDER_VALUE, SET_BILLING } from "../actions";

const initialState = {
  sliderValue: "50",
  monthlyBilling: true,
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SLIDER_VALUE:
      return {
        ...state,
        sliderValue: action.payload,
      };
    case SET_BILLING:
      return {
        ...state,
        monthlyBilling: action.payload,
      };
    default:
      return state;
  }
};

export default dataReducer;
