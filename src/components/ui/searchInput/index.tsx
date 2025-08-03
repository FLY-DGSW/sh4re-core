import { IoIosSearch } from "react-icons/io";
import * as S from "./style";

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
    <S.SearchContainer>
      <S.SearchIcon />
      <S.SearchInput
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={handleInputChange}
      />
    </S.SearchContainer>
  );
};

export default SearchInput;
