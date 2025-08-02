import * as S from "./style";

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
    <S.SortSelect value={value} onChange={handleSelectChange}>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </S.SortSelect>
  );
};

export default SortDropdown;
