export function sectionHeaderMotion(reduceMotion) {
  if (reduceMotion) {
    return {
      initial: { opacity: 0 },
      whileInView: { opacity: 1 },
      viewport: { once: true },
      transition: { duration: 0.25 },
    };
  }

  return {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5 },
  };
}

export function fadeInView(reduceMotion, options = {}) {
  const { delay = 0, margin = '-50px' } = options;

  if (reduceMotion) {
    return {
      initial: { opacity: 0 },
      whileInView: { opacity: 1 },
      viewport: { once: true, margin },
      transition: { duration: 0.25 },
    };
  }

  return {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin },
    transition: { duration: 0.45, delay },
  };
}

export function fadeInViewX(reduceMotion, fromLeft, options = {}) {
  const { delay = 0, margin = '-50px' } = options;

  if (reduceMotion) {
    return {
      initial: { opacity: 0 },
      whileInView: { opacity: 1 },
      viewport: { once: true, margin },
      transition: { duration: 0.25 },
    };
  }

  return {
    initial: { opacity: 0, x: fromLeft ? -40 : 40 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: true, margin },
    transition: { duration: 0.45, delay },
  };
}
