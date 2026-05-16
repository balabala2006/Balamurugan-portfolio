import { useMotionPrefs } from '../hooks/useMotionPrefs';
import './BackgroundElements.css';

const BackgroundElements = () => {
  const { reduceMotion } = useMotionPrefs();

  return (
    <div
      className={`background-container${reduceMotion ? ' is-static' : ''}`}
      aria-hidden
    >
      <div className="bg-blob blob-1" />
      <div className="bg-blob blob-2" />
      <div className="bg-blob blob-3" />
    </div>
  );
};

export default BackgroundElements;
