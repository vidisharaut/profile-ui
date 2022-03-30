import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import ViewPage from "./components/ViewPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ViewPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
