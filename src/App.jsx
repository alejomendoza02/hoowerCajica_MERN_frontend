import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingLayout from "./layouts/LandingLayout.jsx";
import LandingPage from "./pages/LandingPage.jsx";
import Biografia from "./pages/Biografia.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import AdminLayout from "./layouts/AdminLayout.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import { AuthProvider } from "./context/AuthProvider";
import HomeAdmin from "./pages/HomeAdmin.jsx";
import PostAdmin from "./pages/PostAdmin.jsx";
import EditarPost from "./pages/EditarPost.jsx";
import Noticia from "./pages/Noticia.jsx";
import Noticias from "./pages/Noticias.jsx";
import NotFound from "./layouts/NotFound.jsx"

function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <AuthProvider>
          <Routes>
            {/* Public Area */}
            <Route path='*' element={<NotFound />} />
            <Route>
              <Route path="/" element={<LandingLayout />}>
                <Route index element={<LandingPage />} />
                <Route path="biografia" element={<Biografia />} />
                <Route path="noticias" element={<Noticias />} />
                <Route path="post/:id" element={<Noticia />} />

              </Route>
            </Route>

            {/* Admin Area */}

            <Route>
              <Route path="/admin" element={<AdminLayout />}>
                <Route index element={<LoginPage />} />
                <Route path="home" element={<HomeAdmin />} />
                <Route path="post" element={<PostAdmin />} />
                <Route path="post/:id" element={<EditarPost />}/>
              </Route>
            </Route>
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
