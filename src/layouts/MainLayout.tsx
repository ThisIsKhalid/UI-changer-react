import { Outlet } from "react-router-dom";
import { useTemplate } from "../context/TemplateContext";

export default function MainLayout() {
  const { templateType } = useTemplate();

  return (
    <>
      <div>
        {templateType === "template1" ? <h1>Header1</h1> : <h2>Header2</h2>}
      </div>
      <Outlet />
      <div>
        {templateType === "template1" ? <h1>Footer1</h1> : <h2>Footer2</h2>}
      </div>
    </>
  );
}
