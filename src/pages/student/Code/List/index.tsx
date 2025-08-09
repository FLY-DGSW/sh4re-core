import { useNavigate } from "react-router-dom";
import { Plus } from "lucide-react";
import * as S from "./style";
import { useCodes } from "@/hooks/code/useCodes";
import { useCodeFilters } from "@/hooks/code/useCodeFilters";
import CodeBlock from "@/components/ui/CodeBlock";
import SearchInput from "@/components/ui/SearchInput";
import SortDropdown from "@/components/ui/SortDropdown";

const CodePage = () => {
  const navigate = useNavigate();
  const { data: codes = [], isLoading, error } = useCodes();
  
  const {
    filteredCodes,
    filters,
    setSearchTerm,
    setSortOrder,
    setSelectedClass,
    setSelectedAssignment,
    sortOrderOptions,
    classOptions,
    assignmentOptions,
  } = useCodeFilters(codes);

  const handleCodeClick = (codeId: number) => {
    navigate(`/code/${codeId}`);
  };

  const handleCreateCode = () => {
    navigate("/code/create");
  };

  if (isLoading) {
    return (
      <S.Container>
        <S.Header>
          <S.PageTitle>코드</S.PageTitle>
        </S.Header>
        <div>로딩 중...</div>
      </S.Container>
    );
  }

  if (error) {
    return (
      <S.Container>
        <S.Header>
          <S.PageTitle>코드</S.PageTitle>
        </S.Header>
        <div>코드를 불러오는데 실패했습니다.</div>
      </S.Container>
    );
  }

  return (
    <S.Container>
      <S.Header>
        <S.PageTitle>코드</S.PageTitle>
        <S.SearchWrapper>
          <SearchInput
            value={filters.searchTerm}
            onChange={setSearchTerm}
            placeholder='코드 검색'
          />
        </S.SearchWrapper>
        <S.DropdownContainer>
          <SortDropdown
            options={sortOrderOptions}
            value={filters.sortOrder}
            onChange={setSortOrder}
          />
          <SortDropdown
            options={classOptions}
            value={filters.selectedClass}
            onChange={setSelectedClass}
          />
          <SortDropdown
            options={assignmentOptions}
            value={filters.selectedAssignment}
            onChange={setSelectedAssignment}
          />
        </S.DropdownContainer>
      </S.Header>
      <S.CodeGrid>
        {filteredCodes.length === 0 ? (
          <div>조건에 맞는 코드가 없습니다.</div>
        ) : (
          filteredCodes.map((code) => (
            <S.CodeContainer
              key={code.id}
              onClick={() => handleCodeClick(code.id)}
            >
              <S.CodeBox>
                <CodeBlock
                  code={code.code}
                  language={code.language}
                  noPadding
                />
              </S.CodeBox>
              <S.CodeInfo>
                <S.CodeTitle>{code.title}</S.CodeTitle>
                <S.StudentInfo>{code.student}</S.StudentInfo>
              </S.CodeInfo>
            </S.CodeContainer>
          ))
        )}
      </S.CodeGrid>
      <S.FloatingButton onClick={handleCreateCode}>
        <Plus />
      </S.FloatingButton>
    </S.Container>
  );
};

export default CodePage;
