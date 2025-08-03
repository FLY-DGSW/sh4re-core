import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./style";
import { codes } from "@/constants/codeData";
import CodeBlock from "@/components/ui/codeblock";
import SearchInput from "@/components/ui/searchInput";
import SortDropdown from "@/components/ui/sortDropdown";

const CodePage = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("latest");
  const [selectedClass, setSelectedClass] = useState("all");
  const [selectedAssignment, setSelectedAssignment] = useState("all");

  const handleCodeClick = (codeId: number) => {
    navigate(`/code/${codeId}`);
  };

  const sortOrderOptions = [
    { value: "latest", label: "최신순" },
    { value: "likes", label: "좋아요순" },
  ];

  const classOptions = [
    { value: "all", label: "전체 반" },
    { value: "1-1", label: "1-1" },
    { value: "1-2", label: "1-2" },
    { value: "1-3", label: "1-3" },
    { value: "1-4", label: "1-4" },
  ];

  const assignmentOptions = [
    { value: "all", label: "전체 과제" },
    ...Array.from(new Set(codes.map((code) => code.assignment)))
      .filter(Boolean)
      .map((assignment) => ({
        value: assignment as string,
        label: assignment as string,
      })),
  ];

  const filteredCodes = codes
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
    .filter((code) => selectedClass === "all" || code.class === selectedClass)
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
        return b.likes - a.likes;
      }
    });

  return (
    <S.Container>
      <S.Header>
        <S.PageTitle>코드</S.PageTitle>

        <div style={{ flexGrow: 1 }} />
        <S.SearchWrapper>
          <SearchInput value={searchTerm} onChange={setSearchTerm} placeholder="코드 검색" />
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
        {filteredCodes.map((code) => (
          <S.CodeContainer
            key={code.id}
            onClick={() => handleCodeClick(code.id)}
          >
            <S.CodeBox>
              <CodeBlock code={code.code} language={code.language} />
            </S.CodeBox>
            <S.CodeInfo>
              <S.CodeTitle>{code.title}</S.CodeTitle>
              <S.StudentInfo>{code.student}</S.StudentInfo>
            </S.CodeInfo>
          </S.CodeContainer>
        ))}
      </S.CodeGrid>
    </S.Container>
  );
};

export default CodePage;
