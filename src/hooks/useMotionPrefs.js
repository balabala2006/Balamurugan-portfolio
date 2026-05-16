import { useEffect, useState } from 'react';

const MOBILE_QUERY = '(max-width: 768px)';
const REDUCE_MOTION_QUERY = '(prefers-reduced-motion: reduce)';
const COARSE_POINTER_QUERY = '(pointer: coarse)';

function getMotionPrefs() {
  if (typeof window === 'undefined') {
    return { reduceMotion: true, isMobile: true };
  }

  const isMobile = window.matchMedia(MOBILE_QUERY).matches;
  const prefersReduced = window.matchMedia(REDUCE_MOTION_QUERY).matches;
  const isTouch = window.matchMedia(COARSE_POINTER_QUERY).matches;

  return {
    reduceMotion: prefersReduced || isMobile || isTouch,
    isMobile,
  };
}

export function useMotionPrefs() {
  const [prefs, setPrefs] = useState(getMotionPrefs);

  useEffect(() => {
    const media = [
      window.matchMedia(MOBILE_QUERY),
      window.matchMedia(REDUCE_MOTION_QUERY),
      window.matchMedia(COARSE_POINTER_QUERY),
    ];

    const onChange = () => setPrefs(getMotionPrefs());

    media.forEach((mq) => mq.addEventListener('change', onChange));
    onChange();

    return () => media.forEach((mq) => mq.removeEventListener('change', onChange));
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('reduce-motion', prefs.reduceMotion);
    return () => document.documentElement.classList.remove('reduce-motion');
  }, [prefs.reduceMotion]);

  return prefs;
}
