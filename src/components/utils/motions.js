export const fadeInLeft = (duration = 1, delay = 0) => ({
  initial: { opacity: 0, x: -150 },
  animate: { opacity: 1, x: 0 },
  transition: { duration, delay },
});

export const fadeInRight = (duration = 1, delay = 0) => ({
  initial: { opacity: 0, x: 150 },
  animate: { opacity: 1, x: 0 },
  transition: { duration, delay },
});

export const fadeIn = (duration = 1, delay = 0) => ({
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration, delay },
});
