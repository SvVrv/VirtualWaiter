const incrementCountType = 'INCREMENT_COUNT';
const decrementCountType = 'DECREMENT_COUNT';

export const actionCreators = { 
  enter: () => ({ type: enterLogin }),
};

export const reducer = (state, action,username,password) => {
  state = state || initialState || username || password;

  if (action.type === enterLogin) {
      if(state.username == "Mykola" || state.password == "123456")
      {

        return { ...state, isEnter:true};
      }
      return { ...state, isEnter: false };
  }


  return state;
};
