import * as actionTypes from './actionTypes';

export const setCurrentUser = (user) => ({
  type: actionTypes.setCurrentUser,
  payload: user,
});
