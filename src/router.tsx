import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/common/auth/login";
import Layout from "@/components/common/layout/Layout";
import ProtectedRoute from "@/components/common/ProtectedRoute";
import AnnouncementsPage from "@/pages/student/announcements/index";
import HandoutsPage from "@/pages/student/handouts/index";
import AssignmentPage from "@/pages/student/assignment";
import AssignmentSubmitPage from "@/pages/student/assignmentSubmit";
import HomePage from "@/pages/common/home/index";
import AnnouncementsDetailPage from "@/pages/student/announcementDetail/index";
import CodePage from "@/pages/student/code";
import CodeDetailPage from "@/pages/student/codeDetail";
import ScrollToTop from "@/util/ScrollToTop";

const Router = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path='/login' element={<LoginPage />} />
        <Route element={<ProtectedRoute />}>
          <Route element={<Layout />}>
            <Route path='/' element={<HomePage />} />
            <Route path='/announcements' element={<AnnouncementsPage />} />
            <Route
              path='/announcements/:announcementId'
              element={<AnnouncementsDetailPage />}
            />
            <Route path='/assignments' element={<AssignmentPage />} />
            <Route
              path='/assignments/:assignmentId'
              element={<AssignmentSubmitPage />}
            />
            <Route path='/handouts' element={<HandoutsPage />} />
            <Route path='/code' element={<CodePage />} />
            <Route path='/code/:codeId' element={<CodeDetailPage />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
};

export default Router;