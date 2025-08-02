import { useState, useEffect } from "react";
import * as S from "./style";

interface SearchInputProps {
  onSearch: (searchTerm: string) => void;
  placeholder?: string;
}

const SearchInput = ({
  onSearch,
  placeholder = "검색어를 입력하세요",
}: SearchInputProps) => {
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const handler = setTimeout(() => {
      onSearch(searchTerm);
    }, 500);

    return () => {
      clearTimeout(handler);
    };
  }, [searchTerm, onSearch]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchClick = () => {
    onSearch(searchTerm);
  };

  return (
    <S.SearchContainer>
      <S.SearchInput
        type="text"
        placeholder={placeholder}
        value={searchTerm}
        onChange={handleInputChange}
      />
      <S.SearchButton onClick={handleSearchClick}>검색</S.SearchButton>
    </S.SearchContainer>
  );
};

export default SearchInput;
