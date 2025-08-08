import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Plus } from "lucide-react";
import * as S from "./style";
import { useCodes } from "@/hooks/code/useCodes";
import CodeBlock from "@/components/ui/CodeBlock";
import SearchInput from "@/components/ui/SearchInput";
import SortDropdown from "@/components/ui/SortDropdown";

const CodePage = () => {
  const navigate = useNavigate();
  const { data: codes = [], isLoading, error } = useCodes();
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("latest");
  const [selectedClass, setSelectedClass] = useState("all");
  const [selectedAssignment, setSelectedAssignment] = useState("all");

  const handleCodeClick = (codeId: number) => {
    navigate(`/code/${codeId}`);
  };

  const handleCreateCode = () => {
    navigate("/code/create");
  };

  const sortOrderOptions = [
    { value: "latest", label: "최신순" },
    { value: "likes", label: "좋아요순" },
  ];

  const safeCodesArray = codes || [];

  const uniqueClasses = Array.from(
    new Set(safeCodesArray.map((code) => code.className).filter(Boolean))
  );
  const classOptions = [
    { value: "all", label: "전체 반" },
    ...uniqueClasses.map((className) => ({
      value: className,
      label: className,
    })),
  ];

  const assignmentOptions = [
    { value: "all", label: "전체 과제" },
    ...Array.from(new Set(safeCodesArray.map((code) => code.assignment)))
      .filter(Boolean)
      .map((assignment) => ({
        value: assignment as string,
        label: assignment as string,
      })),
  ];

  const filteredCodes = safeCodesArray
    .filter((code) => {
      const lowerCaseSearchTerm = searchTerm.toLowerCase();
      return (
        code.title.toLowerCase().includes(lowerCaseSearchTerm) ||
        code.code.toLowerCase().includes(lowerCaseSearchTerm) ||
        (code.description &&
          code.description.toLowerCase().includes(lowerCaseSearchTerm)) ||
        code.student.toLowerCase().includes(lowerCaseSearchTerm)
      );
    })
    .filter(
      (code) => selectedClass === "all" || code.className === selectedClass
    )
    .filter(
      (code) =>
        selectedAssignment === "all" || code.assignment === selectedAssignment
    )
    .sort((a, b) => {
      if (sortOrder === "latest") {
        return (
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
      } else {
        return (b.likeCount || 0) - (a.likeCount || 0);
      }
    });

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
            value={searchTerm}
            onChange={setSearchTerm}
            placeholder='코드 검색'
          />
        </S.SearchWrapper>
        <S.DropdownContainer>
          <SortDropdown
            options={sortOrderOptions}
            value={sortOrder}
            onChange={setSortOrder}
          />
          <SortDropdown
            options={classOptions}
            value={selectedClass}
            onChange={setSelectedClass}
          />
          <SortDropdown
            options={assignmentOptions}
            value={selectedAssignment}
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
