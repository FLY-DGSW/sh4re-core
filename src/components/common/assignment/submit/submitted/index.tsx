import * as S from "./style";

const SubmittedInfo = () => {
  return (
    <S.SubmittedInfo>
      <S.InfoRow>
        <S.InfoLabel>설명</S.InfoLabel>
        <S.InfoValue>더미 설명입니다.</S.InfoValue>
      </S.InfoRow>
      <S.InfoRow>
        <S.InfoLabel>첨부 파일</S.InfoLabel>
        <S.FileList>
          <S.FileItem>
            <span>dummy_file.pdf</span>
          </S.FileItem>
        </S.FileList>
      </S.InfoRow>
      <S.ResubmitNote>
        과제는 한 번만 제출할 수 있습니다. 수정이 필요한 경우 담당 교사에게
        문의하세요.
      </S.ResubmitNote>
    </S.SubmittedInfo>
  );
};

export default SubmittedInfo;
