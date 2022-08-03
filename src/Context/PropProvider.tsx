import {
  createContext,
  useState,
  ReactNode,
  SetStateAction,
  Dispatch,
} from 'react';

type UserWithJwt = {};
interface PropInterface {
  loggedInUser: UserWithJwt | null;
  setLoggedInUser: Dispatch<SetStateAction<UserWithJwt | null>>;
}
const PropContext = createContext<PropInterface | undefined>(undefined);

type Properties = {
  children: ReactNode;
};
export const AuthProvider = ({children}: Properties) => {
  const [loggedInUser, setLoggedInUser] = useState<UserWithJwt | null>(null);
  return (
    <PropContext.Provider value={{loggedInUser, setLoggedInUser}}>
      {children}
    </PropContext.Provider>
  );
};

export default PropContext;
