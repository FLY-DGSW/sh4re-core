import { Routes, Route } from "react-router-dom";
import HomePage from "@/pages/HomePage";
import LoginPage from "./pages/auth/login";
import Layout from "@/components/common/layout/Layout";
import ProtectedRoute from "@/components/common/ProtectedRoute";
import AnnouncementPage from "@/pages/student/announcement/index";
import HandoutsPage from "@/pages/student/handouts/index";
import AssignmentPage from "./pages/student/assignment";
import AssignmentSubmitPage from "./pages/student/assignmentSubmit";

const Router = () => {
  return (
    <Routes>
      <Route path='/login' element={<LoginPage />} />
      <Route element={<ProtectedRoute />}>
        <Route element={<Layout />}>
          <Route path='/' element={<HomePage />} />
          <Route path='/announcements' element={<AnnouncementPage />} />
          <Route path='/assignments' element={<AssignmentPage />} />
          <Route path='/assignments/:id' element={<AssignmentSubmitPage />} />
          <Route path='/handouts' element={<HandoutsPage />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default Router;
