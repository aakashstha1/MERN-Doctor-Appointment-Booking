import { createContext, useContext, useEffect, useReducer } from "react";

const initialState = {
  user:
    localStorage.getItem("user") !== undefined
      ? JSON.parse(localStorage.getItem("user"))
      : null,
  role: localStorage.getItem("role") ?? null,
  token: localStorage.getItem("token") ?? null,
};

export const authContext = createContext(initialState);

const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_START":
      return {
        ...state,
      };

    case "LOGIN_SUCCESS":
      // console.log("Payload received in LOGIN_SUCCESS:", action.payload);
      return {
        user: action.payload.user,
        role: action.payload.role,
        token: action.payload.token,
      };

    case "LOGOUT":
      return {
        user: null,
        role: null,
        token: null,
      };
    default:
      return state;
  }
};

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(state.user));
    localStorage.setItem("token", state.token);
    localStorage.setItem("role", state.role);
  }, [state]);

  return (
    <authContext.Provider
      value={{
        ...state,
        dispatch,
      }}
    >
      {children}
    </authContext.Provider>
  );
};
