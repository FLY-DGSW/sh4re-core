import styled from "styled-components";
import { Link } from "react-router-dom";

export const SidebarContainer = styled.div`
  width: 18rem;
  height: 100vh;
  padding: 1.25rem;
  background-color: ${({ theme }) => theme.colors.background.primary};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 2.75rem;
`;

export const Logo = styled.img`
  width: 6.25rem;
  height: 2.5rem;
`;

export const BottomSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

export const Navigation = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const NavItem = styled(Link)<{ $active?: boolean }>`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.75rem 1rem;
  border-radius: 0.5rem;
  color: ${({ theme }) => theme.colors.text.primary};
  background: ${({ $active, theme }) =>
    $active ? theme.colors.background.secondary : "none"};
  font-size: 1.1rem;
  cursor: pointer;
  text-decoration: none;
  &:hover {
    background: ${({ theme }) => theme.colors.background.secondary};
  }
`;

export const NavIcon = styled.span`
  font-size: 1.5rem;
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 1.25rem;
  color: ${({ theme }) => theme.colors.text.primary};
`;
