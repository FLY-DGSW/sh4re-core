import { useEffect, useState, useCallback } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import * as S from "./style";
import { AssignmentProps } from "@/types/assignment/assignment";
import { IoMdArrowBack } from "react-icons/io";

const dummySubmissions: { [key: number]: any } = {};

const AssignmentSubmitPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const assignment: AssignmentProps | undefined = location.state?.assignment;

  const [submitData, setSubmitData] = useState({
    description: "",
    files: [] as File[],
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (!assignment) {
      console.error("Assignment data is missing, redirecting...");
      navigate("/assignments");
      return;
    }

    const submission = dummySubmissions[assignment.id];
    if (assignment.label === "제출됨" || submission) {
      setIsSubmitted(true);
      if (submission) {
        setSubmitData({
          description: submission.description,
          files: submission.files.map((name: string) => new File([], name)),
        });
      }
    }
  }, [assignment, navigate]);

  const handleInputChange = useCallback((field: string, value: string) => {
    setSubmitData((prev) => ({ ...prev, [field]: value }));
  }, []);

  const handleFileChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const newFiles = Array.from(e.target.files || []);
      setSubmitData((prev) => ({
        ...prev,
        files: [...prev.files, ...newFiles],
      }));
    },
    []
  );

  const handleFileRemove = useCallback((fileToRemove: File) => {
    setSubmitData((prev) => ({
      ...prev,
      files: prev.files.filter((file) => file !== fileToRemove),
    }));
  }, []);

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      if (!assignment) return;

      setIsSubmitting(true);
      await new Promise((resolve) => setTimeout(resolve, 1500));

      dummySubmissions[assignment.id] = {
        description: submitData.description,
        files: submitData.files.map((file) => file.name),
      };

      setIsSubmitting(false);
      setIsSubmitted(true);
    },
    [assignment, submitData]
  );

  if (!assignment) {
    return null;
  }

  return (
    <S.Container>
      <S.PageLayout>
        <S.Header>
          <S.BackButton onClick={() => navigate("/assignments")}>
            <IoMdArrowBack />
            과제 목록
          </S.BackButton>
        </S.Header>
        <S.Content>
          <S.AssignmentInfo>
            <S.AssignmentHeader>
              <S.StatusBadge label={isSubmitted ? "제출됨" : assignment.label}>
                {isSubmitted ? "제출됨" : assignment.label}
              </S.StatusBadge>
              <S.AssignmentTitle>{assignment.title}</S.AssignmentTitle>
              <S.AssignmentMeta>
                {assignment.author} 선생님 | {assignment.date}
              </S.AssignmentMeta>
            </S.AssignmentHeader>
            <S.AssignmentContent>{assignment.content}</S.AssignmentContent>
          </S.AssignmentInfo>
          <S.SubmitSection>
            <S.SectionTitle>
              {isSubmitted ? "제출된 과제" : "과제 제출"}
            </S.SectionTitle>
            <S.SubmitForm onSubmit={handleSubmit}>
              <S.FormGroup>
                <S.Label htmlFor='description'>설명</S.Label>
                <S.Textarea
                  id='description'
                  placeholder='과제에 대한 설명을 입력하세요.'
                  value={submitData.description}
                  onChange={(e) =>
                    handleInputChange("description", e.target.value)
                  }
                  disabled={isSubmitted}
                />
              </S.FormGroup>

              <S.FormGroup>
                <S.Label>파일 첨부</S.Label>
                <S.FileUploadButton
                  htmlFor='file-upload'
                  disabled={isSubmitted}
                >
                  파일 선택
                </S.FileUploadButton>
                <S.FileInput
                  id='file-upload'
                  type='file'
                  multiple
                  onChange={handleFileChange}
                  disabled={isSubmitted}
                />
                {submitData.files.length > 0 && (
                  <S.FileList>
                    {submitData.files.map((file, index) => (
                      <S.FileItem key={index}>
                        <span>{file.name}</span>
                        <S.FileRemoveButton
                          type='button'
                          onClick={() => handleFileRemove(file)}
                          disabled={isSubmitted}
                        >
                          &times;
                        </S.FileRemoveButton>
                      </S.FileItem>
                    ))}
                  </S.FileList>
                )}
              </S.FormGroup>

              <S.SubmitButtonGroup>
                <S.SubmitButton
                  type='submit'
                  disabled={isSubmitting || isSubmitted}
                >
                  {isSubmitting
                    ? "제출 중..."
                    : isSubmitted
                    ? "제출됨"
                    : "제출하기"}
                </S.SubmitButton>
              </S.SubmitButtonGroup>
            </S.SubmitForm>
          </S.SubmitSection>
        </S.Content>
      </S.PageLayout>
    </S.Container>
  );
};

export default AssignmentSubmitPage;
