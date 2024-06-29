import { useState } from "react";
import { TemplateContext, TemplateType } from "./TemplateContext";

export const TemplateProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [templateType, setTemplateType] = useState<TemplateType>("template1");

  return (
    <TemplateContext.Provider value={{ templateType, setTemplateType }}>
      {children}
    </TemplateContext.Provider>
  );
};
