import React from "react";
import styled from "styled-components";
import { typography } from "@/styles/typography";

const SortSelect = styled.select`
  ${typography.body1}
  padding: 0.5rem 1rem;
  border: 1px solid ${({ theme }) => theme.colors.background.light};
  background-color: ${({ theme }) => theme.colors.background.primary};
  color: ${({ theme }) => theme.colors.text.primary};
  border-radius: 4px;
  cursor: pointer;
  min-width: 120px;
  white-space: nowrap;
  
  &:focus {
    outline: 2px solid ${({ theme }) => theme.colors.primary.blue};
    outline-offset: 1px;
  }
`;

interface SortOption {
  value: string;
  label: string;
}

interface SortDropdownProps {
  options: SortOption[];
  onChange: (sortValue: string) => void;
  value: string;
}

const SortDropdown = ({ options, onChange, value }: SortDropdownProps) => {
  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(e.target.value);
  };

  return (
    <SortSelect value={value} onChange={handleSelectChange}>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </SortSelect>
  );
};

export default SortDropdown;