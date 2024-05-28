import { useRouter } from "next/navigation";
import { useEffect } from "react";

const useClientRedirect = (path: string, sessionData?: { key: string, value: string }[]) => {
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (sessionData) {
        sessionData.forEach((item) => {
          sessionStorage.setItem(item.key, item.value);
        });
      }

      router.push(path);
    }
  }, [path, router, sessionData]);

  return null; // not returning any component, just for side effects
};

export default useClientRedirect;
