import { BrowserRouter } from 'react-router-dom'
import { Toaster } from "react-hot-toast";
import AppRoutes from './routes/AppRoutes';
import { useAuthStore } from './modules/cms/auth/stores/auth.stores';
import { useEffect } from 'react';
import ScrollToTop from './shared/components/ScrollToTop';

export default function App() {

  const checkAuth = useAuthStore((s) => s.checkAuth);

  useEffect(() => {
    // checkAuth();
  },[])

  return (
    <BrowserRouter>
      <Toaster position="top-center" />
      <ScrollToTop></ScrollToTop>
      <AppRoutes />
    </BrowserRouter>
  )
}
