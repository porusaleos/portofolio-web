import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const fadeInUp = (element: string | Element, delay: number = 0) => {
  return gsap.from(element, {
    y: 60,
    opacity: 0,
    duration: 1,
    delay,
    ease: 'power3.out'
  });
};

export const fadeIn = (element: string | Element, delay: number = 0) => {
  return gsap.from(element, {
    opacity: 0,
    duration: 1,
    delay,
    ease: 'power3.out'
  });
};

export const staggerFadeInUp = (elements: string | Element[], stagger: number = 0.2) => {
  return gsap.from(elements, {
    y: 60,
    opacity: 0,
    duration: 1,
    stagger,
    ease: 'power3.out'
  });
};

export const slideInLeft = (element: string | Element, delay: number = 0) => {
  return gsap.from(element, {
    x: -100,
    opacity: 0,
    duration: 1,
    delay,
    ease: 'power3.out'
  });
};

export const slideInRight = (element: string | Element, delay: number = 0) => {
  return gsap.from(element, {
    x: 100,
    opacity: 0,
    duration: 1,
    delay,
    ease: 'power3.out'
  });
};

export const scaleIn = (element: string | Element, delay: number = 0) => {
  return gsap.from(element, {
    scale: 0.5,
    opacity: 0,
    duration: 1,
    delay,
    ease: 'power3.out'
  });
};

export const createScrollAnimation = (element: string | Element, animation: gsap.TweenVars) => {
  return gsap.from(element, {
    ...animation,
    scrollTrigger: {
      trigger: element,
      start: 'top 80%',
      end: 'bottom 20%',
      toggleActions: 'play none none reverse'
    }
  });
};