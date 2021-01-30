import React, { createContext, useContext, useReducer } from "react";

// prepare data layer useing context
export const StateContext = createContext();

// create the data layers as higher order component
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

export const useStateValue = () => useContext(StateContext);
