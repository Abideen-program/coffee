import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";

type ChildrenProp = {
  children: ReactNode;
};

type InitialState = {
  latLong: string;
  store: store[];
};

type initialContextValueProp = {
  state: InitialState;
  setState: Dispatch<SetStateAction<InitialState>>;
};

const initialContextValue: initialContextValueProp = {
  state: { latLong: "", store: [] },
  setState: () => {},
};

export const StoreContext = createContext(initialContextValue);

export const StoreProvider = ({ children }: ChildrenProp) => {
  const [state, setState] = useState(initialContextValue.state);

  const value = { state, setState };

  return (
    <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
  );
};
