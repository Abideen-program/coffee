import { createContext } from "react";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const StoreContext = createContext({
  latLong: "",
  store: [],
});

export const StoreProvider = ({ children }: Props) => {
  const initialState = {
    latLong: "",
    store: [],
  };

  return (
    <StoreContext.Provider
      value={{ latLong: initialState.latLong, store: initialState.store }}
    >
      {children}
    </StoreContext.Provider>
  );
};
