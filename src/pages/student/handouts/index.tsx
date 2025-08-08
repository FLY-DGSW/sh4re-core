import HandoutsHeader from "@/components/common/handouts/header";
import HandoutsList from "@/components/common/handouts/list";
import * as S from "./style";
import Pagination from "@/components/ui/Pagination";
import { useHandouts } from "@/hooks/handouts/useHandouts";
import { useState } from "react";

const HandoutsPage = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const {
    currentPage,
    sortOrder,
    totalPages,
    selectedHandouts,
    handleSortChange,
    setCurrentPage,
  } = useHandouts(searchTerm);

  const handleSearchChange = (term: string) => {
    setSearchTerm(term);
  };

  return (
    <S.Container>
      <S.MainContent>
        <HandoutsHeader 
          sortOrder={sortOrder}
          handleSortChange={handleSortChange}
          searchTerm={searchTerm}
          handleSearchChange={handleSearchChange}
        />
        <HandoutsList handouts={selectedHandouts} />
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </S.MainContent>
    </S.Container>
  );
};

export default HandoutsPage;