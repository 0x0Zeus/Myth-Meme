import { useEffect } from "react";

const AboutUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900">
      <div className="container mx-auto px-4 font-inter sm:px-6 md:px-8 lg:px-12">
        <div className="mx-auto max-w-[850px] space-y-4 pb-4 pt-[100px] sm:space-y-5 sm:pb-6 sm:pt-[120px] md:pb-20 md:pt-[150px] text-white">
          <header className="mb-12 text-center">
            <h1 className="text-4xl font-extrabold md:text-5xl bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
              About Us – Myth Memes
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-300">
              Welcome to <span className="font-semibold text-yellow-400">Myth Memes</span>, where
              ancient legends collide with tomorrow's technology, where gods, monsters, and mortals leap from the fires of imagination into the{" "}
              <span className="font-semibold text-yellow-400">digital age</span>.
            </p>
          </header>

          <section className="mb-12 space-y-4">
            <p className="text-lg text-gray-300 leading-relaxed">
              We are not simply a website. We are the keepers of <span className="font-semibold text-yellow-400">Myth Memes Origins</span>, 
              the cradle of entirely new myths never told before. Our universe is a realm where epic characters battle across time itself—some born to defend the light, 
              some forged in the heart of darkness, and others walking the delicate line between chaos and order.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Here at Myth Memes, we take inspiration from the vast mythologies of Earth's cultures—the Greek titans, Norse gods, dragons of the East, 
              desert spirits, storm-bringers, underworld rulers—and spin them forward into a new age of myth-making. These are stories not bound by the past 
              but unshackled in possibility, myths for a world hurtling into the future.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Every character, every creature, every god and monster of Myth Memes is <span className="font-semibold text-yellow-400">original</span>, 
              born from our project's core creative forge: Myth Memes Origins. This is where ideas become legends, where tales whispered in digital shadows 
              transform into sagas for online worlds, games, and beyond.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              And one day, these myths will not remain only as words or images—you will encounter them in online games, GameFi projects, and NFTs 
              where owning a piece of legend becomes reality.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 text-2xl font-bold md:text-3xl text-yellow-400">
              Our Vision: Forging New Myths for a Digital Age
            </h2>
            <p className="mb-4 text-lg text-gray-300 leading-relaxed">
              Myths have always been the lifeblood of human imagination. They explained thunder before science could, 
              carried lessons of morality before laws were written, and filled the night sky with stories of heroes, monsters, and gods.
            </p>
            <p className="mb-4 text-lg text-gray-300 leading-relaxed">
              But what about today? What about the worlds being built online, where people gather not around campfires but on screens, 
              in games, in virtual communities, in metaverses where reality bends?
            </p>
            <p className="mb-6 text-lg text-gray-300 leading-relaxed font-semibold">
              We believe myths must evolve.
            </p>
            <ul className="list-inside list-disc space-y-3 text-gray-300 text-lg">
              <li>Myths should live not only in books but on blockchains.</li>
              <li>Heroes and villains should battle not only in poems but in GameFi worlds where you can join the fight.</li>
              <li>Characters should be more than lore—they should be collectibles, NFTs, avatars, and playable legends.</li>
            </ul>
            <p className="mt-6 text-lg text-gray-300 leading-relaxed">
              Myth Memes is our answer to this calling: a digital pantheon where entirely new myths rise—not retellings of Zeus or Thor or Anubis, 
              but fresh legends with their own destinies, shaped by creators, gamers, and communities alike.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 text-2xl font-bold md:text-3xl text-yellow-400">
              From Lore to Life: GameFi and NFTs
            </h2>
            <p className="mb-4 text-lg text-gray-300 leading-relaxed">
              The myths of old lived in temples, songs, and oral tales.
            </p>
            <p className="mb-4 text-lg text-gray-300 leading-relaxed">
              The myths of the future will live in blockchains, online games, and digital worlds.
            </p>
            <p className="mb-6 text-lg text-gray-300 leading-relaxed font-semibold">
              That is why Myth Memes is more than storytelling—it is a launchpad for interactive mythmaking.
            </p>
            
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="rounded-xl border border-yellow-400/30 bg-yellow-400/10 p-6">
                <h3 className="text-xl font-bold text-yellow-400 mb-3">GameFi Integration</h3>
                <p className="text-gray-300 leading-relaxed">
                  We are designing the Myth Memes universe to flow naturally into GameFi ecosystems where players can battle as legendary characters, 
                  join factions of light, darkness, or neutrality, and earn rewards through play-to-earn mechanics.
                </p>
              </div>
              <div className="rounded-xl border border-purple-400/30 bg-purple-400/10 p-6">
                <h3 className="text-xl font-bold text-purple-400 mb-3">NFT Collectibles</h3>
                <p className="text-gray-300 leading-relaxed">
                  Each character, weapon, and relic of the Myth Memes universe may become an NFT collectible, offering true ownership of digital mythic assets 
                  with utility in games and limited editions tied to story events.
                </p>
              </div>
            </div>
          </section>

          <section className="rounded-xl bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 p-10 text-center text-white shadow-lg">
            <h2 className="mb-4 text-3xl font-bold">
              Join the Myth Memes Legacy
            </h2>
            <p className="mb-6 text-lg">
              By visiting Myth Memes, you are stepping into the first era of a new mythology. Here, dragons do not sleep in old caves—they fly across blockchain worlds. 
              Here, gods do not sit on thrones of marble—they battle in online arenas where players control their destinies.
            </p>
            <p className="mb-6 text-lg font-semibold">
              Because myths were never meant to stand still. They were always meant to live.
            </p>
            <button className="inline-block rounded-lg bg-white px-8 py-4 font-bold text-gray-900 shadow-lg transition hover:bg-gray-100 transform hover:scale-105">
              Enter the Myth Memes Universe
            </button>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
