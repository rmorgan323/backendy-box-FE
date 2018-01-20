const user = (state = {}, action) => {
  switch (action.type) {
    case "USER_TO_STORE":
      return action.user;

    default:
      return state;
  }
};

export default user;