import { useState, useCallback } from "react";

interface UseCodeViewerReturn {
  isFullScreen: boolean;
  fontSize: number;
  increaseFontSize: () => void;
  decreaseFontSize: () => void;
  toggleFullScreen: () => void;
}

export const useCodeViewer = (): UseCodeViewerReturn => {
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [fontSize, setFontSize] = useState(1);

  const increaseFontSize = useCallback(() => {
    setFontSize((size) => Math.min(size + 0.3, 3));
  }, []);

  const decreaseFontSize = useCallback(() => {
    setFontSize((size) => Math.max(size - 0.3, 0.5));
  }, []);

  const toggleFullScreen = useCallback(() => {
    setIsFullScreen((prev) => {
      const newFullScreenState = !prev;
      setFontSize(newFullScreenState ? 2 : 1);
      return newFullScreenState;
    });
  }, []);

  return {
    isFullScreen,
    fontSize,
    increaseFontSize,
    decreaseFontSize,
    toggleFullScreen,
  };
};
