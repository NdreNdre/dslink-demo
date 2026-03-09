import { Routes, Route, Navigate } from 'react-router-dom'
import ProtectedRoute from './ProtectedRoutes';
// CMS
import LoginPage from "../pages/cms/LoginPage";

// Landing
import LayoutLanding from '../shared/components/landing/LayoutLanding';
import HomePage from '../pages/landing/home/HomePage';
import ListPackage from '../pages/landing/package/ListPackage';
import DetailPackage from '../pages/landing/package/DetailPackage';
import AboutPage from '../pages/landing/about/AboutPage';

const AppRoutes = () => {
    return (
        <Routes>
            {/* CMS */}
            <Route path="/login" element={<LoginPage />} />

            {/* Landing */}

            <Route path="/" element={<LayoutLanding />}> 
                <Route path="/" element={<HomePage />} />
                <Route path="/package" element={<ListPackage />} />
                <Route path="/package-detail" element={<DetailPackage />} />
                <Route path="/about-us" element={<AboutPage />} />
            </Route>
            
            {/* Not Found */}
            <Route path="*" element={<Navigate to="/404" replace />} />
        </Routes>
    )
}

export default AppRoutes;