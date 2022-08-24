import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { AuthContextProvider } from "./context/AuthContext";
import Login from "./pages/Login";
import Main from "./pages/Main";
import Signup from "./pages/Signup";
import Account from "./pages/Account";
import ProtectedRoute from "./component/routing/ProtectedRoute";

// bhospajkxqoxqyudpv@nthrl.com
// 7f0c1a3363b89fde763cc4e6f7cd7e47

function App() {
  return (
    <AuthContextProvider>
      <div className="">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/login" element={<Login />} />
            <Route path="/Signup" element={<Signup />} />
            <Route
              path="/Account"
              element={
                <ProtectedRoute>
                  <Account />
                </ProtectedRoute>
              }
            />
          </Routes>
        </BrowserRouter>
      </div>
    </AuthContextProvider>
  );
}

export default App;
