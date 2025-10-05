export interface Character {
  id: string;
  name: string;
  title: string;
  type: 'light' | 'darkness' | 'neutral';
  rarity: 'legendary' | 'epic' | 'rare' | 'common';
  description: string;
  fullStory: string;
  powers: string[];
  alliances: string[];
  rivalries: string[];
  image: string;
  stats: {
    power: number;
    wisdom: number;
    cunning: number;
    resilience: number;
  };
  origin: string;
  appearance: string;
}

export const characters: Character[] = [
  {
    id: 'kaelith',
    name: 'Kaelith',
    title: 'The Starforger',
    type: 'neutral',
    rarity: 'legendary',
    description: 'A being neither entirely god nor mortal, born from a rare dissonance in the cosmic symphony. While other gods wove stars into patterns of perfection, Kaelith\'s hands trembled with imperfection, crafting worlds with cracks, stars with scars, and moons with shadows.',
    fullStory: `Before the age of mortals, when the world was nothing but a sea of darkness, there existed a realm of pure sound called The Resonance. This was the cradle of existence, a place where every vibration birthed form, every chord became matter, and every silence held the promise of life yet unshaped. The first gods were not of flesh or stone but of tone and rhythm, great beings who sculpted the cosmos with harmony.

Among them was Kaelith, the Starforger—a being neither entirely god nor mortal, born from a rare dissonance in the cosmic symphony. While the other gods wove stars into patterns of perfection, Kaelith's hands trembled with imperfection, crafting worlds with cracks, stars with scars, and moons with shadows. His creations were often strange yet beautiful, alive with colors the others had never imagined. The elder gods mocked him, calling him The Flawed Maker.

But it was Kaelith's flaws that would one day save creation itself.

In the time before time, the Resonance was threatened by the Void Serpent, Nhyros, a colossal being older than harmony itself. Nhyros was born from the first silence—the moment before the first note was sung. It slithered across the cosmos, swallowing stars, devouring whole constellations, and drinking the rivers of light that tied the realms together. The elder gods struck at it with spears of pure sound and hammers forged from gravity, but nothing could pierce its endless body.

Desperate, the gods turned to Kaelith, for he alone shaped imperfection, and the Void Serpent, born from silence, could only be wounded by a note that was broken, flawed, and cracked enough to pierce its formless flesh.

Kaelith accepted the task, though he knew it might mean his own unmaking.

For seven ages, Kaelith labored at the edge of existence, where light thinned and stars burned blue with cold. His forge was not of fire but of colliding meteors, frozen lightning, and the echoes of dying suns. From these, he crafted the Dissonant Star, a sphere of imperfection. It sang a song so mournful and jagged that even the elder gods wept when they heard it.

Into this star, Kaelith poured his own essence: his doubts, his dreams, his longings, and his flaws. He shaped it with trembling hands until it beat like a living heart. Its light was not steady but flickered with sorrow and hope alike.

When it was ready, Kaelith mounted the star upon a spear of shattered comets and confronted the Void Serpent.

In the Silent Gulf, where sound itself faltered, Kaelith faced Nhyros. The beast towered like an endless night, its scales made of collapsed galaxies, its eyes black holes rimmed with dying suns. It opened its jaws and exhaled a wind of unmaking, erasing whole realms in moments.

Kaelith hurled the Dissonant Star, and as it flew, it split the silence with a cry of imperfection so raw that the Serpent recoiled. The star struck deep into Nhyros' flesh, and for the first time, the creature bled—not with water or fire but with time itself, spilling past and future into the void.

The Serpent thrashed, wrapping Kaelith in its coils, crushing his form. Yet Kaelith sang as he died—a single broken note that echoed through the ages, sealing Nhyros beyond the edges of the cosmos, imprisoned in the cracks between realities.

When the gods searched the battlefield, they found no trace of Kaelith, only fragments of the Dissonant Star scattered across the newborn sky. These fragments became the Wounded Stars, those faint, flickering lights mortals now call "fallen stars" or "shooting stars."

Legends say Kaelith's spirit did not perish but became the Wanderer, drifting between worlds as a guide for lost souls. Sailors claim his constellation points toward safe harbors during storms. Poets speak of dreams where a one-eyed figure of light and shadow teaches them verses that can change fate itself.

Some myths whisper that when the cosmos faces its final darkness, Kaelith will return, reforging the Dissonant Star from the remnants of dying suns to battle the Serpent once more.`,
    powers: ['Starforging', 'Dissonant Creation', 'Temporal Manipulation', 'Cosmic Navigation'],
    alliances: ['The Elder Gods', 'The Wanderers', 'Lost Souls'],
    rivalries: ['Nhyros, the Void Serpent', 'The Perfect Ones'],
    image: '/images/characters/kaelith.jpg',
    stats: {
      power: 95,
      wisdom: 88,
      cunning: 75,
      resilience: 92
    },
    origin: 'The Resonance - Realm of Pure Sound',
    appearance: 'Kaelith was unlike the radiant elder gods who shone with perfection. He bore asymmetry as his mark: one arm of molten gold, the other of cracked stone; one eye blazing like a white dwarf, the other a hollow well of shadow. His voice carried the timbre of a thousand choirs singing slightly out of tune, unsettling yet mesmerizing. He wore a cloak woven from comet tails and stardust, and upon his brow rested a broken circlet of meteor-iron. His hands, always trembling, left trails of starlight when he moved, as though creation itself spilled from his fingertips.'
  },
  {
    id: 'sylvara',
    name: 'Sylvara',
    title: 'The Veilkeeper',
    type: 'neutral',
    rarity: 'legendary',
    description: 'Born of both Light and Shadow, Sylvara walks the delicate line between chaos and order. She weaves the barrier between realms of light and shadow, serving only balance itself.',
    fullStory: `Long before the first dawn rose over mortal lands, there existed only two realms: The Luminous Expanse and The Shrouded Deep. The Expanse blazed with eternal day, its skies woven of sunlight and wind-song. The Deep stretched endless and cold, a realm of shadow where time flowed backward, and whispers carried the weight of eternity.

The two realms never touched. Light feared shadow, and shadow despised light. Yet between them lay a thin, living barrier known as The Veil, a shimmering membrane that prevented the two worlds from colliding and destroying all existence. And at the heart of this Veil was born Sylvara, the Veilkeeper.

Sylvara was neither of Light nor Shadow. She was born of both—a being with skin like shifting twilight, hair that glittered like stars caught between dusk and dawn, and eyes that reflected two different skies: one a burning sun-gold, the other a soft midnight blue.

Wherever she walked, the world grew hushed, as though reality itself held its breath. She carried no weapon, only a silver-threaded loom upon which she wove the Veil each day, mending the tears where light or darkness threatened to bleed through.

The elder spirits called her The Silent Daughter, for she spoke rarely, and when she did, her words became law.

For an age uncounted, Sylvara tended the Veil, keeping harmony between the realms. But the rulers of Light and Shadow grew restless.

Solareth, King of the Luminous Expanse, longed to conquer the Shrouded Deep, believing light should reign everywhere.
Noctyros, Lord of the Shrouded Deep, despised the Expanse, claiming shadow was the true shape of eternity.

Both sought Sylvara's favor, for through her alone could they breach the Veil. She refused them both, swearing no realm would dominate the other.

Enraged, Solareth and Noctyros formed a pact of betrayal: they would tear the Veil apart, collapsing the barrier so light and darkness would clash, destroying Sylvara and remaking reality in their own image.

On the final day of the age, Solareth hurled spears of burning starlight at the Veil, while Noctyros sent waves of living shadow to devour it. The Veil shuddered and split, reality shrieking as cracks spread across the fabric of existence.

Sylvara descended to the battlefield where light and darkness collided in storms of fire and frost. With her silver-threaded loom, she tried to mend the wounds as fast as they appeared, but the forces were too great.

The two rulers confronted her, each demanding she grant them dominion over all creation.

But Sylvara, quiet and calm, did something neither expected: she shattered her own loom.

The loom's fragments fell through the Veil like raindrops of silver fire, and where they landed, a new world was born—a realm of twilight and balance, where light and darkness mingled without destroying each other.

This was the Mortal Realm, a place of oceans and mountains, forests and stars, winds and rains—woven from the broken threads of the Veil itself.

Solareth and Noctyros, robbed of their battleground, were cast back to their realms, now forever barred from touching the Mortal Realm directly.

And Sylvara? She became the Eternal Horizon, the band of twilight that circles the world at dawn and dusk. Her presence lingers in the meeting of day and night, the hush before sunrise, the glow after sunset.

Legends claim Sylvara still watches over the Mortal Realm, her spirit walking the borders where opposites meet—light and dark, life and death, love and loss. Travelers at twilight sometimes glimpse her silhouette upon the horizon: a tall, slender figure cloaked in drifting silver, hair flowing like strands of starlight, eyes glowing sun-gold and midnight blue.

It is said those who meet her are given one request—but only one—and her gift always carries a balance. Ask for wealth, and you may lose something dear. Ask for love, and time itself may turn against you. For Sylvara embodies harmony, not favor, and she reminds mortals that every dawn owes a debt to nightfall.`,
    powers: ['Veil Weaving', 'Realm Balance', 'Twilight Manipulation', 'Harmony Enforcement'],
    alliances: ['The Mortal Realm', 'Twilight Wanderers', 'Balance Keepers'],
    rivalries: ['Solareth, King of Light', 'Noctyros, Lord of Shadow'],
    image: '/images/characters/sylvara.jpg',
    stats: {
      power: 85,
      wisdom: 98,
      cunning: 82,
      resilience: 90
    },
    origin: 'The Veil Between Realms',
    appearance: 'Sylvara\'s form was a study in opposites. Her skin shimmered like dusk itself, shifting between rose-gold and indigo as though two worlds fought for her flesh. Her eyes glowed with opposing lights: the left blazing with the warmth of the sun, the right glimmering like the first evening star. Her hair drifted like strands of silver mist, and she wore robes woven from the first twilight clouds, trimmed in the faint glow of falling stars. Around her waist hung the broken frame of her loom, now a circle of silver fragments that rang softly when she moved, like chimes in a wind only she could hear.'
  },
  {
    id: 'tharion',
    name: 'Tharion',
    title: 'The World-Root',
    type: 'light',
    rarity: 'legendary',
    description: 'The first living will, Tharion was an immense tree-being whose roots birthed continents and whose branches reached into the void. Every star, every grain of earth, every living thing came from the fruits that grew upon his branches.',
    fullStory: `Before time counted the days, before the first sun flared or the first moon was born, there was only the Great Silence. No sky arched overhead, no earth lay beneath; only the Endless Sea drifted in black stillness. From its depths rose a single being: Tharion, the World-Root.

Tharion was neither god nor beast but the first living will. His body was an immense tree, roots of silver spiraling endlessly downward into the dark waters, branches of crystal climbing into the void above. His bark was black as obsidian, veined with glowing amber rivers where sap ran like molten gold. From the winds of nothingness, he wove the first breezes; from the darkness, he coaxed the first sparks of light.

The ancients believed that every star, every grain of earth, every living thing came from the fruits that grew upon Tharion's branches. He was Life before Life, the axis upon which reality would one day turn.

But creation invites envy. From beyond the Endless Sea came the Howlers, spirits of raw chaos shaped from shrieking winds and hollow hunger. They despised Tharion's stillness, for they were creatures of undoing.

The Howlers descended upon the World-Root, biting at his branches, tearing at his roots with fangs of storm and claws of lightning. Each time they wounded him, the fruits upon his branches—worlds yet unborn—fell into the sea and were swallowed by darkness.

Tharion groaned, a sound so deep it became the first Earthquake, shaking the newborn bones of reality. Yet he did not fight the Howlers with storm or fire. Instead, he birthed something new: Guardians, creatures shaped from his leaves, sap, and roots, each carrying a fragment of his will to protect what he was building.

From his highest boughs leapt the Skyrend Stags, antlers crowned with constellations, their hooves striking sparks that became the first stars.
From his roots crawled the Stone Serpents, scales rough as mountains, eyes glowing like magma as they coiled around his trunk.
From his sap rose the Amber Wolves, golden-furred beasts whose howls became the first songs of the mortal world.

Together, they fought the Howlers in a war that raged for ages upon ages, where winds tore continents before they existed and oceans boiled before water had names.

At last, the Guardians drove the Howlers into the edges of unformed night. But Tharion had been gravely wounded. His roots bled rivers of molten sap; his highest branches blackened where the Howlers' storms had struck deepest.

Knowing he would not last another age, Tharion thrust his roots deep into the Endless Sea, drinking its darkness, shaping from it the first soil. His body stiffened, his sap hardened into veins of fire and metal. He surrendered himself so that his falling fruits—those seeds of stars and worlds—could take root in the soil of his own making.

Where his trunk split, mountains rose.
Where his branches fell, forests spread.
Where his sap bled into hollows, oceans formed.

And when his final breath rose into the sky, it became the Wind, so that all who lived would carry a fragment of him in every breeze.

From his last living fruit hatched the Three Moons, sisters born of silver light. They circled the newborn world, singing to the tides and keeping watch over the remnants of the Howlers, who even now lurked at the world's edges.

The eldest moon, Aeluna, sang to the seas, teaching them to rise and fall so they would never grow stagnant.
The second, Veyra, sang to the forests, calling life from soil and branch.
The youngest, Seris, sang to mortals yet to be born, weaving dreams into the fabric of sleep so that all living things would carry hope.

Thus, the moons became the first keepers of balance, bound by their father Tharion's final will.

Legends say Tharion did not truly die. His roots, deep beneath mountains and seas, still pulse faintly with golden fire. When the Howlers break free again—as all things return in time—the World-Root will rise once more.

He will shake the mountains from his shoulders, tear rivers from his hair, and lift the continents like fallen leaves. The moons will crack like eggshells, releasing the songs of their souls, and the Guardians will awaken from stone and starlight to fight beside him.

And when the war ends, the World-Root will either bloom a second time… or burn into a final night that even the moons cannot sing away.`,
    powers: ['World Creation', 'Life Bearing', 'Guardian Summoning', 'Elemental Mastery'],
    alliances: ['The Three Moons', 'Skyrend Stags', 'Stone Serpents', 'Amber Wolves'],
    rivalries: ['The Howlers', 'Chaos Spirits'],
    image: '/images/characters/tharion.jpg',
    stats: {
      power: 100,
      wisdom: 95,
      cunning: 70,
      resilience: 100
    },
    origin: 'The Endless Sea - Before Time',
    appearance: 'Tharion was imagined as a colossal figure straddling the line between god and nature itself. His body towered into the heavens, bark dark as obsidian yet glowing with veins of amber light, as though stars were trapped beneath his skin. His roots curled through oceans and mountains alike, vast enough to encircle continents, while his branches speared the heavens, each tipped with leaves like sheets of living crystal. His face was said to be shaped from wind and shadow, ever-shifting, with eyes like twin suns glimpsed through a forest canopy. In one hand he held storms, in the other seeds of golden fire. Wherever his breath passed, life stirred; wherever his shadow fell, mountains formed.'
  },
  {
    id: 'auranyth',
    name: 'Auranyth',
    title: 'The Gilded Tempest',
    type: 'light',
    rarity: 'legendary',
    description: 'The golden dragon of wind and rain whose roar splits the sky. Where other dragons embodied raw destruction, Auranyth embodied change—the shaping of chaos into order.',
    fullStory: `Before the stars found their places in the heavens and before the first river carved the bones of the earth, the world was a swirling chaos of fire, wind, and stone. From that chaos rose the Primordial Dragons, each born of an element: flame, storm, shadow, frost, and tide.

But there was one unlike all the others—Auranyth, the Gilded Tempest, whose scales gleamed brighter than the newborn sun and whose eyes glowed a piercing sapphire blue, as if the endless sky itself had given him sight.

Where other dragons embodied raw destruction, Auranyth embodied change—the shaping of chaos into order. His roar carried the first winds that cooled fire and carved valleys through mountains, his breath birthed rivers from molten stone, and when he struck his tail upon the earth, the tremors made seeds awaken in the ash.

He was the First Shaper, and even the early gods watched him with awe.

Yet not all welcomed Auranyth's power. Among the Primordial Dragons was Vorthyx, the Inferno Serpent, whose scales burned crimson and whose heart held only hunger. Vorthyx believed the newborn world should remain wild and aflame forever, with no seas, no winds, no forests—only fire eternal.

When Auranyth called rains to quench the burning plains, Vorthyx saw it as betrayal. When Auranyth carved canyons for rivers to flow, Vorthyx roared in rage. And when Auranyth shaped the first storm clouds to cool the land, Vorthyx swore war upon him, declaring:

"The world shall burn until the last star dies, and no tide, wind, or storm shall stand against me."

Their battles lasted centuries before centuries existed. Vorthyx rained meteors of fire upon the young mountains; Auranyth answered with storms so fierce they split the sky in two. Oceans boiled, forests were born and burned again, and the air shook with thunder until even the gods fled to the edges of creation.

The dragons' war shaped the world itself—volcanoes rising where Vorthyx struck, great rivers flowing where Auranyth's storms cut through stone. Mortals had not yet been born, yet their future lands were being carved in blood and flame.

At last, the other Primordial Dragons, weary of endless war, declared that one must fall so the world could endure. But neither Auranyth nor Vorthyx could defeat the other; fire would not yield to storm, and storm could not quench fire completely.

So Auranyth chose sacrifice. Calling upon the deepest winds of creation, he summoned a tempest so vast it swallowed oceans and split mountains, binding both himself and Vorthyx within a prison of storm-wrought crystal at the world's center.

The storm hardened into the first Skyspire, a mountain of glass and lightning that pierced the heavens. Inside it, Auranyth and Vorthyx lay coiled together, one of gold and one of fire, locked in eternal slumber so the world above could know peace.

It is said the mountain still hums with the echo of Auranyth's final roar—the sound of wind over stone—and when storms rage across the world, mortals whisper that the two dragons twist in their sleep, straining against their crystal bonds.

Though imprisoned, Auranyth's power was not lost. The rains he brought continued to fall, the winds he shaped still roamed the skies, and his blue-eyed gaze became the North Star, guiding travelers and kings through ages yet to come.

Legends claim his golden scales scattered when the crystal prison formed, carried by storms across the world. Where a scale landed, mountains rose, veins of gold formed beneath the earth, and storms gathered above for centuries. Many kings sought these scales, believing them to hold Auranyth's blessings—crowns, thrones, and weapons were forged from them, said to carry the storm's fury and the dragon's wisdom alike.

Some say when the final age comes, when mountains crumble and seas boil dry, the Skyspire will shatter, releasing both dragons for a last battle—a war to decide whether the world ends in fire or is reborn in storm and rain.`,
    powers: ['Storm Mastery', 'Weather Control', 'Land Shaping', 'Sky Navigation'],
    alliances: ['The Primordial Dragons', 'Storm Spirits', 'Wind Keepers'],
    rivalries: ['Vorthyx, the Inferno Serpent', 'Fire Dragons'],
    image: '/images/characters/auranyth.jpg',
    stats: {
      power: 98,
      wisdom: 85,
      cunning: 88,
      resilience: 95
    },
    origin: 'The Primordial Chaos',
    appearance: 'Auranyth, the Gilded Tempest, was unlike any creature before or after him. His scales gleamed like molten gold at sunrise, each one edged with a faint silver glow as though lightning lived beneath them. His wings stretched wider than valleys, shimmering like hammered sunlight when storms broke across them. But it was his eyes mortals remembered most—twin orbs of piercing blue, bright as glacial ice yet alive with the fury of tempests. They said one glance from Auranyth could call the winds to rise, while a single beat of his wings could summon storms that split forests and carved cliffs from mountainsides. He carried himself not only with power but with a strange majesty, for while Vorthyx burned with hunger and rage, Auranyth embodied creation through chaos—the storm that destroys yet brings rain, the wind that tears yet shapes.'
  }
];

export const getCharacterById = (id: string): Character | undefined => {
  return characters.find(char => char.id === id);
};

export const getCharactersByType = (type: 'light' | 'darkness' | 'neutral'): Character[] => {
  return characters.filter(char => char.type === type);
};

export const getCharactersByRarity = (rarity: 'legendary' | 'epic' | 'rare' | 'common'): Character[] => {
  return characters.filter(char => char.rarity === rarity);
};

