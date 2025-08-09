import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/common/Auth/Login";
import Layout from "@/components/common/layout/Layout";
import ProtectedRoute from "@/components/common/ProtectedRoute";
import HandoutsPage from "@/pages/student/Handout/index";
import AssignmentSubmitPage from "@/pages/student/Assignment/Submit";
import HomePage from "@/pages/common/Home/index";
import AnnouncementsDetailPage from "@/pages/student/Announcement/Detail/index";
import CodeCreatePage from "@/pages/student/Code/Create";
import CodeEditPage from "@/pages/student/Code/Edit";
import CodeDetailPage from "@/pages/student/Code/Detail";
import ProfilePage from "@/pages/student/Profile";
import ScrollToTop from "@/util/ScrollToTop";
import AnnouncementsPage from "./pages/student/Announcement/List";
import AssignmentPage from "./pages/student/Assignment/List";
import CodePage from "./pages/student/Code/List";

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
            <Route path='/code/create' element={<CodeCreatePage />} />
            <Route path='/code/:codeId' element={<CodeDetailPage />} />
            <Route path='/code/:codeId/edit' element={<CodeEditPage />} />
            <Route path='/profile' element={<ProfilePage />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
};

export default Router;
