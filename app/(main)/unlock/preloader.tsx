"use client";

import React, { useEffect, useRef } from "react";
import { words } from "./_data/words";

import styles from "./style.module.scss";
import { scrollWords, collapseWords, progressLoad } from "./_helpers/animations";

const MainPreloader = ({
  tl
}:
 gsap.core.Timeline
) => {
  const loaderRef = useRef(null);
  const progressRef = useRef(null);
  const progressNumberRef = useRef(null);
  const wordGroupsRef = useRef(null);

  useEffect(() => {
    tl &&
      tl
        .add(scrollWords(wordGroupsRef))
        .add(progressLoad(progressRef, progressNumberRef), 0)
        .add(collapseWords(loaderRef), "-=1");
  }, [tl]);

  return (
    <div className="fixed w-full h-full inset-0 overflow-hidden bg-neutral-50">
      <div className="absolute bottom-0 left-0 h-full w-full z-[3]">
        <div
          ref={ progressRef }
          className="w-full h-full bg-neutral-900 scale-y-0 origin-[center_bottom]"
        ></div>
      </div>
      <div
        ref={ progressNumberRef }
        className="absolute bottom-[4vh] right-[5vw] whitespace-nowrap text-neutral-50 text-[20px] z-[4] mix-blend-difference"
      >
        0
      </div>
      <div
        ref={ loaderRef }
        className={ styles.loader }
      >
        <div className={styles.loader__words}>
          {/*<div className={styles.loader__overlay}></div>*/}
          <div
            ref={ wordGroupsRef }
            className="text-center"
          >
            {
              words.map((word, index) => {
                return (
                  <span
                    key={ index }
                    className="block text-6xl text-neutral-50 mix-blend-difference"
                  >
                    { word }
                  </span>
                );
              })
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPreloader;
