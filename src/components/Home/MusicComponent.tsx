import { useEffect, useMemo, useRef, useState } from "react";
import { CiPause1, CiPlay1 } from "react-icons/ci";

interface MusicTypes {
  id: number;
  title: string;
  img: string;
  artist: string;
  url: string;
  src: string;
}

const formatTime = (seconds: number) => {
  const whole = Math.floor(seconds || 0);
  const m = Math.floor(whole / 60);
  const s = whole % 60;
  const sPad = s < 10 ? `0${s}` : `${s}`;
  return `${m}:${sPad}`;
};

const MusicComponent = (item: MusicTypes) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    const audio = new Audio(item.src);
    audioRef.current = audio;

    const onLoaded = () => setDuration(audio.duration || 0);
    const onTime = () => setCurrentTime(audio.currentTime || 0);
    const onEnd = () => setIsPlaying(false);

    audio.addEventListener("loadedmetadata", onLoaded);
    audio.addEventListener("timeupdate", onTime);
    audio.addEventListener("ended", onEnd);

    return () => {
      audio.pause();
      audio.removeEventListener("loadedmetadata", onLoaded);
      audio.removeEventListener("timeupdate", onTime);
      audio.removeEventListener("ended", onEnd);
      audioRef.current = null;
    };
  }, [item.src]);

  const progress = useMemo(() => {
    if (!duration) return 0;
    return Math.min(100, Math.max(0, (currentTime / duration) * 100));
  }, [currentTime, duration]);

  const togglePlay = async () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      try {
        await audio.play();
        setIsPlaying(true);
      } catch {
        // noop for autoplay restrictions
      }
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const audio = audioRef.current;
    if (!audio || !duration) return;
    const value = Number(e.target.value);
    const newTime = (value / 100) * duration;
    audio.currentTime = newTime;
    setCurrentTime(newTime);
  };

  return (
    <div className="rounded-lg border-[3px] border-white bg-white flex flex-col">
      
      <div className="flex flex-col items-center gap-4 p-5 text-center bg-[#0E2115] flex-1">
        <div className="flex flex-col items-center gap-1">
          <p className="text-2xl font-bold text-white">{item.title}</p>
          <p className="text-sm text-white/70">{item.artist}</p>
        </div>
        <div className="flex items-center gap-4 w-full max-w-sm">
          <button
            aria-label={isPlaying ? "Pause" : "Play"}
            onClick={togglePlay}
            className="rounded-full bg-white/20 p-3 text-2xl text-white hover:bg-white/30 transition-colors"
          >
            {isPlaying ? <CiPause1 /> : <CiPlay1 />}
          </button>
          <div className="flex-1 flex flex-col gap-1">
            <input
              type="range"
              min={0}
              max={100}
              step={1}
              value={progress}
              onChange={handleSeek}
              className="w-full accent-white"
            />
            <div className="flex justify-between text-xs text-white/70">
              <span>{formatTime(currentTime)}</span>
              <span>{formatTime(duration)}</span>
            </div>
          </div>
        </div>
        <a
          href={item.url}
          target="_blank"
          rel="noreferrer"
          className="text-xs text-white/60 hover:text-white underline"
        >
          Open post
        </a>
      </div>
    </div>
  );
};

export default MusicComponent;
