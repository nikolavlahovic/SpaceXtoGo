import React, {
  createContext,
  useState,
  ReactNode,
  SetStateAction,
  Dispatch,
} from 'react';

interface PropInterface {
  modalTitle: string;
  setModalTitle: Dispatch<SetStateAction<string>>;
}
const PropContext = createContext<PropInterface | undefined>(undefined);

type Properties = {
  children: ReactNode;
};
export const PropProvider = ({children}: Properties) => {
  const [modalTitle, setModalTitle] = useState<string>('Crew Modal');
  return (
    <PropContext.Provider value={{modalTitle, setModalTitle}}>
      {children}
    </PropContext.Provider>
  );
};

export default PropContext;
