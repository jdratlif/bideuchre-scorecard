import { createContext, useReducer } from "react";

import initialState from "./initialState";
import { reducer } from "./reducers";

import { AppActions } from "../types/actions";
import { AppState } from "../types/state";

export const AppContext = createContext<{
  state: AppState;
  dispatch: React.Dispatch<AppActions>;
}>({
  state: initialState,
  dispatch: () => null,
});

export const AppProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(reducer, initialState, () => {
    const data = localStorage.getItem("scorecard");
    return data ? JSON.parse(data) : initialState;
  });

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};
