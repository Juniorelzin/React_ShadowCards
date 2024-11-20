// index.js
import { createRoot } from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import router from './router/routes.jsx';  // Certifique-se de que o caminho esteja correto
import { GlobalContextProvider } from './contexts/GlobalContext.jsx';

createRoot(document.getElementById('root')).render(
  <GlobalContextProvider>
    <RouterProvider router={router} />
  </GlobalContextProvider>
);

