import { SHOW_ALERT, HIDE_ALERT } from '../types';

const handlers = {
  [SHOW_ALERT]: (state1, action) => action.payload,
  [HIDE_ALERT]: () => null,
  DEFAULT: (state) => state,
};

let handler;

export const AlertReducer = (state, action) => {
  handler = handlers[action.type] || handler.DEFAULT;
  return handler(state, action);
};
