import { createContext, useContext, useEffect, useState } from "react"; 

export const pageModalContext = createContext<any | null>(null);

export const PageModalContextProvider = ({ children }: any) => {
  const [isOpen, setIsOpen] = useState(false); 
  
  function toggleModalState(){
    return setIsOpen(!isOpen)
  }

  return (
    <pageModalContext.Provider value={{ toggleModalState, isOpen,  }}>
      {children}
    </pageModalContext.Provider>
  );
};

export function usePageModal() {
  return useContext(pageModalContext);
}
