import { createContext, useContext } from "react";

interface PopoverContextProps {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export const PopoverContext = createContext<PopoverContextProps>(null!);

export const usePopoverContext = () => {
  const context = useContext(PopoverContext);

  if (!context) {
    throw new Error(
      "This component should be used within a <Popover> component.",
    );
  }

  return context;
};
