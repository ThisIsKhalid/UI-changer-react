import { RouterProvider } from "react-router-dom";
import { TemplateProvider } from "./context/TemplateProvider";
import router from "./routes/Router";

function App() {
  return (
    <>
      <TemplateProvider>
        <RouterProvider router={router} />
      </TemplateProvider>
    </>
  );
}

export default App;
