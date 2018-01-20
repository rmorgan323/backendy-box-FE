import getUser from '../helpers/fetches/getUser/getUser';

export const loadUser = () => async dispatch => {
  try {
    const user = await getUser();
    dispatch(userToStore(user));
  } catch (error) {
    window.location="https://backendy-box.e1.loginrocket.com/";
  }
};

export const userToStore = (user) => ({
  type: 'USER_TO_STORE',
  user
});