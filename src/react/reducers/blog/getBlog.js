//@ts-check
const INITIAL_STATE = {
  query: window.location.search,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return { ...state };
  }
};
