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

export const containerVariants = {
  hidden: { opacity: 0, y: "-100%" },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      when: "beforeChildren",
      staggerChildren: 0.15,
    },
  },
  exit: { opacity: 0, y: "-100%", transition: { duration: 0.4 } },
};

export const linkVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  exit: { opacity: 0, y: 30, transition: { duration: 0.2 } },
};

export const footerContainerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay: 0.3, when: "beforeChildren", staggerChildren: 0.15 },
  },
  exit: { opacity: 0, y: 50, transition: { duration: 0.3 } },
};

export const footerLinkVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};
