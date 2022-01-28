import MyLayout from "./layout/index";
import { BrowserRouter } from "react-router-dom";
function App() {
  return (
    <BrowserRouter className="App">
      <MyLayout></MyLayout>
    </BrowserRouter>
  );
}

export default App;
