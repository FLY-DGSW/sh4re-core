import { useNavigate, useLocation } from "react-router-dom";

interface UseCodeNavigationReturn {
  goBack: (customLabel?: string) => void;
  goToCodeList: () => void;
  goToProfile: () => void;
  goToEdit: (codeId: string | number) => void;
  goToDetail: (codeId: string | number) => void;
  goToCreate: () => void;
  getBackButtonLabel: () => string;
  isFromProfile: () => boolean;
}

export const useCodeNavigation = (): UseCodeNavigationReturn => {
  const navigate = useNavigate();
  const location = useLocation();

  const isFromProfile = (): boolean => {
    return location.state?.fromProfile === true;
  };

  const goBack = () => {
    if (isFromProfile()) {
      goToProfile();
    } else {
      goToCodeList();
    }
  };

  const goToCodeList = () => {
    navigate("/code");
  };

  const goToProfile = () => {
    navigate("/profile");
  };

  const goToEdit = (codeId: string | number) => {
    navigate(`/code/${codeId}/edit`);
  };

  const goToDetail = (codeId: string | number) => {
    navigate(`/code/${codeId}`);
  };

  const goToCreate = () => {
    navigate("/code/create");
  };

  const getBackButtonLabel = (): string => {
    if (isFromProfile()) {
      return "프로필로 돌아가기";
    }
    return "코드 전체보기";
  };

  return {
    goBack,
    goToCodeList,
    goToProfile,
    goToEdit,
    goToDetail,
    goToCreate,
    getBackButtonLabel,
    isFromProfile,
  };
};
