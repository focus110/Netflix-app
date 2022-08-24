import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { AuthContextProvider } from "./context/AuthContext";
import { Main } from "./pages/index";

// bhospajkxqoxqyudpv@nthrl.com
// 7f0c1a3363b89fde763cc4e6f7cd7e47

function App() {
  return (
    <AuthContextProvider>
      <div className="">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Main />} />
          </Routes>
        </BrowserRouter>
      </div>
    </AuthContextProvider>
  );
}

export default App;
