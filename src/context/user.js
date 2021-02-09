import { useContext, createContext } from "react";
import { v4 as uuidv4 } from 'uuid';

export const userContext = createContext(null);

export const UserContextProvider = ({ children }) => {

  const getUserId = () => {
    return (localStorage.getItem('todo_user_id')
            ? localStorage.getItem('todo_user_id')
            : setUserId(uuidv4())
    )
  }
  const setUserId = (id) => {
    localStorage.setItem('todo_user_id', id)
    return localStorage.getItem('todo_user_id');
  }

  return (
    <userContext.Provider value={{ getUserId, setUserId }}>
        {children}
    </userContext.Provider>
  );
};