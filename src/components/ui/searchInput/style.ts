import { typography } from "@/styles/typography";
import styled from "styled-components";
import { IoIosSearch } from "react-icons/io";

export const SearchContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

export const SearchIcon = styled(IoIosSearch)`
  position: absolute;
  left: 0.75rem;
  color: ${({ theme }) => theme.colors.text.secondary};
`;

export const SearchInput = styled.input`
  ${typography.body1}
  flex: 1;
  padding: 0.5rem 1rem 0.5rem 2.25rem;
  border: 1px solid ${({ theme }) => theme.colors.background.light};
  background-color: ${({ theme }) => theme.colors.background.primary};
  color: ${({ theme }) => theme.colors.text.primary};
  border-radius: 4px;
`;
