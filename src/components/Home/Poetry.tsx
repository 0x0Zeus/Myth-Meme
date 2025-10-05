import { Link } from "react-router-dom";

const Poetry = () => {
  return (
    <div className="container mx-auto mb-[60px] mt-[60px] px-4 text-center md:mb-[90px] md:mt-[80px] lg:mb-[135px] lg:mt-[102px] text-white">
      <h1 className="font-blackOpsOne text-2xl leading-none sm:text-3xl md:text-4xl lg:text-[50px]">
        Poetry by Poememe
      </h1>
      <p className="font-blackOpsOne md:pt-[30px] md:text-xl lg:pt-[50px] lg:text-2xl">
        Original works of Art
      </p>
      <div className="space-y-10 pt-[60px] ">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-5">
          <img
            src="/poems/1.png"
            alt="Poetry"
            className="mx-auto max-w-[400px] rounded-lg w-full shadow-[0px_4px_30px_rgba(255,255,255,0.6)]"
          />
          <img
            src="/poems/5.png"
            alt="Poetry"
            className="mx-auto max-w-[400px] rounded-lg w-full shadow-[0_4px_30px_rgba(255,255,255,0.6)]"
          />
          <img
            src="/poems/10.png"
            alt="Poetry"
            className="mx-auto max-w-[400px] rounded-lg w-full shadow-[0_4px_30px_rgba(255,255,255,0.6)]"
          />
          <img
            src="/poems/8.png"
            alt="Poetry"
            className="mx-auto max-w-[400px] rounded-lg w-full shadow-[0_4px_30px_rgba(255,255,255,0.6)]"
          />
        </div>
        <button className="rounded-xl bg-white px-4 py-2 font-blackOpsOne text-black transition-transform duration-300 hover:scale-105">
          <Link to={"/poetry"}>More Poems</Link>
        </button>
      </div>
    </div>
  );
};

export default Poetry;
