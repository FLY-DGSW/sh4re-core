import type { CommentType } from "@/types/comment/comment";
import * as S from "./style";

interface CommentsProps {
  comments: CommentType[];
}

const Comments = ({ comments }: CommentsProps) => {
  return (
    <S.Container>
      <S.Title>댓글</S.Title>
      <S.CommentForm>
        <S.CommentInput placeholder="댓글을 입력하세요..." />
        <S.SubmitButton>등록</S.SubmitButton>
      </S.CommentForm>
      <S.CommentList>
        {comments.map((comment) => (
          <S.CommentItem key={comment.id}>
            <S.CommentAuthor>{comment.author}</S.CommentAuthor>
            <S.CommentContent>{comment.content}</S.CommentContent>
          </S.CommentItem>
        ))}
      </S.CommentList>
    </S.Container>
  );
};

export default Comments;
