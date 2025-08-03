import { useState, useEffect } from "react";
import { codeToHtml } from "shiki";
import type { CodeType } from "@/types/code/code";

export const useCodeHighlighter = (
  code: string,
  language: CodeType["language"]
) => {
  const [highlightedCode, setHighlightedCode] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    const highlight = async () => {
      setIsLoading(true);
      try {
        const html = await codeToHtml(code, {
          lang: language,
          theme: "github-dark",
        });

        if (isMounted) {
          setHighlightedCode(html);
        }
      } catch (error) {
        console.error("Failed to highlight code:", error);
        if (isMounted) {
          setHighlightedCode(`<pre><code>${code}</code></pre>`);
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    highlight();

    return () => {
      isMounted = false;
    };
  }, [code, language]);

  return { highlightedCode, isLoading };
};
