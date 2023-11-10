import React from "react";

export const AppContext = React.createContext();

export const AppContextProvider = ({ children }) => {
  const [users, setUsers] = React.useState([]);
  const [modal, setModal] = React.useState({
    open: false,
    message: "",
  });
  return (
    <AppContext.Provider value={{ users, setUsers, modal, setModal }}>
      {children}
    </AppContext.Provider>
  );
};
