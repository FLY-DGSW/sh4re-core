import { css } from "styled-components";

export const typography = {
  heading1: {
    fontSize: "36px",
    lineHeight: "auto",
    fontWeight: 700,
    fontFamily: "Pretendard, sans-serif",
  },
  heading2: {
    fontSize: "28px",
    lineHeight: "auto",
    fontWeight: 700,
    fontFamily: "Pretendard, sans-serif",
  },
  heading3Medium: {
    fontSize: "24px",
    lineHeight: "auto",
    fontWeight: 500,
    fontFamily: "Pretendard, sans-serif",
  },
  heading3: {
    fontSize: "24px",
    lineHeight: "auto",
    fontWeight: 700,
    fontFamily: "Pretendard, sans-serif",
  },
  subHeading1: {
    fontSize: "20px",
    lineHeight: "auto",
    fontWeight: 600,
    fontFamily: "Pretendard, sans-serif",
  },
  subHeading2: {
    fontSize: "20px",
    lineHeight: "auto",
    fontWeight: 500,
    fontFamily: "Pretendard, sans-serif",
  },
  body1: {
    fontSize: "16px",
    lineHeight: "auto",
    fontWeight: 400,
    fontFamily: "Pretendard, sans-serif",
  },
  body2: {
    fontSize: "12px",
    lineHeight: "auto",
    fontWeight: 400,
    fontFamily: "Pretendard, sans-serif",
  },
  caption: {
    fontSize: "10px",
    lineHeight: "auto",
    fontWeight: 400,
    fontFamily: "Pretendard, sans-serif",
  },
} as const;

export type Typography = typeof typography;
export type TypographyKey = keyof Typography;

export const Typography = (variant: TypographyKey) => css`
  font-size: ${({ theme }) => theme.typography[variant].fontSize};
  line-height: ${({ theme }) => theme.typography[variant].lineHeight};
  font-weight: ${({ theme }) => theme.typography[variant].fontWeight};
  font-family: ${({ theme }) => theme.typography[variant].fontFamily};
`;
