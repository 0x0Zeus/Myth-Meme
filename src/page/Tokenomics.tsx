const Tokenomics = () => {
  return (
    <div className="container mx-auto px-4 font-inter sm:px-6 md:px-8 lg:px-12">
      <div className="mx-auto max-w-[850px] space-y-6 pb-8 pt-28 sm:space-y-8 sm:pb-12 sm:pt-28 md:pb-20 md:pt-36 text-white">
        <header className="mb-12 text-center">
          <h1 className="text-4xl font-extrabold  md:text-5xl">
            Tokenomics – Poememe
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            At <span className="font-semibold">Poememe</span>, poetry finds a
            new digital home— where words live forever, poets earn fairly, and
            readers become part of a movement fueled by{" "}
            <span className="font-semibold">Poememe Tokens (POEM)</span>.
          </p>
        </header>

        <section className="mb-16">
          <h2 className="mb-4 text-2xl font-bold  md:text-3xl">
            The Vision: Poetry Meets Web3
          </h2>
          <p className="mb-4">
            For centuries, poetry has inspired hearts and minds—but poets have
            often lacked fair ways to publish, protect, and monetize their work.
            Traditional platforms control distribution and earnings, while
            creators get only a fraction of the value their art brings.
          </p>
          <p className="mb-4 font-semibold ">
            Poememe changes that.
          </p>
          <p>
            By putting poems on the{" "}
            <span className="font-semibold">Solana blockchain</span>, each work
            becomes a{" "}
            <span className="font-semibold">
              unique, verifiable, tradable NFT
            </span>
            . Poets keep ownership, collectors gain authenticity, and fans
            support creators directly. The{" "}
            <span className="font-semibold">Poememe Token (POEM)</span> powers
            the entire ecosystem with access, rewards, and governance.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="mb-6 text-2xl font-bold  md:text-3xl">
            How Poememe Token (POEM) Works
          </h2>
          <ol className="space-y-6 text-black">
            <li className="rounded-lg bg-white p-6 shadow ">
              <h3 className="mb-2 text-xl font-semibold ">
                1. Creation & Minting
              </h3>
              <p>
                Poets mint their works as NFTs using POEM tokens, gaining
                blockchain-backed ownership with the ability to sell, trade, or
                showcase their art.
              </p>
            </li>
            <li className="rounded-lg bg-white p-6 shadow">
              <h3 className="mb-2 text-xl font-semibold ">
                2. Membership & Benefits
              </h3>
              <p>
                Token holders unlock perks like presale access, rare NFT drops,
                and exclusive creative workshops.
              </p>
            </li>
            <li className="rounded-lg bg-white p-6 shadow">
              <h3 className="mb-2 text-xl font-semibold ">
                3. Community & Governance
              </h3>
              <p>
                POEM tokens grant voting rights on updates, features, and
                projects—making Poememe community-driven.
              </p>
            </li>
          </ol>
        </section>

        <section className="mb-16">
          <h2 className="mb-6 text-2xl font-bold  md:text-3xl">
            Key Benefits for Members
          </h2>
          <ul className="grid gap-6 sm:grid-cols-2 text-black">
            <li className="rounded-lg border border-green-200 bg-green-50 p-4">
              <strong>Limited Edition Poetry NFTs</strong> – Early access to
              rare poem drops.
            </li>
            <li className="rounded-lg border border-green-200 bg-green-50 p-4">
              <strong>Presale Invitations</strong> – Priority access to
              collections & token sales.
            </li>
            <li className="rounded-lg border border-green-200 bg-green-50 p-4">
              <strong>Airdrops & Rewards</strong> – Free token distributions for
              active members.
            </li>
            <li className="rounded-lg border border-green-200 bg-green-50 p-4">
              <strong>Creative Workshops</strong> – Exclusive poetry readings &
              NFT tutorials.
            </li>
            <li className="rounded-lg border border-green-200 bg-green-50 p-4">
              <strong>Marketplace Discounts</strong> – Reduced fees when trading
              NFTs.
            </li>
            <li className="rounded-lg border border-green-200 bg-green-50 p-4">
              <strong>Community Voting Power</strong> – Shape platform upgrades
              & features.
            </li>
            <li className="rounded-lg border border-green-200 bg-green-50 p-4">
              <strong>Poet Support Fund</strong> – Grants and contests for
              emerging poets.
            </li>
            <li className="rounded-lg border border-green-200 bg-green-50 p-4">
              <strong>Collaborative Publishing</strong> – Co-create NFT
              anthologies.
            </li>
          </ul>
        </section>

        <section className="mb-16">
          <h2 className="mb-6 text-2xl font-bold  md:text-3xl">
            Why the Community is Building a New Future for Poets
          </h2>
          <ul className="space-y-4">
            <li>
              <strong>Decentralizing publishing</strong> so poets—not
              corporations—control royalties.
            </li>
            <li>
              <strong>Creating income streams</strong> through NFT sales, token
              rewards, and funding.
            </li>
            <li>
              <strong>Preserving art</strong> on blockchain, safe from
              alteration or loss.
            </li>
            <li>
              <strong>Building community</strong> where readers, writers, and
              collectors uplift poetry.
            </li>
          </ul>
        </section>

        <section className="rounded-xl bg-gradient-to-r from-green-500 to-green-700 p-10 text-center text-white shadow-lg">
          <h2 className="mb-4 text-3xl font-bold">
            Join the Poememe Revolution
          </h2>
          <p className="mb-6 text-lg">
            By holding{" "}
            <span className="font-semibold">Poememe Tokens (POEM)</span>, you’re
            not just investing in digital assets—you’re supporting poets,
            shaping the platform, and helping build a lasting legacy for
            literature.
          </p>
          <p className="mb-6 text-lg">
            The future of poetry is{" "}
            <span className="font-semibold">
              decentralized, transparent, and community-powered
            </span>
            .
          </p>
          <a
            href="#"
            className="inline-block rounded-lg bg-white px-6 py-3 font-semibold  shadow transition hover:bg-gray-100 text-black"
          >
            Get Started with Poememe
          </a>
        </section>
      </div>
    </div>
  );
};

export default Tokenomics;
