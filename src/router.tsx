import { Routes, Route } from "react-router-dom";
import HomePage from "@/pages/HomePage";
import LoginPage from "./pages/auth/login";
import Layout from "@/components/ui/layout/Layout";
import ProtectedRoute from "./components/common/ProtectedRoute";
import AnnouncementPage from "@/pages/student/announcement/index";
import HandoutsPage from "@/pages/student/handouts/index";

const Router = () => {
  return (
    <Routes>
      <Route path='/login' element={<LoginPage />} />
      <Route element={<ProtectedRoute />}>
        <Route element={<Layout />}>
          <Route path='/' element={<HomePage />} />
          <Route path='/announcement' element={<AnnouncementPage />} />
          <Route path='/handouts' element={<HandoutsPage />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default Router;
