import * as S from "./style";
import DOCXIcon from "@/assets/handouts/docx.svg?url";
import PPTXIcon from "@/assets/handouts/pptx.svg?url";
import XLSXIcon from "@/assets/handouts/xlsx.svg?url";
import HWPIcon from "@/assets/handouts/hwp.svg?url";
import PDFIcon from "@/assets/handouts/pdf.svg?url";
import { HandoutsItemProps } from "@/types/handouts/handouts";

export const getIconByExtension = (extension: string) => {
  switch (extension) {
    case "DOCX":
      return DOCXIcon;
    case "PPTX":
      return PPTXIcon;
    case "XLSX":
      return XLSXIcon;
    case "HWP":
      return HWPIcon;
    case "PDF":
      return PDFIcon;
    default:
      return DOCXIcon;
  }
};

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
