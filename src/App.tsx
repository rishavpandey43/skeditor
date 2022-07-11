import { useState } from "react";
import { SkEditor } from "@skuad/skeditor";

import { _templateData, _globalPlaceholders } from "./constants";

type EditorType = {
  getData?: () => void;
};

const App = () => {
  const [templateData] = useState(_templateData);
  const [editorInstance, setEditorInstance] = useState<EditorType>({});

  const _getData = () => {
    if (editorInstance.getData) {
      console.log(editorInstance.getData());
      alert(editorInstance.getData());
    }
  };

  return (
    <div style={{ height: "100vh" }}>
      <button
        style={{
          margin: "20px",
          padding: "10px 15px",
          backgroundColor: "#184aaa",
          color: "#fff",
          cursor: "pointer",
        }}
        onClick={_getData}
      >
        Preview Data in alert
      </button>
      <div></div>
      <SkEditor
        templateData={templateData}
        globalPlaceholders={_globalPlaceholders}
        setEditorInstance={(instance: any) => setEditorInstance(instance)}
      />
    </div>
  );
};

export default App;
