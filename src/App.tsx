import { useState } from 'react';
import { SkEditor } from '@skuad/skeditor';

import { _templateData, _globalPlaceholders } from './constants';

const App = () => {
  const [templateData, setTemplateData] = useState(_templateData);

  return (
    <SkEditor
      templateData={templateData}
      globalPlaceholders={_globalPlaceholders}
      onChange={(value: any) => setTemplateData(value)}
    />
  );
};

export default App;
