import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter,RouterProvider } from "react-router";

import App from './App.jsx'
import { router } from './Routes/Router.jsx';
import AuthProvaider from './Provider/AuthProvider.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvaider>  <RouterProvider router={router} />,</AuthProvaider>

  </StrictMode>,
)
