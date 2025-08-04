import Sidebar from "./sidebar/index";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <Sidebar />
      <main style={{ flex: 1, paddingLeft: "18rem" }}>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
