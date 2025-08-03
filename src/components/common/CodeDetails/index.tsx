import { FiCopy } from "react-icons/fi";
import { IoHeartCircleOutline } from "react-icons/io5";

import type { CodeType } from "@/types/code/code";
import * as S from "./style";
import { toast } from "react-toastify";

interface CodeDetailsProps {
  data: CodeType;
}

const CodeDetails = ({ data }: CodeDetailsProps) => {
  const handleCopy = () => {
    navigator.clipboard.writeText(data.code).then(() => {
      toast.success("코드가 복사되었습니다!");
    });
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
      <S.Description>
        {data.description || "등록된 설명이 없습니다."}
      </S.Description>
      <S.Actions>
        <S.LikeBox>
          <S.LikeButton>
            <IoHeartCircleOutline />
          </S.LikeButton>
          <span>{data.likes}</span>
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
