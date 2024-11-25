import { gsap } from "gsap";

export const animateFocus = (element: HTMLElement) => {
  gsap.to(element, { scale: 1.05, duration: 0.3 });
};

export const animateBlur = (element: HTMLElement) => {
  gsap.to(element, { scale: 1, duration: 0.3 });
};
