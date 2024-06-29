import { useTemplate } from "../../context/TemplateContext";

const Home = () => {
  const { setTemplateType } = useTemplate();

  const handleTemplateChange = (template: "template1" | "template2") => {
    // console.log(template);
    setTemplateType(template);
  };

  return (
    <div>
      <h1>home</h1>
      <div className="flex items-center gap-1">
        <button
          className="bg-green-500 px-2 py-1 rounded"
          onClick={() => handleTemplateChange("template1")}
        >
          Template 1
        </button>
        <button
          className="bg-orange-500 px-2 py-1 rounded"
          onClick={() => handleTemplateChange("template2")}
        >
          Template 2
        </button>
      </div>
    </div>
  );
};

export default Home;
