import { PipelineToolbar } from './toolbar';
import { PipelineUI } from './ui';

function App() {
  return (
    <div className="flex flex-col h-screen font-sans">
      <PipelineToolbar />
      <div className="relative flex-1 min-h-0">
        <PipelineUI />
      </div>
    </div>
  );
}

export default App;
