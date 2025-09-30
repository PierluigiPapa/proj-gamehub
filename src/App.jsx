import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Login } from "./components/Login";
import { Register } from "./components/Register";
import { HomePage } from "./pages/HomePage";
import { PasswordDimenticata } from "./components/PasswordDimenticata";
import { ProdottiPage } from "./pages/ProdottiPage";
import { ProfilePage } from "./pages/ProfilePage";
import { OrdiniPage } from "./pages/OrdiniPage";
import { PreventiviPage } from "./pages/PreventiviPage";
import { StatistichePage } from "./pages/StatistichePage";
import { DocumentiPage } from "./pages/DocumentiPage";
import { SupportoPage } from "./pages/SupportoPage";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { DashboardLayout } from "./pages/DashboardLayout";
import { DashboardPage } from "./pages/DashboardPage";

function AppLayout({ children }) {
  const location = useLocation();
  const isDashboard = location.pathname.startsWith("/dashboard");

  return (
    <>
      {!isDashboard && <Header />}
      {children}
      {!isDashboard && <Footer />}
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/prodotti" element={<ProdottiPage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/password-dimenticata" element={<PasswordDimenticata />} />

          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route index element={<DashboardPage />} /> 
            <Route path="profilo" element={<ProfilePage />} />
            <Route path="ordini" element={<OrdiniPage />} />
            <Route path="preventivi" element={<PreventiviPage />} />
            <Route path="statistiche" element={<StatistichePage />} />
            <Route path="documenti" element={<DocumentiPage />} />
            <Route path="supporto" element={<SupportoPage />} />
          </Route>
        </Routes>
      </AppLayout>
    </BrowserRouter>
  );
}

export default App;