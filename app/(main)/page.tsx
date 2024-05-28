"use client";

import { useLayoutEffect, useState } from "react";
import { gsap } from "gsap";
import MainPreloader from "@/app/(main)/unlock/preloader";

export default function HomePage() {
  const [loaderFinished, setLoaderFinished] = useState(false);
  const [timeline, setTimeline] = useState(null);

  useLayoutEffect(() => {
    const context = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => setLoaderFinished(true),
      });
      setTimeline(tl);
    });

    return () => context.revert();
  }, []);

  return (
    <div>
      {
        // !loaderFinished && (
          <MainPreloader tl={ timeline } />
        // )
      }
    </div>
  );
}
