import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Login } from "./components/Login";
import { Register } from "./components/Register";
import { HomePage } from "./pages/HomePage";
import { PasswordDimenticata } from "./components/PasswordDimenticata";
import { ProdottiPage } from "./pages/ProdottiPage";
import { ProfilePage } from "./pages/ProfilePage";
import { DashboardPage } from "./pages/DashboardPage";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { OrdiniPage } from "./pages/OrdiniPage";
import { PreventiviPage } from "./pages/PreventiviPage";
import { StatistichePage } from "./pages/StatistichePage";
import { DocumentiPage } from "./pages/DocumentiPage";
import { SupportoPage } from "./pages/SupportoPage";

function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}

function Layout() {
  const location = useLocation();
  const hideLayout = location.pathname.startsWith("/dashboard");

  return (
    <>
      {!hideLayout && <Header />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/prodotti" element={<ProdottiPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/password-dimenticata" element={<PasswordDimenticata />} />

        <Route path="/dashboard" element={<DashboardPage />}>
          <Route path="profilo" element={<ProfilePage />} />
          <Route path="ordini" element={<OrdiniPage />} />
          <Route path="preventivi" element={<PreventiviPage />} />
          <Route path="statistiche" element={<StatistichePage />} />
          <Route path="documenti" element={<DocumentiPage />} />
          <Route path="supporto" element={<SupportoPage />} />
        </Route>
      </Routes>
      {!hideLayout && <Footer />}
    </>
  );
}

export default App;
