import { useNavigate } from "react-router-dom";
import { useCodes } from "@/hooks/code/useCodes";
import { useUser } from "@/hooks/auth/login/useUser";

export const useProfilePage = () => {
  const navigate = useNavigate();
  const { data: user } = useUser();
  const { data: codes = [], isLoading, error } = useCodes();

  const myCodes = user
    ? codes
        .filter((code) => code.authorName === user.name)
        .sort((a, b) => b.id - a.id)
    : [];

  const totalLikes = myCodes.reduce(
    (sum, code) => sum + (code.likeCount || 0),
    0
  );

  const handleCodeClick = (codeId: number) => {
    navigate(`/code/${codeId}`, { state: { fromProfile: true } });
  };

  return {
    user,
    myCodes,
    totalLikes,
    isLoading,
    error,
    handleCodeClick,
  };
};
