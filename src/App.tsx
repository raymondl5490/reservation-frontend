import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ProviderPage from "./pages/ProviderPage";
import ClientPage from "./pages/ClientPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/providers" element={<ProviderPage />} />
          <Route path="/clients" element={<ClientPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
