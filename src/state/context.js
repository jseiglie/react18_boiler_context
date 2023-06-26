import React, { useState, useEffect } from "react";
import getState from "./state";

export const Context = React.createContext(null);

const injectContext = (PassedComponent) => {
  const StateWrapper = (props) => {
    const [state, setState] = useState(
      getState({
        getStore: () => state.store,
        getActions: () => state.actions,
        setStore: (updatedStore) =>
          setState({
            store: Object.assign(state.store, updatedStore),
            actions: { ...state.actions },
          }),
      })
    );
    useEffect(()=>{
            //first load
    },[]);
    return (
        <Context.Provider value={state}>
            <PassedComponent {...props}/>
        </Context.Provider>
    )
  };
  return StateWrapper
};

export default injectContext