import React from "react";
import styled from "styled-components";
import { typography } from "@/styles/typography";
import { IoIosSearch } from "react-icons/io";

const SearchContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const SearchIcon = styled(IoIosSearch)`
  position: absolute;
  left: 0.75rem;
  color: ${({ theme }) => theme.colors.text.secondary};
`;

const SearchInputStyled = styled.input`
  ${typography.body1}
  flex: 1;
  padding: 0.5rem 1rem 0.5rem 2.25rem;
  border: 1px solid ${({ theme }) => theme.colors.background.light};
  background-color: ${({ theme }) => theme.colors.background.primary};
  color: ${({ theme }) => theme.colors.text.primary};
  border-radius: 4px;
  &:focus {
    outline: 2px solid ${({ theme }) => theme.colors.primary.blue};
  }
  &::placeholder {
    color: ${({ theme }) => theme.colors.placeholder};
  }
`;

interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

const SearchInput = ({
  value,
  onChange,
  placeholder = "검색어를 입력하세요",
}: SearchInputProps) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <SearchContainer>
      <SearchIcon />
      <SearchInputStyled
        type='text'
        placeholder={placeholder}
        value={value}
        onChange={handleInputChange}
      />
    </SearchContainer>
  );
};

export default SearchInput;