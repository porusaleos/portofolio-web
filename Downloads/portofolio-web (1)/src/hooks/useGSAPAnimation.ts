import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

type AnimationFunction = (element: string | Element, delay?: number) => gsap.core.Tween;

export const useGSAPAnimation = (
  animation: AnimationFunction,
  delay: number = 0,
  dependencies: any[] = []
) => {
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (elementRef.current) {
      animation(elementRef.current, delay);
    }
  }, dependencies);

  return elementRef;
};