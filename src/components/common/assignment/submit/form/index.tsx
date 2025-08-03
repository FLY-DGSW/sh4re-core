import * as S from "./style";

const SubmitForm = () => {
  return (
    <S.SubmitForm>
      <S.FormGroup>
        <S.Label htmlFor='description'>설명</S.Label>
        <S.Textarea
          id='description'
          placeholder='과제에 대한 설명을 입력하세요.'
          disabled={true}
        />
      </S.FormGroup>

      <S.FormGroup>
        <S.Label>파일 첨부</S.Label>
        <S.FileUploadButton htmlFor='file-upload' disabled={true}>
          파일 선택
        </S.FileUploadButton>
        <S.FileInput id='file-upload' type='file' multiple disabled={true} />
      </S.FormGroup>

      <S.SubmitButtonGroup>
        <S.SubmitButton type='submit' disabled={true}>
          제출하기
        </S.SubmitButton>
      </S.SubmitButtonGroup>
    </S.SubmitForm>
  );
};

export default SubmitForm;
