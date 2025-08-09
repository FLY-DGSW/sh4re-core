import * as S from "./style";

const Comments = () => {
  return (
    <S.Container>
      <S.Title>댓글</S.Title>
      <S.CommentForm>
        <S.CommentInput placeholder='댓글을 입력하세요...' />
        <S.SubmitButton>등록</S.SubmitButton>
      </S.CommentForm>
      <S.CommentList>
        <S.CommentItem key={1}>
          <S.CommentAuthor>권대형</S.CommentAuthor>
          <S.CommentContent>레전드 코드네요 개쩌네요 ㄷㄷ</S.CommentContent>
        </S.CommentItem>
        <S.CommentItem key={2}>
          <S.CommentAuthor>이민수</S.CommentAuthor>
          <S.CommentContent>
            정말 잘 작성하셨네요! 한 수 배워갑니다
          </S.CommentContent>
        </S.CommentItem>
      </S.CommentList>
    </S.Container>
  );
};

export default Comments;
