import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Editor from "@monaco-editor/react";
import * as S from "./style";
import BackButton from "@/components/ui/BackButton";
import {
  useCreateCode,
  type CreateCodeRequest,
} from "@/hooks/code/useCreateCode";
import { useUser } from "@/hooks/auth/login/useUser";
import { chapters } from "@/constants/assignmentData";
import type { CodeType } from "@/types/code/code";

const CodeCreatePage = () => {
  const navigate = useNavigate();
  const createCodeMutation = useCreateCode();
  const { data: user } = useUser();

  const [code, setCode] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [language, setLanguage] = useState<CodeType["language"]>("python");
  const [assignment, setAssignment] = useState("");

  const allAssignments = chapters.flatMap((chapter) =>
    chapter.assignments.map((assignment) => ({
      id: assignment.id,
      title: assignment.title,
      chapterTitle: chapter.title,
    }))
  );

  const getMonacoLanguage = (lang: CodeType["language"]) => {
    switch (lang) {
      case "javascript":
        return "javascript";
      case "python":
        return "python";
      case "sql":
        return "sql";
      default:
        return "plaintext";
    }
  };

  const handleEditorChange = (value: string | undefined) => {
    setCode(value || "");
  };

  const handleGoBack = () => {
    navigate("/code");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!title.trim() || !code.trim() || !user) {
      return;
    }

    const className = `${user.grade}-${user.classNumber}`;

    const createData: CreateCodeRequest = {
      title: title.trim(),
      code: code.trim(),
      language,
      description: description.trim() || undefined,
      assignment: assignment.trim() || undefined,
      className: className,
      student: user.name,
      schoolYear: user.admissionYear,
    };

    try {
      const result = await createCodeMutation.mutateAsync(createData);
      navigate(`/code/${result.data.codeId}`);
    } catch (error) {
      console.error("Failed to create code:", error);
    }
  };

  return (
    <S.Container>
      <S.Header>
        <BackButton onClick={handleGoBack}>코드 목록</BackButton>
      </S.Header>
      <S.MainContent>
        <S.EditorSection>
          <S.EditorContainer>
            <Editor
              height='100%'
              language={getMonacoLanguage(language)}
              value={code}
              onChange={handleEditorChange}
              theme='vs-dark'
              loading={
                <S.LoadingContainer>에디터 로딩 중...</S.LoadingContainer>
              }
              options={{
                minimap: { enabled: false },
                fontSize: 14,
                lineNumbers: "on",
                roundedSelection: false,
                scrollBeyondLastLine: false,
                automaticLayout: true,
                wordWrap: "on",
                tabSize: 2,
                insertSpaces: true,
                formatOnPaste: true,
                formatOnType: true,
                suggest: {
                  showWords: false,
                },
                bracketPairColorization: {
                  enabled: true,
                },
                autoIndent: "full",
                contextmenu: true,
                selectOnLineNumbers: true,
              }}
            />
          </S.EditorContainer>
        </S.EditorSection>
        <S.FormSection>
          <S.SectionTitle>코드 작성</S.SectionTitle>
          <S.Form onSubmit={handleSubmit}>
            <S.FormGroup>
              <S.Label htmlFor='title'>제목 *</S.Label>
              <S.Input
                id='title'
                type='text'
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder='코드 제목을 입력하세요'
                required
              />
            </S.FormGroup>
            <S.FormGroup>
              <S.Label>언어 *</S.Label>
              <S.LanguageTabs>
                <S.LanguageTab
                  type='button'
                  $active={language === "python"}
                  onClick={() => setLanguage("python")}
                >
                  Python
                </S.LanguageTab>
                <S.LanguageTab
                  type='button'
                  $active={language === "javascript"}
                  onClick={() => setLanguage("javascript")}
                >
                  JavaScript
                </S.LanguageTab>
                <S.LanguageTab
                  type='button'
                  $active={language === "sql"}
                  onClick={() => setLanguage("sql")}
                >
                  SQL
                </S.LanguageTab>
              </S.LanguageTabs>
            </S.FormGroup>
            <S.FormGroup>
              <S.Label htmlFor='assignment'>과제</S.Label>
              <S.Select
                id='assignment'
                value={assignment}
                onChange={(e) => setAssignment(e.target.value)}
              >
                <option value=''>과제를 선택하세요 (선택사항)</option>
                {allAssignments.map((assignment) => (
                  <option key={assignment.id} value={assignment.title}>
                    [{assignment.chapterTitle}] {assignment.title}
                  </option>
                ))}
              </S.Select>
            </S.FormGroup>
            <S.FormGroup>
              <S.Label htmlFor='description'>설명</S.Label>
              <S.Textarea
                id='description'
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder='코드에 대한 설명을 입력하세요 (선택사항)'
                rows={4}
              />
            </S.FormGroup>
            <S.ButtonGroup>
              <S.SubmitButton
                type='submit'
                disabled={
                  !title.trim() ||
                  !code.trim() ||
                  !user ||
                  createCodeMutation.isPending
                }
              >
                {createCodeMutation.isPending ? "공유 중..." : "코드 공유하기"}
              </S.SubmitButton>
            </S.ButtonGroup>
          </S.Form>
        </S.FormSection>
      </S.MainContent>
    </S.Container>
  );
};

export default CodeCreatePage;
