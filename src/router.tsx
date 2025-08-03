import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/common/auth/login";
import Layout from "@/components/common/layout/Layout";
import ProtectedRoute from "@/components/common/ProtectedRoute";
import AnnouncementPage from "@/pages/student/announcement/index";
import HandoutsPage from "@/pages/student/handouts/index";
import AssignmentPage from "@/pages/student/assignment";
import AssignmentSubmitPage from "@/pages/student/assignmentSubmit";
import HomePage from "@/pages/common/home/index";

const Router = () => {
  return (
    <Routes>
      <Route path='/login' element={<LoginPage />} />
      <Route element={<ProtectedRoute />}>
        <Route element={<Layout />}>
          <Route path='/' element={<HomePage />} />
          <Route path='/announcements' element={<AnnouncementPage />} />
          <Route path='/assignments' element={<AssignmentPage />} />
          <Route
            path='/assignments/:assignmentId'
            element={<AssignmentSubmitPage />}
          />
          <Route path='/handouts' element={<HandoutsPage />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default Router;
