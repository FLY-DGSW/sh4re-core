import { HandoutsListProps } from "@/types/handouts/handouts";
import HandoutsItem from "../item";
import * as S from "./style";

const HandoutsList = ({ handouts }: HandoutsListProps) => {
  return (
    <S.HandoutList>
      {handouts.map((handout) => (
        <HandoutsItem key={handout.id} handout={handout} />
      ))}
    </S.HandoutList>
  );
};

export default HandoutsList;
