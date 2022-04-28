import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingLayout from "./layouts/LandingLayout.jsx";
import LandingPage from "./pages/LandingPage.jsx";
import Biografia from "./pages/Biografia.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import AdminLayout from "./layouts/AdminLayout.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import { AuthProvider } from "./context/AuthProvider";
import { ReflexionesProvider } from "./context/ReflexionesProvider.jsx";
import HomeAdmin from "./pages/HomeAdmin.jsx";
import PostAdmin from "./pages/PostAdmin.jsx";
import EditarPost from "./pages/EditarPost.jsx";
import Noticia from "./pages/Noticia.jsx";
import Noticias from "./pages/Noticias.jsx";
import NotFound from "./layouts/NotFound.jsx";
import Reflexiones from "./pages/Reflexiones.jsx";
import Renacer from "./pages/Renacer.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <AuthProvider>
          <ReflexionesProvider>
            <Routes>
              {/* Public Area */}
              <Route path="*" element={<NotFound />} />
              <Route>
                <Route path="/" element={<LandingLayout />}>
                  <Route index element={<LandingPage />} />
                  <Route path="biografia" element={<Biografia />} />
                  <Route path="noticias" element={<Noticias />} />
                  <Route path="post/:id" element={<Noticia />} />
                  <Route path="reflexiones" element={<Reflexiones />} />
                  <Route path="renacer" element={<Renacer />} />
                </Route>
              </Route>

              {/* Admin Area */}

              <Route>
                <Route path="/admin" element={<AdminLayout />}>
                  <Route index element={<LoginPage />} />
                  <Route path="home" element={<HomeAdmin />} />
                  <Route path="post" element={<PostAdmin />} />
                  <Route path="post/:id" element={<EditarPost />} />
                </Route>
              </Route>
            </Routes>
          </ReflexionesProvider>
        </AuthProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
