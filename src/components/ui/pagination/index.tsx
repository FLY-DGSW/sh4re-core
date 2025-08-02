import * as S from "./style";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) => {
  const handlePrevPage = () => {
    onPageChange(Math.max(currentPage - 1, 1));
  };

  const handleNextPage = () => {
    onPageChange(Math.min(currentPage + 1, totalPages));
  };

  return (
    <S.PaginationContainer>
      <S.PaginationButton onClick={handlePrevPage} disabled={currentPage === 1}>
        이전
      </S.PaginationButton>
      <S.PageIndicator>
        {currentPage} / {totalPages}
      </S.PageIndicator>
      <S.PaginationButton
        onClick={handleNextPage}
        disabled={currentPage === totalPages}
      >
        다음
      </S.PaginationButton>
    </S.PaginationContainer>
  );
};

export default Pagination;
