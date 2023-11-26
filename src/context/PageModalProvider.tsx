import {
  ReactNode,
  createContext,
  useContext, 
  useState,
} from "react";

export const pageModalContext = createContext<any | null>(null);

export const PageModalContextProvider = ({ children }: any) => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalConent, setModalConent] = useState<ReactNode>(<div></div>);

  function showModal(component: ReactNode) {
    // setIsOpen(false)
    return () => {
      setIsOpen(true);
      setModalConent(component);
    };
  }
  function closeModal() {
    setIsOpen(false);
    setModalConent(<div></div>);
  }

  return (
    <pageModalContext.Provider
      value={{ isOpen, showModal, closeModal, modalConent }}
    >
      {children}
    </pageModalContext.Provider>
  );
};

export function usePageModal() {
  return useContext(pageModalContext);
}
