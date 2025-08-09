import { HandoutsItemProps } from "@/types/handouts/handouts";
import { getIconByExtension } from "@/util/handouts/getIconByExtension";
import * as S from "./style";

const HandoutsItem = ({ handout, className }: HandoutsItemProps) => {
  return (
    <S.HandoutWrapper className={className}>
      <S.Item>
        <S.Icon src={getIconByExtension(handout.extension)} />
        <S.Title>{handout.title}</S.Title>
        <S.Meta>
          <S.Date>
            {handout.date} · {handout.author}
          </S.Date>
        </S.Meta>
      </S.Item>
    </S.HandoutWrapper>
  );
};

export default HandoutsItem;
