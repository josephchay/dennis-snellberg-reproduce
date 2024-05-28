import { useRouter } from "next/navigation";
import { useEffect } from "react";

const useConditionalClientRedirect = (path: string, execute: boolean, sessionData?: { key: string, value: string }[]) => {
  const router = useRouter();

  useEffect(() => {
    if (execute && typeof window !== "undefined") {
      if (sessionData) {
        sessionData.forEach((item) => {
          sessionStorage.setItem(item.key, item.value);
        });
      }

      router.push(path);
    }
  }, [execute, path, router, sessionData]);

  return null;
};

export default useConditionalClientRedirect;
