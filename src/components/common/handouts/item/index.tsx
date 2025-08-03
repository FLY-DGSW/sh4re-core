import * as S from "./style";
import { HandoutsItemProps } from "@/types/handouts/handouts";
import { getIconByExtension } from "@/util/handouts/getIconByExtension";

const HandoutsItem = ({ handout, className }: HandoutsItemProps) => {
  return (
    <S.HandoutWrapper className={className}>
      <S.HandoutItem>
        <S.HandoutIcon src={getIconByExtension(handout.extension)} />
        <S.HandoutTitle>{handout.title}</S.HandoutTitle>
        <S.HandoutMeta>
          <S.HandoutDate>
            {handout.date} · {handout.author}
          </S.HandoutDate>
        </S.HandoutMeta>
      </S.HandoutItem>
    </S.HandoutWrapper>
  );
};

export default HandoutsItem;
