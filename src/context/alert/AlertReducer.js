const alertReducer = (state, action) => {
  switch (action.type) {
    case "SET_ALERT":
      return action.payload;
    case "UNSET_ALERT":
      return null;
    default:
      return state;
  }
};

export default alertReducer;
