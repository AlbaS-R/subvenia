import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom';
import App, {CasosDeUsoPage, ContactPage, HomePage, MethodologyPage, PricingPage} from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />} path="/">
          <Route element={<HomePage />} index />
          <Route element={<MethodologyPage />} path="metodologia" />
          <Route element={<CasosDeUsoPage />} path="casos-de-uso" />
          <Route element={<ContactPage />} path="contacto" />
          <Route element={<PricingPage />} path="precios" />
          <Route element={<Navigate replace to="/" />} path="*" />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
