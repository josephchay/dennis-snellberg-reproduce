import { gsap } from "gsap";
import { RefObject } from "react";

export const scrollWords = (
  wordGroupsRef: RefObject<HTMLDivElement>
) => {
  const tl = gsap.timeline();
  tl.to(wordGroupsRef.current, {
    yPercent: -80,
    duration: 5,
    ease: "power3.inOut",
  });

  return tl;
};

export const collapseWords = (
  wordGroupsRef: RefObject<HTMLDivElement>
) => {
  const tl = gsap.timeline();
  tl.to(wordGroupsRef.current, {
    "clip-path": "polygon(0% 50%, 100% 50%, 100% 50%, 0% 50%)",
    duration: 3,
    ease: "expo.inOut",
  });

  return tl;
};

export const progressLoad = (
  progressRef: RefObject<HTMLDivElement>,
  progressPercentageRef: RefObject<HTMLDivElement>
) => {
  const tl = gsap.timeline();

  tl.to(progressRef.current, {
    scaleY: 1,
    duration: 4,
    ease: "power4.inOut",
  }).to(
    progressPercentageRef.current,
    {
      textContent: "100",
      duration: 4,
      roundProps: "textContent",
    },
    "<"
  ).to(progressPercentageRef.current, {
    y: 36,
    autoAlpha: 0,
  });

  return tl;
};
