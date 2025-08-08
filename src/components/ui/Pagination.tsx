import styled from "styled-components";
import { typography } from "@/styles/typography";

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
`;

const PaginationButton = styled.button`
  ${typography.body1}
  padding: 0.5rem 1rem;
  border: 1px solid ${({ theme }) => theme.colors.background.light};
  background-color: ${({ theme }) => theme.colors.background.primary};
  color: ${({ theme }) => theme.colors.text.primary};
  cursor: pointer;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;

const PageIndicator = styled.span`
  ${typography.body1}
  margin: 0 1rem;
  color: ${({ theme }) => theme.colors.text.primary};
`;

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
    <PaginationContainer>
      <PaginationButton onClick={handlePrevPage} disabled={currentPage === 1}>
        이전
      </PaginationButton>
      <PageIndicator>
        {currentPage} / {totalPages}
      </PageIndicator>
      <PaginationButton
        onClick={handleNextPage}
        disabled={currentPage === totalPages}
      >
        다음
      </PaginationButton>
    </PaginationContainer>
  );
};

export default Pagination;