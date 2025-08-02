import Sidebar from "@/components/common/sidebar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <main style={{ flex: 1, paddingLeft: "18rem" }}>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
