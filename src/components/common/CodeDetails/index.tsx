import { FiCopy } from "react-icons/fi";
import { IoHeartOutline, IoHeart } from "react-icons/io5";
import type { CodeDetailType } from "@/hooks/code/useCode";
import * as S from "../codeDetails/style";
import { toast } from "react-toastify";

interface CodeDetailsProps {
  data: CodeDetailType;
  onToggleLike: () => void;
  isToggling?: boolean;
}

const CodeDetails = ({
  data,
  onToggleLike,
  isToggling = false,
}: CodeDetailsProps) => {
  const handleCopy = () => {
    navigator.clipboard.writeText(data.code).then(() => {
      toast.success("코드가 복사되었습니다!");
    });
  };

  const handleLike = () => {
    if (!isToggling) {
      onToggleLike();
    }
  };

  return (
    <S.Container>
      <S.Header>
        <div>
          <S.Title>{data.title}</S.Title>
          <S.Author>by {data.student}</S.Author>
        </div>
        <S.Meta>
          <S.MetaItem>
            생성일: {new Date(data.createdAt).toLocaleDateString()}
          </S.MetaItem>
          <S.MetaItem>
            수정일: {new Date(data.updatedAt).toLocaleDateString()}
          </S.MetaItem>
        </S.Meta>
      </S.Header>
      <S.Info>
        <S.MetaItem>{data.description}</S.MetaItem>
      </S.Info>
      <S.Actions>
        <S.LikeBox>
          <S.LikeButton
            onClick={handleLike}
            $isLiked={data.isLikedByUser}
            disabled={isToggling}
          >
            {data.isLikedByUser ? <IoHeart /> : <IoHeartOutline />}
          </S.LikeButton>
          <span>{data.likeCount}</span>
        </S.LikeBox>
        <S.ActionButton onClick={handleCopy}>
          <FiCopy />
          <span>코드 복사하기</span>
        </S.ActionButton>
      </S.Actions>
    </S.Container>
  );
};

export default CodeDetails;
