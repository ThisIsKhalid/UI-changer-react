import { createContext, useContext } from "react";

export type TemplateType = "template1" | "template2"; // Corrected spelling

interface TemplateContextProps {
  templateType: TemplateType;
  setTemplateType: (type: TemplateType) => void;
}

const TemplateContext = createContext<TemplateContextProps | undefined>(
  undefined
);

export const useTemplate = () => {
  const context = useContext(TemplateContext);
  if (!context) {
    throw new Error("useTemplate must be used within a TemplateProvider");
  }
  return context;
};

export { TemplateContext };
