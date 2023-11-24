// MyContext.js
import React, { createContext, useReducer } from 'react';

const initialState = {
  venue: {},
  bars: [],
  bathrooms: [],
  items: [],
};

const MyContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case 'CLEAR':
      return initialState;
    case 'LOAD':
      return { ...state, venue: action.payload.data.venue, bars: action.payload.data.bars,
        items: action.payload.data.items, };
    default:
      return state;
  }
};

const MyProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const clear = () => {
    dispatch({ type: 'CLEAR' });
  };

  const load = (data) => {
    dispatch({ type: 'LOAD', payload: data });
  };

  return (
    <MyContext.Provider value={{ state, clear, load }}>
      {children}
    </MyContext.Provider>
  );
};

export { MyContext, MyProvider };


