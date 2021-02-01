const INITIAL_STATE = {
  blogs: [],
};

export default (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case 'GET_BLOGS':
      return { ...state, blogs: action.payload };
    default:
      return { ...state };
  }
};
