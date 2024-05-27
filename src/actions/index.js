export const SET_SLIDER_VALUE = "SET_SLIDER_VALUE";
export const SET_BILLING = "SET_BILLING";
export const TOGGLE_DARK_MODE = "TOGGLE_DARK_MODE";

export const setSliderValue = (value) => ({
  type: SET_SLIDER_VALUE,
  payload: value,
});

export const setBilling = (value) => ({
  type: SET_BILLING,
  payload: value,
});

export const toggleDarkMode = () => ({
  type: TOGGLE_DARK_MODE,
});
