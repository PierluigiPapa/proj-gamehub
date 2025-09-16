import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Login } from "./components/Login";
import { Register } from "./components/Register";
import { HomePage } from "./pages/HomePage";
import { PasswordDimenticata } from "./components/PasswordDimenticata";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/password-dimenticata" element={<PasswordDimenticata />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
