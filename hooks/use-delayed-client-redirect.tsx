import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function useDelayedClientRedirect(path: string, seconds: number = 5, sessionData?: { key: string, value: string }[]) {
  const [secondsRemaining, setSecondsRemaining] = useState(seconds);
  const router = useRouter();

  useEffect(() => {
    if (sessionData) {
      sessionData.forEach((item) => {
        sessionStorage.setItem(item.key, item.value);
      });
    }

    if (secondsRemaining === 0) router.push('/');

    const timer = setTimeout(() => {
      setSecondsRemaining((prevSecondsRemaining) => prevSecondsRemaining - 1);
      if (secondsRemaining === 1) router.push(path);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [router, secondsRemaining, path]);

  return { secondsRemaining };
}
