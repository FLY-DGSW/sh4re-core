import * as S from "./style";
import Sh4reLogo from "@/assets/sh4re-logo.svg?url";
import { useAtom } from "jotai";
import { usernameAtom } from "@/store/usernameAtom";
import { Link, useLocation } from "react-router-dom";
import HomeIcon from "@/assets/sidebar/home.svg";
import AnnouncementIcon from "@/assets/sidebar/announcement.svg";
import CodeIcon from "@/assets/sidebar/code.svg";
import AssignmentIcon from "@/assets/sidebar/assignment.svg";
import HandOutsIcon from "@/assets/sidebar/handouts.svg";
import ProfileIcon from "@/assets/sidebar/profile.svg";

const navItems = [
  { icon: <HomeIcon />, label: "홈", to: "/" },
  { icon: <AnnouncementIcon />, label: "공지사항", to: "/announcement" },
  { icon: <CodeIcon />, label: "코드", to: "/code" },
  { icon: <AssignmentIcon />, label: "과제 목록", to: "/assignment" },
  { icon: <HandOutsIcon />, label: "수업 자료", to: "/handouts" },
  { icon: <ProfileIcon />, label: "프로필", to: "/profile" },
];

const Sidebar = () => {
  const [username] = useAtom(usernameAtom);
  console.log(username);
  const location = useLocation();

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
              $active={location.pathname === item.to}
            >
              <S.NavIcon>{item.icon}</S.NavIcon>
              <span>{item.label}</span>
            </S.NavItem>
          ))}
        </S.Navigation>
        <S.UserInfo>
          <ProfileIcon />
          <span>{username}</span>
        </S.UserInfo>
      </S.BottomSection>
    </S.SidebarContainer>
  );
};

export default Sidebar;
