import { music } from "@/stack/music";
import MusicComponent from "./MusicComponent";

interface MusicTypes {
  id: number;
  title: string;
  img: string;
  artist: string;
  url: string;
  src: string;
} 

const Music = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-[85px] text-center text-white">
      <div>
        <h1 className="music-title text-4xl sm:text-5xl md:text-6xl lg:text-[64px] font-black leading-tight sm:leading-[64px] ">
          Music
        </h1>
        <div className="mt-8 sm:mt-10 md:mt-7 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
          {music.map((item: MusicTypes) => (
            <MusicComponent key={item.id} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Music;
