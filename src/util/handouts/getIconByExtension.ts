import DOCXIcon from "@/assets/handouts/docx.svg?url";
import PPTXIcon from "@/assets/handouts/pptx.svg?url";
import XLSXIcon from "@/assets/handouts/xlsx.svg?url";
import HWPIcon from "@/assets/handouts/hwp.svg?url";
import PDFIcon from "@/assets/handouts/pdf.svg?url";

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
