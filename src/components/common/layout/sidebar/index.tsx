import * as S from "./style";
import Sh4reLogo from "@/assets/sh4re-logo.svg?url";
import { Link, useLocation, useNavigate } from "react-router-dom";
import HomeIcon from "@/assets/sidebar/home.svg";
import AnnouncementsIcon from "@/assets/sidebar/announcements.svg";
import CodeIcon from "@/assets/sidebar/code.svg";
import AssignmentIcon from "@/assets/sidebar/assignment.svg";
import HandOutsIcon from "@/assets/sidebar/handouts.svg";
import ProfileIcon from "@/assets/sidebar/profile.svg";
import SunIcon from "@/assets/sidebar/sun.svg";
import MoonIcon from "@/assets/sidebar/moon.svg";
import LogoutIcon from "@/assets/sidebar/logout.svg";
import { useUser } from "@/hooks/auth/login/useUser";
import { useTheme } from "@/styles/theme/themeContext";
import Modal from "@/components/ui/modal";
import { useState } from "react";
import sh4reCustomAxios from "@/api/sh4reCustomAxios";
import token from "@/libs/token/token";

const navItems = [
  { icon: <HomeIcon />, label: "홈", to: "/" },
  { icon: <AnnouncementsIcon />, label: "공지사항", to: "/announcements" },
  { icon: <CodeIcon />, label: "코드", to: "/code" },
  { icon: <AssignmentIcon />, label: "과제 목록", to: "/assignments" },
  { icon: <HandOutsIcon />, label: "수업 자료", to: "/handouts" },
  { icon: <ProfileIcon />, label: "프로필", to: "/profile" },
];

const Sidebar = () => {
  const { data: user } = useUser();
  const location = useLocation();
  const navigate = useNavigate();
  const { theme, setTheme } = useTheme();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleUserInfoClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleToggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const handleLogout = async () => {
    try {
      await sh4reCustomAxios.post("/api/auth/logout");
      token.removeToken();
      navigate("/login");
    } catch (error) {
      console.error("로그아웃에 실패했습니다.:", error);
    }
  };

  return (
    <S.SidebarContainer>
      <S.Logo src={Sh4reLogo} alt='Sh4re Logo' />
      <S.BottomSection>
        <S.Navigation>
          {navItems.map((item) => (
            <S.NavItem
              key={item.label}
              as={Link}
              to={item.to}
              $active={
                item.to === "/"
                  ? location.pathname === "/"
                  : location.pathname.startsWith(item.to)
              }
            >
              <S.NavIcon>{item.icon}</S.NavIcon>
              <span>{item.label}</span>
            </S.NavItem>
          ))}
        </S.Navigation>
        <S.UserInfo onClick={handleUserInfoClick}>
          <ProfileIcon />
          <span>{user?.name}</span>
        </S.UserInfo>
      </S.BottomSection>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <S.ModalButton onClick={handleToggleTheme}>
          {theme === "light" ? <MoonIcon /> : <SunIcon />}
          <span>{theme === "light" ? "다크 모드" : "라이트 모드"}</span>
        </S.ModalButton>
        <S.ModalButton onClick={handleLogout}>
          <LogoutIcon />
          <span>로그아웃</span>
        </S.ModalButton>
      </Modal>
    </S.SidebarContainer>
  );
};

export default Sidebar;
