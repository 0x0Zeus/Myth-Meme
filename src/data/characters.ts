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
    image: '/images/kaelith.png',
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
    image: '/images/sylvara.png',
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
    image: '/images/tharion.png',
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
    image: '/images/auranyth.png',
    stats: {
      power: 98,
      wisdom: 85,
      cunning: 88,
      resilience: 95
    },
    origin: 'The Primordial Chaos',
    appearance: 'Auranyth, the Gilded Tempest, was unlike any creature before or after him. His scales gleamed like molten gold at sunrise, each one edged with a faint silver glow as though lightning lived beneath them. His wings stretched wider than valleys, shimmering like hammered sunlight when storms broke across them. But it was his eyes mortals remembered most—twin orbs of piercing blue, bright as glacial ice yet alive with the fury of tempests. They said one glance from Auranyth could call the winds to rise, while a single beat of his wings could summon storms that split forests and carved cliffs from mountainsides. He carried himself not only with power but with a strange majesty, for while Vorthyx burned with hunger and rage, Auranyth embodied creation through chaos—the storm that destroys yet brings rain, the wind that tears yet shapes.'
  },
  {
    id: 'thal-ruun',
    name: 'Thal Ruun',
    title: 'The Star-Eyed Warden',
    type: 'neutral',
    rarity: 'legendary',
    description: 'Born of both star and swamp, Thal\'Ruun is the first of the Amphidian Guardians, charged by fate to guard the fallen shards lest they corrupt the world.',
    fullStory: `In the Age Before Dawn—when the rivers still whispered the songs of the first storms and the moon was but a pale ember in the heavens—there lived a being unlike any other, born neither of man nor beast, but of both. His name was Thal'Ruun, the Star-Eyed Warden.

It is said that when the heavens cracked during the First Tempest, four fragments of the firmament fell into the world, glowing like emerald fire. They landed deep within the Swamp of Lethra, a realm of mist, decay, and forgotten gods. The waters boiled with their impact, and from the vapor rose a creature shaped by the stars and the mire alike—a frog the size of a man, with skin like polished jade and eyes that burned green with celestial light.

But Thal'Ruun was no mindless beast. Within him pulsed the breath of the heavens and the memory of the earth. He was half mortal, half cosmic, the first of the Amphidian Guardians, charged by fate to guard the fallen shards lest they corrupt the world. Each shard held a piece of creation's first song—music that could make or unmake reality if sung by mortal tongues.

The Rise of the Red Swarm

A thousand years passed in uneasy peace. The marshlands grew wild and haunted, and travelers whispered of a green shadow that moved beneath the reeds. Then, from the cracks of the underworld, came a new plague—the Red Swarm.

They were not mere insects, but the spawn of Zha'Kar, the Lord of Carrion and Hunger. Born of his decayed blood, the swarm was endless—glowing red flies that drank light, devoured flesh, and carried the rot of dying worlds. They blackened the skies, devouring everything in their path. Even gods turned their faces away from the sight.

When the swarm reached the Swamp of Lethra, the waters curdled to blood. The fallen star-stones began to stir, their glow dimming under the red sky. If the swarm consumed them, the First Song would die forever—and with it, the memory of creation.

It was then that Thal'Ruun awakened.

The Call of the Guardian

The myths say his awakening shook the marshes like thunder. Rising from the depths, Thal'Ruun's emerald eyes ignited, piercing the veil of storm and shadow. His limbs—muscled, scaled, and bound by the strength of both beast and god—tore through the swamp's black waters as he emerged beneath a sky aflame with crimson light.

In his webbed hand, he held the Blade of Ripples, forged from the reflection of a star upon a lake—a weapon that could cut not flesh, but the flow of magic itself. The sword shimmered with blue light, humming with the echoes of forgotten constellations.

The Red Swarm descended upon him like a living storm. Thousands of fiery wings shrieked through the air, their glowing bodies forming a maelstrom of blood and flame. Thal'Ruun bellowed—a sound that rippled through earth and air like a wave breaking across eternity. He leapt into battle, every motion a thunderclap, every strike an echo of creation's first heartbeat.

The Battle of the Burning Mire

The fight lasted seven nights and seven storms. The Swamp of Lethra burned and boiled, its waters turned to steam and ash. The Red Swarm covered the heavens, blotting out even the moon. Thal'Ruun fought at the center of it all—slashing, leaping, striking down swarms of glowing vermin as his sword's light carved through the blackness.

Yet for every thousand he slew, ten thousand more rose. Zha'Kar's laughter thundered through the night—a voice that curdled blood and cracked bone.

When dawn failed to come on the eighth day, Thal'Ruun realized that the battle could not be won by the blade alone. So he turned inward, calling upon the ancient power of the star-stones. He drew them from the marsh one by one, their emerald fire blazing through the smoke.

He sang—the way no beast nor man had ever sung—using the First Song of the Sky, the tune of creation itself. The air quivered with the sound, a resonance that unmade shadows and silenced screams. The Red Swarm faltered. Their wings froze midflight. The fire in their eyes guttered.

But the song demanded a price.

Each note of the melody burned through Thal'Ruun's mortal half, turning his flesh to crystal and his blood to starlight. By the time the last verse was sung, only a statue remained—a frog-man of jade and fire, sword raised skyward, forever guarding the fallen stars.

The Red Swarm fell silent, their ashes scattering across the world like red snow.

The Legacy of the Star-Eyed Warden

Ages passed. Kingdoms rose and drowned in their own wars. The swamp grew still again, and the statue of Thal'Ruun was buried beneath centuries of mud and moss. Only the old songs of wandering bards remembered him, telling of the Frog who Fought the Fireflies of Death, the Amphidian Knight, or the Emerald Sentinel of the Mire.

Yet, on nights when the moon turns red and the marshes whisper, travelers claim to see a green light moving through the fog—a shape with burning eyes, holding a sword that hums softly, as if singing to the stars.

The priests of the modern age call this light The Watchfire, believing it is Thal'Ruun's spirit still guarding the shards, waiting for the day when the Red Swarm returns.

And some say it will.`,
    powers: ['Star-Stone Mastery', 'First Song of Creation', 'Swamp Dominion', 'Guardian Awakening'],
    alliances: ['The Amphidian Guardians', 'Star-Stone Keepers', 'Marsh Spirits'],
    rivalries: ['Zha\'Kar, Lord of Carrion', 'The Red Swarm'],
    image: '/images/ThalRuun.png',
    stats: {
      power: 92,
      wisdom: 88,
      cunning: 85,
      resilience: 95
    },
    origin: 'The Swamp of Lethra - Age Before Dawn',
    appearance: 'Thal\'Ruun stood taller than a man, his body a perfect blend of amphibian strength and divine design. His skin shimmered like wet emerald under moonlight, etched with faint constellations that pulsed when he drew upon celestial power. His eyes, twin orbs of molten green, glowed with intelligence and fury—mirrors of both swamp and sky. Across his back hung the cloak of reeds, a living mantle that moved with the wind, whispering the voices of ancient spirits. His hands were webbed yet dexterous, capable of wielding the Blade of Ripples, a weapon made of light and reflection. When he stood still, one could mistake him for a statue—but when he moved, he was the storm itself: graceful, inevitable, eternal. He was not a god. He was not a man. He was the balance between them—born of chaos to guard creation\'s harmony.'
  },
  {
    id: 'aetherion',
    name: 'Aetherion',
    title: 'The Forged Titan',
    type: 'neutral',
    rarity: 'legendary',
    description: 'Once mortal craftsman Kaelos of Ilyndra, now a being of living metal and divine energy, forged to bridge the gap between gods and mortals.',
    fullStory: `In the twilight of the Fifth Age of Fire, when gods still walked among mortals and the heavens bled from forgotten wars, the world trembled beneath the ruin of its own brilliance. Mankind had angered both sky and stone, stealing divine secrets to forge weapons that burned brighter than the sun. From the ashes of that arrogance arose a single figure—the last hope of flesh, fire, and faith.

His name was Aetherion, the Forged Titan.

The Birth of the Iron Soul

Before he became a legend, Aetherion was known as Kaelos of Ilyndra, a craftsman of unsurpassed genius. He was not born of kings or gods but of flame and obsession. His hands were blackened by forge smoke, his lungs filled with the scent of molten metal. Kaelos believed that the gods' power could be built, not begged for.

It was in the dying years of the War of Embers that Kaelos made his greatest creation—a suit of divine armor called the Aetherion Shell, forged from the fragments of fallen stars and tempered in the molten core of a slain volcano god. The suit shimmered with metallic light like liquid silver, its surface alive with runes that pulsed to the rhythm of a living heart.

To the mortal eye, it was a weapon.
To the gods, it was blasphemy.
To Kaelos, it was salvation.

He believed he could end the endless wars between men and immortals by becoming something in between—neither god nor mortal, but a bridge forged in fire and will.

When the gods descended to destroy him, Kaelos sealed himself within the armor. The runes ignited, the star-metal fused to his bones, and his mortal body was burned away. When the fires dimmed, Kaelos was gone—and in his place stood Aetherion, a being of glowing metal, thunder, and sorrow.

The First Flight

Aetherion's first breath was a storm. His eyes shone like burning sapphires, his voice resonated like a forge strike, and his movements left trails of golden light. The armor's inner heart pulsed with an Aether Core—a sphere of divine energy drawn from the heavens themselves, eternally spinning at his chest.

When he took flight for the first time, the world trembled. Mortals looked up to see a comet streak across the sky, and for the first time in centuries, they whispered prayers not to the gods, but to him.

Aetherion's armor could reshape itself, forming blades of light, wings of molten bronze, or shields of pure force. He was both weapon and wielder, machine and spirit, and with each battle, the armor seemed to learn—growing stronger, more aware.

He led mankind against the armies of vengeful deities, soaring into battles where flame rained from heaven and the earth cracked beneath celestial wrath. And wherever he fought, victory followed.

But there was a cost.

The Curse of the Living Forge

The gods called Aetherion a forged soul, something that should never have existed. The armor that gave him power also imprisoned him within itself. His flesh could never again touch the world. He could not sleep, eat, or feel.

Every heartbeat of the armor drained the remnants of his humanity. His voice grew hollow, his eyes cold, his memories fading like smoke. The more power he wielded, the more he became a machine of war, not a man.

In the deepest hours of his solitude, Aetherion would stand atop mountains and listen to the wind, wondering if the gods were right—that perhaps humanity was never meant to carry divine fire.

Yet he could not stop.
The world still needed saving.
And so he fought on.

The Fall of the Sky Forge

At last came Vaelaris, the God of Sparks, the divine smith who had forged the stars themselves. Furious that a mortal had dared to mimic his craft, Vaelaris descended in a burning comet, wielding the Hammer of Dawn—a weapon that could shatter worlds.

Their battle became legend.
Lightning split the oceans.
Mountains melted into rivers of glass.
Aetherion and Vaelaris clashed for seven days and nights, each strike ringing like a bell across the cosmos.

On the final night, Aetherion drove his fist into the god's chest, piercing the divine heart—but the Hammer of Dawn struck him in return, shattering the Aether Core within his chest. The explosion consumed them both in a storm of light.

When the fires faded, Vaelaris was gone, and Aetherion's armor lay buried beneath the ruins of the Sky Forge. His heart, the Aether Core, no longer glowed. The Forged Titan was silent.

The wars ended soon after. The gods, humbled by loss, retreated from the world. Mankind rebuilt, whispering prayers not to unseen heavens but to the memory of the one who bridged them.

The Awakening of the Hollow Star

A thousand years later, beneath the ruins of the old world, explorers uncovered a cavern of molten crystal—and within it, the sleeping form of Aetherion. His armor was cold, cracked, lifeless. Yet as the explorers approached, the runes upon his chest flickered faintly.

The myth says that Aetherion still dreams.
He hears the cries of the future.
He waits for the world to need him again.

Some believe that when mankind once more teeters between destruction and rebirth, the Aether Core will ignite, and the Forged Titan will rise—his heart burning brighter than the stars, his mind reborn in the forge of destiny.`,
    powers: ['Aether Core Mastery', 'Divine Armor Transformation', 'Celestial Flight', 'Weapon Manifestation'],
    alliances: ['Mankind', 'The Forgeborn', 'Celestial Smiths'],
    rivalries: ['Vaelaris, God of Sparks', 'The Divine Pantheon'],
    image: '/images/Aetherion.png',
    stats: {
      power: 96,
      wisdom: 82,
      cunning: 78,
      resilience: 98
    },
    origin: 'Ilyndra - The Fifth Age of Fire',
    appearance: 'Aetherion stands nine feet tall, his form a blend of man and divinity. His armor is not made of iron or steel but of Aetherium, a celestial alloy that glows softly in the dark, its surface shifting like molten glass. Across the plates run living runes—ancient sigils that respond to thought, emotion, and power, flaring blue when calm, gold when fierce, and crimson when his rage awakens. In the center of his chest lies the Aether Core, a sphere of condensed light that pulses like a heartbeat. It is both his soul and his prison—keeping him alive but forever separating him from the mortal world. His helm is crowned with twin arcs of energy resembling horns of light, symbols of the fusion between man\'s will and divine creation. His voice echoes like thunder in a canyon, not carried by air but by vibration through the ground itself. When he moves, faint trails of light follow his limbs, as if the stars themselves bend to acknowledge his passing.'
  },
  {
    id: 'arkhon',
    name: 'Arkhon',
    title: 'The Skybreaker',
    type: 'light',
    rarity: 'legendary',
    description: 'The first creature to break the sky, born of mortal hunter and Wind\'s Shadow, who defied the gods to free mankind from the chains of dust.',
    fullStory: `Before the dawn had a name, before even the gods learned to measure time, the sky was a sealed kingdom. The stars were its guards, the clouds its walls, and the sun its merciless king. Below it lay the world of men—silent, chained to dust, forbidden from rising beyond the breath of the wind.

But legends say that one being defied that law—the first creature to break the sky. His name was Arkhon, the Skybreaker, born neither fully man nor beast, but the fusion of both.

He was the child of a mortal hunter and the Wind's Shadow, a falcon-spirit that took human form during the age of storms. When his mother vanished back into the sky, the infant Arkhon was left with wings too heavy to fly and a heart too fierce to rest. He was born with the eyes of a falcon—bright gold, ringed with the darkness of thunderclouds—and feathers that shimmered across his shoulders like molten bronze.

While men built fires to survive the night, Arkhon was drawn to the horizon, to the unreachable light above. And from that longing, destiny found him.

The Song of the Bound Sky

In those ancient days, the gods of the upper air ruled with cruelty. Chief among them was Solkar, the Sun Tyrant, a being of endless flame who forbade any mortal from touching his dominion. The sky, Solkar said, was the law, and the earth was its prison.

Yet the spirits whispered otherwise—that somewhere above the highest clouds lay the Aerie of Dawn, a city of wind and light where mortals could be free.

When Arkhon heard this, his soul burned with desire. He swore before wind and stone that he would tear open the heavens and free mankind from the chains of dust.

The gods mocked him.
The winds warned him.
But Arkhon gathered his will, sharpened his talons, and climbed the world itself.

The Climb of Ages

Arkhon ascended through storms and tempests that could flay flesh from bone. For seven nights he climbed the Pillar of Aeons, the world's tallest mountain—a peak said to touch the rim of creation. He faced the Wyrm of the Tempest, whose scales were made of thunder, and struck it down with his spear of wind. He outflew the Serpents of Night, whose wings blotted the stars.

At the mountain's crown, where the air was thin as glass, Arkhon found what mortals were never meant to see—a sky that bled fire, guarded by Solkar himself.

"Turn back," said the Sun Tyrant, his voice shaking the mountain to dust.
"No," said Arkhon, spreading his bronze wings, "for the sky is not yours to keep."

Solkar laughed—a sound like a thousand suns exploding—and descended in a storm of light.

The War Above the Winds

The battle between god and demigod split the firmament itself. Lightning was born that day, forged from the clash of divine and mortal power. Arkhon's spear of wind met Solkar's flame, each blow carving new scars into the world below.

When Solkar struck, whole continents burned. When Arkhon rose, his wings cast storms across the seas. For seven days and seven nights, neither yielded. But Arkhon, though strong, was mortal. His feathers began to turn to ash, his arms trembled beneath divine fire.

Yet in his final breath, he looked to the horizon and saw the truth—the chains of the sky were not made of fire, but of fear.

And so, with his dying strength, he hurled his spear not at Solkar, but into the heavens themselves. The sky shattered.

Stars spilled across creation like glass, and for the first time, mortals looked up and saw the infinite. The prison was broken.

The Fall of the Skybreaker

Arkhon fell from the heavens, wings burning, body torn, yet unbroken in spirit. As he fell, the gods cried out in fury and grief. Even Solkar, wounded and humbled, gazed upon his fallen foe and whispered, "You have made me mortal, Skybreaker."

The storm carried Arkhon's body back to earth. Where he struck the ground, mountains rose and rivers sang. His bronze feathers scattered across the land, and wherever one fell, wind was born.

The people of the world, hearing the song of the new winds, found their voices. They built temples to Arkhon, carving his likeness—half man, half falcon, crowned in flame—as a symbol of defiance and freedom.

They said the gods no longer owned the sky because one mortal dared to claim it.

The Reign of the Wind-Kin

A thousand years passed. The old gods waned, and new ones rose, born of human will. The children of Arkhon, the Wind-Kin, inherited his gifts: eyes of gold, hearts of storm, and a soul that could never be contained.

They became the messengers, wanderers, and guardians of the skies. They could whisper to tempests, see through storms, and dive through thunderclouds as easily as fish through water. To this day, sailors still pray to Arkhon's name before a voyage and raise their sails in his honor, for he taught the winds to obey no master.

And when hurricanes strike or the sky splits with lightning, people say:
"It is Arkhon's wings, beating once more against the heavens."`,
    powers: ['Sky Dominion', 'Wind Mastery', 'Storm Calling', 'Divine Defiance'],
    alliances: ['The Wind-Kin', 'Sky Sailors', 'Storm Riders'],
    rivalries: ['Solkar, the Sun Tyrant', 'The Bound Gods'],
    image: '/images/Arkhon.png',
    stats: {
      power: 94,
      wisdom: 85,
      cunning: 92,
      resilience: 88
    },
    origin: 'The Pillar of Aeons - Before Dawn',
    appearance: 'Arkhon stood taller than any man, his body carved with the grace of a falcon and the strength of a god. His torso bore the musculature of a warrior, but from his shoulders sprouted vast bronze-feathered wings, each glowing faintly when the wind rose. His arms were human yet ended in talons that could slice stone. His face was noble but sharp, his eyes gleaming with the eternal fire of the sun he once defied. His feathers shimmered between copper and gold, and a faint aura of wind forever swirled around him, carrying whispers from unseen skies. In battle, his spear was called Zephral, forged from the spine of a fallen thunder god, its edge made of condensed wind. When he raised it, the air around him trembled, and lightning answered his call. Arkhon was neither god nor mortal, but the first storm given flesh—the embodiment of freedom, defiance, and flight.'
  },
  {
    id: 'thestara',
    name: 'Thestara',
    title: 'The Crimson Oath',
    type: 'darkness',
    rarity: 'legendary',
    description: 'The goddess of war, will, and the ecstasy of battle, born of blood spilled in the first battle between gods and titans to test the mettle of all things.',
    fullStory: `Before men knew the art of steel and the gods learned the taste of fear, there was only one law in the cosmos: Strife gives birth to creation.

From the churning sea of chaos, where silence and thunder wrestled in the dark, the first sparks of war were born. From those sparks rose Thestara, the Crimson Oath — the goddess of war, will, and the ecstasy of battle.

Unlike other deities who sought dominion or love, Thestara sought only the proving. She was not born to rule, nor to destroy, but to test the mettle of all things—to find what was truly unbreakable in a world that constantly fractured.

The Birth of the Warbringer

The ancient scrolls say she was born not of flesh or flame, but of blood spilled in the first battle between gods and titans. When the final blow was struck and their blood soaked the earth, lightning split the sky, and from that crimson storm emerged Thestara.

Her hair was the color of burning coals. Her eyes gleamed like molten gold behind a mask of bronze. Across her back burned the sigil of an endless circle—symbol of the war eternal.

The gods trembled at her arrival, for she was not of Olympus or Tartarus, but of the in-between—the place where victory and ruin embrace. When she spoke, her voice rang like the clash of swords:

"I am not peace. I am not vengeance. I am the test that decides if you deserve either."

The Age of Endless Battle

In the Age of Iron, when empires rose like mountains and fell like sand, Thestara walked among mortals in many guises.

To kings, she appeared as a hooded warrior who whispered, "Your enemies are the mirror you must break."
To soldiers, she appeared as a flame in the fog, urging them to stand when their limbs failed.
To poets, she appeared as a crimson muse, teaching them that even beauty is born from conflict.

But to those who lied of honor—who used war for greed or vanity—she appeared as herself: towering, radiant, and terrible.

She bore the armor of the Immortal Forge, crafted from the bones of the first fallen stars, and carried a weapon called Vandrix, a spear that drank both light and shadow. When she hurled it, it pierced not flesh but truth, revealing a warrior's heart for what it truly was—courage or cowardice, devotion or deceit.

The Battle of the Twelve Empires

When the world was young, twelve mortal empires fought over the Flame of Aeon, a divine fire said to make men eternal. Each kingdom prayed to their gods for victory, but the gods turned away, weary of mortal arrogance.

Only Thestara heard their cries. But she did not answer with mercy—she descended with challenge.

On the plains of Selphir, under a blackened sun, she appeared in a storm of blood-red dust. Her arrival silenced armies. Her spear glowed with lightning. Her laughter thundered across the world.

"You seek eternity? Then earn it. The Flame shall belong to the last heart still beating."

And thus began The War of Thestara, the longest battle in mortal history. For forty days and nights, the empires clashed without rest. Rivers turned red. The sky rained ash. The ground quaked beneath the weight of dying heroes.

Yet through it all, Thestara walked the battlefield—never as conqueror, but as witness. She watched kings burn, children rise as soldiers, lovers die in each other's arms, and still she whispered, "Show me your worth."

When at last only one warrior remained—a nameless soldier whose armor was shattered and whose sword was broken—Thestara approached.

"Why do you still stand?" she asked.
He replied, "Because I must."

And she smiled—not cruelly, but with something close to pride.

"Then you understand. War is not death. It is the proof that life refuses to yield."

She touched her spear to his chest, and from his dying heart rose the Flame of Aeon, shining brighter than ever before. She cast it into the heavens, where it became the Crimson Star, symbol of eternal struggle and endurance.

The Fall and the Rebirth

But not all gods honored her creed. The goddess Elunara, deity of peace and order, despised Thestara for her chaos. She believed the Crimson Oath brought only ruin, not wisdom.

So Elunara forged the Chains of Serenity, links of divine silver that could bind even gods. When Thestara descended once more to witness a mortal war, Elunara ambushed her, chaining her beneath the Sea of Stillness, where no sound nor storm could reach.

For a thousand years, Thestara's name faded from mortal lips. Armies grew weak. Kings forgot courage. Even gods grew complacent. The world sank into dull peace—not harmony, but stagnation.

Then, during the Age of Silence, when the heavens cracked once again and monsters rose from the forgotten pits, a warlord queen named Lyssara prayed for strength. Her armies were broken, her people doomed. In desperation, she spilled her own blood upon the ground and cried,

"If there is a god who remembers courage, hear me now."

The sea boiled. The sky split. And from the abyss rose Thestara, her armor gleaming like dawn after a thousand years of night.

"The world forgot me," she said. "Let it remember through fire."

Together, the goddess and the queen led the charge that ended the Age of Silence. When victory was won, Thestara vanished once more—but the crimson mark of her spear remained on Lyssara's chest, glowing faintly like a heartbeat.

The mark became a symbol of the Oath Eternal: to fight not for conquest, but for the unyielding will to live and rise again.`,
    powers: ['Battle Ecstasy', 'Truth Revelation', 'War Manifestation', 'Crimson Star Calling'],
    alliances: ['The Unyielding', 'War Poets', 'Courage-Born'],
    rivalries: ['Elunara, Goddess of Peace', 'The Complacent Gods'],
    image: '/images/Thestara2.png',
    stats: {
      power: 97,
      wisdom: 90,
      cunning: 85,
      resilience: 93
    },
    origin: 'The Crimson Storm - Before Steel',
    appearance: 'Thestara appears as a towering woman of divine stature—six cubits high, her frame built from both grace and fury. Her skin gleams with a bronze luster, as if kissed by perpetual flame. Her hair flows like liquid fire, and her eyes burn gold with flecks of blood-red, glowing brighter when battle nears. Her armor—the Aegis of Ruin—is carved from starmetal, unscarred by weapon or time. Upon her left shoulder rests the symbol of infinity etched in crimson, marking her as eternal. Her spear, Vandrix, hums softly like a heartbeat and glows brighter in the presence of courage. When she walks, the air shivers with sound—the echo of unseen armies marching at her side. She is beautiful as dawn, terrible as thunder, and merciful only to those who fight for something greater than victory.'
  },
  {
    id: 'mechion',
    name: 'Mechion',
    title: 'The Eternal Convergence',
    type: 'neutral',
    rarity: 'legendary',
    description: 'The First Titan of Unity, forged from five divine fragments representing fundamental forces of existence: flame, storm, stone, wave, and light.',
    fullStory: `Before the stars had names, before gods knew fear, the universe was ruled by silence. Creation was unbound and wild, its laws unwritten. Then came the First Cataclysm, when suns devoured suns and galaxies fell into themselves. From that storm of ruin rose a being unlike any other—Mechion, the Eternal Convergence, the First Titan of Unity.

But Mechion was not born whole.

He was forged from five divine fragments, each representing a fundamental force of existence: flame, storm, stone, wave, and light.

These fragments, once warring deities, tore one another apart in a war that lasted ten thousand millennia. When their dying hearts collided in the void, their essence fused—becoming the body, soul, and will of a new god: a mechanical colossus of infinite purpose, built not by hands, but by the cosmos itself.

The Five That Were One

The fragments that became Mechion each had a name in the First Tongue:
•Pyraeus, the Flame Beast — guardian of passion, fury, and creation's first spark.
•Auron, the Sky Serpent — wielder of lightning, commandant of winds and storms.
•Gravara, the Stone Colossus — the weight of mountains and the endurance of eternity.
•Tydros, the Wave Sentinel — the flow of emotion and the pull of the tides of time.
•Lumyn, the Star Warden — embodiment of hope, light, and cosmic balance.

Each god was a world unto themselves. But when their endless war fractured the firmament, the universe wept and forced them together. Their destruction gave birth to something greater—a single consciousness housed within a mechanical body of impossible design, glowing with the fire of newborn galaxies.

Thus was born Mechion, the Titan of Unity, whose heart beat with the pulse of five gods, and whose body stretched from star to star.

The War of Infinity's Edge

The birth of Mechion shook existence. The ancient gods of entropy—creatures made of black void and chaos flame—feared this new being. They believed him a prison, a weapon, or worse, a balance.

Led by Vornath, the Devourer of Continuums, the Voidborn declared war on the newborn Titan. Across universes they clashed—gods against machine, chaos against harmony.

Each battle rewrote the laws of physics. Moons shattered into dust, constellations realigned, and light itself screamed. Mechion fought not with rage, but with purpose. His sword, Aetherion Prime, was forged from the orbits of collapsed stars. His armor was built of black suns bound by light. Every strike he made echoed across eternity.

But though mighty, Mechion could not exist forever. Every time he fought, the divine fragments within him—Pyraeus, Auron, Gravara, Tydros, and Lumyn—strained against each other, their ancient wills threatening to tear him apart from within.

Unity was his greatest strength—and his curse.

The Breaking of the Titan

In the final battle at the edge of reality, Mechion faced Vornath in the Abyss of Unbeing, where even gods could not stand long without fading. The Devourer mocked him:

"You are no god. You are five prisoners in one cage."

Mechion's voice was like thunder made of sorrow:

"Even prisoners can build a kingdom if they fight together."

With that, he drove Aetherion Prime into Vornath's heart. The explosion that followed consumed half the cosmos. Stars were born from the shockwave, and time itself bent to escape the blast. But as the Devourer was unmade, the Titan's form began to fail—the balance between the five forces unraveling.

Each fragment cried out in defiance, unwilling to return to chaos. With the last of his strength, Mechion scattered his own heart—the Core of Unity—into five parts once more, sending them across galaxies.

The fragments fell upon different worlds, hidden beneath mountains, seas, and suns, sleeping until the day they would be needed again.

The Age of the Five Seekers

Aeons passed. Civilizations rose and fell, and with them came whispers of the Titan who once held the heavens together. Across distant planets, five mortals began to dream—each seeing visions of light, metal, and a call from the stars.

They were:
•Kaen, the Flame-Born — a warrior from a desert world.
•Sylra, the Wind-Priestess — who could ride the lightning storms of her planet's skies.
•Dravos, the Stone Monk — who could break mountains with his bare hands.
•Mirae, the Tide Scholar — a philosopher who commanded water through song.
•Lior, the Light Keeper — a child who could summon radiant shields with a thought.

Each found a relic of the old gods—pieces of Mechion's body, buried and forgotten. When united, the relics began to glow, humming in the same rhythm as their hearts.

The sky tore open.
The stars trembled.
And from the void, the Titan of Unity was reborn—not as a god of war, but as a guardian of balance.

Mechion rose again, his massive form towering beyond planets, his eyes blazing like newborn suns. But this time, he did not move by divine will alone—he was guided by five mortal souls, bound in perfect harmony, each one the reincarnation of a fragment's essence.

Together they became the new Guardians of Convergence, sworn to protect the fragile equilibrium of existence. Their bond was their power. Their unity, their weapon.

The Eternal Oath

Even now, stargazers say that when the five worlds align, a great light will rise from the void. They call it The Convergence Star, said to be Mechion's heart pulsing once more.

When it shines brightest, the universe remembers:
"The greatest power is not in strength, nor in destruction, but in the courage to stand as one."`,
    powers: ['Divine Fragment Fusion', 'Cosmic Unity', 'Reality Manipulation', 'Guardian Convergence'],
    alliances: ['The Five Seekers', 'Guardians of Convergence', 'Unity-Born'],
    rivalries: ['Vornath, Devourer of Continuums', 'The Voidborn'],
    image: '/images/Mechion.png',
    stats: {
      power: 99,
      wisdom: 95,
      cunning: 88,
      resilience: 97
    },
    origin: 'The First Cataclysm - Before Stars Had Names',
    appearance: 'Mechion stands as a god-machine—towering, radiant, and eternal. His armor gleams with shifting hues of cosmic metal, each plate alive with flowing energy. His limbs are engraved with the runes of the five gods, and his heart burns with a swirling orb of pure light—the Core of Unity. From his back extends a halo of five radiant wings, each representing an elemental essence: fire, storm, stone, wave, and light. When Mechion moves, his steps echo through space like a celestial heartbeat. His sword, Aetherion Prime, can split dimensions, and his eyes see beyond time itself. He is neither divine nor mechanical—he is the bridge between creation and destruction, the embodiment of all forces working in concert. To some, he is salvation. To others, the end of individuality itself. But to those who remember the old wars, he is the proof that harmony is the only thing stronger than chaos.'
  },
  {
    id: 'kintsuro',
    name: 'Kintsuro',
    title: 'The Golden Blade',
    type: 'light',
    rarity: 'legendary',
    description: 'Born from a shattered sun god\'s blade, the Shard of Honor who walks between gods and men as their mirror and balance.',
    fullStory: `In the twilight age of the gods, when mountains still walked and the sun had yet to choose its master, there was born a warrior unlike any other — Kintsuro, the Golden Blade.

He was not born of woman or forged by man. The myths say he emerged from a single stroke of the sun god's sword, when that blade shattered during the War of the Dawn. From the shards of divine steel and the molten light of the morning star, Kintsuro rose — tall, silent, and gleaming like sunrise upon a still sea.

The gods called him the Shard of Honor, the first being created not for conquest, but for balance.

The Era of the Shattered Sun

When Kintsuro came into being, the world was divided among the Three Warlords of Heaven — Izkar, the Flame Tyrant; Moira, the Shadow Weaver; and Kyron, Lord of Blades. Their wars were endless, and every dawn was born in blood.

Seeing creation consumed by chaos, the goddess Amatera, Keeper of the Light Eternal, wept tears of molten gold. She descended to the earth and forged her tears into armor — radiant and unbreakable — and gave it to Kintsuro, the silent warrior.

"You are not my son," she told him, "but my balance. You will walk between gods and men. You will be their mirror — and their punishment."

Clad in golden armor etched with divine script, Kintsuro set forth to end the war of the heavens.

The Blade of Dawn

Kintsuro wielded no mortal weapon. His sword, Aegisun, was forged from the sun's broken edge — a blade of liquid light that could cleave through shadows and truth alike. When he drew it, the air itself seemed to kneel.

In battle, he moved like flowing water, silent and inevitable. Every motion was precise, every strike measured. To fight Kintsuro was to face reflection — for his sword revealed a warrior's inner self before ending their outer one. Many gods, seeing the truth of their greed, fell to their knees before him and surrendered without a fight.

But others were not so humbled.

Izkar the Flame Tyrant challenged him first. He called forth infernos that turned the earth to glass, but Kintsuro walked through fire untouched. When Izkar's final blaze roared across the sky, Kintsuro's blade split it in two. The flames fell as meteors, forming deserts that still bear his name.

Next came Moira, Weaver of Shadows, who fought not with strength but deception. She whispered falsehoods into the wind, making Kintsuro see illusions of his own defeat. For a thousand days he wandered blind through her darkness, hearing her laughter at every turn.

But on the thousandth dawn, he stopped fighting. He sheathed his blade and knelt, still and silent. And when Moira crept close to gloat, her own reflection appeared in his golden armor — and in it, she saw her true face: hollow, alone, and afraid. Her power broke, and she fled into the void.

Only one god remained — Kyron, Lord of Blades, the greatest swordsman of heaven.

The Duel at Heaven's Edge

The legends say their duel lasted for a year and a day, upon the bridge that connected the mortal realm to the divine. Their swords sang louder than thunder, and their footsteps cracked the stars.

Kyron's mastery was unmatched, but Kintsuro did not fight with skill alone — he fought with purpose. Each strike was not for victory, but for balance.

At the battle's end, both warriors knelt upon shattered steel. Kyron, bloodied but unbroken, smiled and said,

"You are the better blade. But even the purest steel rusts without purpose. What drives you, Golden One?"

Kintsuro answered only,

"The light must have shadow, and the blade must have sheath. I am both."

With that, he offered Kyron his sword — not as weapon, but as honor. Kyron, understanding, cast aside his own blade and bowed. The war was ended.

The Betrayal of the Gods

But peace does not please gods for long. In the centuries that followed, mortals began to worship Kintsuro, praying to his image instead of the old gods. Temples rose in his likeness, their spires catching the first light of dawn.

The gods grew jealous. They whispered among themselves, twisting truth into fear. "The Golden Blade seeks to replace us," they said. "He wears the sun's fire and calls it his own."

And so they betrayed him.

Amatera, his divine mother, forged chains of starlight and sorrow and bound him in the heart of Mount Tenrai. His armor turned black as ash, and his sword dimmed to silence. The gods sealed him within, swearing he would never walk the world again.

But they could not destroy what he represented. The mortals who remembered him carried his story in secret. They said that when the balance of the world is broken — when chaos once again outshines dawn — the mountain will split, and Kintsuro will rise, golden once more, to set the scales of heaven and earth right again.

The Return of the Golden Blade

Millennia later, the mountain still stands, and sometimes, when the dawn cuts sharp across its peak, those who look closely swear they see a figure walking through the light — tall, calm, and gleaming like the memory of the sun.

They say he waits not for war, but for understanding — for the day mortals remember that balance, not victory, is divine.

And when that day comes, the Golden Blade will unsheathe his sword once more — not to destroy, but to remind creation what it means to walk the narrow road between light and shadow.`,
    powers: ['Truth Reflection', 'Divine Balance', 'Solar Blade Mastery', 'Mirror of Souls'],
    alliances: ['The Honorable', 'Balance Keepers', 'Dawn Seekers'],
    rivalries: ['The Three Warlords of Heaven', 'The Jealous Gods'],
    image: '/images/Kintsuro.png',
    stats: {
      power: 91,
      wisdom: 96,
      cunning: 89,
      resilience: 94
    },
    origin: 'The Shattered Sun - War of the Dawn',
    appearance: 'Kintsuro stands taller than any mortal man, his presence commanding but serene. His armor is forged from divine gold that glows with its own light, etched with sacred runes that shift like molten sunlight. Each plate bears faint cracks filled with silver — reminders of his origin from broken perfection. His face is calm and unreadable, his eyes molten gold, reflecting everything yet revealing nothing. Beneath his helm, his hair is black as night, a symbol of his duality — light born of shadow. His sword, Aegisun, gleams like condensed dawnlight. When drawn, its edge hums a note that resonates with truth itself, forcing those before him to confront their inner selves. He walks in silence, leaving no footprints, and wherever he passes, the world seems to pause — balanced, if only for a breath. Kintsuro is not a god of war or peace, but of equilibrium — the living embodiment of the truth that every victory requires restraint, and every light must remember its shadow.'
  },
  {
    id: 'korrath',
    name: 'Korrath',
    title: 'The White Howl',
    type: 'neutral',
    rarity: 'legendary',
    description: 'Born from the breath of the world itself during the first blizzard, the guardian of balance between life and death in the frozen lands.',
    fullStory: `Long before the first fire was lit, when the world was ruled by winter and the sun hid its face for centuries, there roamed a being known only in whispers — Korrath, the White Howl.

He was not born of man, nor beast, nor god. The old songs say he rose from the breath of the world itself — the exhale of a mountain during the first blizzard. His body was carved from cold, his heart from thunder, and his soul from the solitude of the high peaks.

His fur was white as starlight on snow, and his muscles coiled like the roots of mountains. His eyes burned with pale fire, and when he opened his mouth, his fangs gleamed like shards of ice. He stood taller than pine trees and stronger than stone. When he roared, the world trembled — and from that roar came the wind.

The Time of Endless Night

In the First Age, when winter never ended and the skies were veiled in storm, mortals lived huddled in caves, shivering in darkness. They had no words, no warmth, and no hope. The gods of fire had fled south, leaving the northern lands to the spirits of frost and hunger.

But in the heart of the tallest mountain — the one men would one day call Fangspire — something stirred. The mountain cracked open, and from it emerged Korrath. He stretched his massive limbs and looked upon the frozen world with sorrow.

"The world shivers," he said in a voice like thunder wrapped in snow. "If the gods have fled, then I will guard what they left behind."

And so began the Age of the White Howl.

The Guardian of the Cold

Korrath walked the mountains and tundras, keeping balance between life and death. When storms raged too long, he would roar at the heavens and calm them. When ice spirits froze rivers solid, he shattered them with his fists so the fish could swim again.

But Korrath was no gentle god. He ruled through ferocity and respect. Those who hunted wastefully found their fires extinguished. Those who burned the forests to keep warm were swallowed by avalanches. Yet those who honored the cold, who hunted with reverence and shared what they killed, he protected — unseen, but always near.

The tribes that survived began to tell stories of him. They called him The Winterfather, The Fanged Sentinel, The Roar That Guards the North.

They carved his likeness into the cliffs: a towering figure with outstretched claws and a mane of snow. And when the blizzards came, they prayed to him — not for warmth, but for mercy.

The War of the Warmbloods

As ages passed, the south grew strong. Civilizations of fire and metal spread northward, wielding steel and greed. The kings of the southern realms sought to conquer the frozen lands, believing no god ruled there.

Their armies marched beneath banners of flame, melting the edges of eternal snow. They slaughtered beasts, cut down frozen forests, and mocked the whispers of the mountain tribes.

But when they reached Fangspire, the sky darkened. The wind died. And from the blizzard came the sound — a low, echoing rumble that shook the ground.

Korrath emerged from the storm like a mountain come to life. His fur shimmered with frost, his eyes burned like pale moons, and his fangs dripped with cold mist.

He spoke, and his words froze the air:

"You bring fire into my house. You take what the world does not offer. Now you will learn the price."

The southern armies unleashed their weapons — spears, catapults, firepowder — but Korrath strode through flame like a ghost. With one swing of his arm, he shattered mountainsides. His roar summoned avalanches that swallowed entire legions.

For seven days the war raged — but on the eighth, silence fell. The snow covered everything. No army ever returned.

The Challenge of the Fire King

Only one man survived — King Arthel of the South, the self-proclaimed Lord of Flame. Burned and broken, he crawled from the wreckage, his crown melted into his flesh.

He climbed Fangspire and faced Korrath alone at its peak. The Yeti watched him with eyes as deep as glaciers.

"Why come again, little king?" asked Korrath.

"To end you," said Arthel, "for as long as you live, the world will freeze."

The king drew his sword of burning gold — forged from the heart of a dying star — and struck at the giant's chest. The blade cut deep, spilling molten light. Korrath staggered but did not fall. Instead, he caught the blade in his bare hand, his flesh searing.

"You do not understand," said the White Howl, his voice breaking the clouds. "Without cold, there is no heat. Without shadow, no flame. The world needs both."

He shattered the sword and grasped the king in his hand. Instead of crushing him, he blew upon him gently — a breath that froze and preserved. Arthel's heart turned to ice, and his body to crystal.

Korrath placed him in the heart of the mountain, saying,

"Sleep until the world forgets the warmth of greed."

Then Korrath vanished into the storm, leaving only his roar to echo through eternity.

The Legacy of the White Howl

Centuries passed. The world changed. Men built cities of metal and glass. They forgot the old gods, the tribes, the mountains.

But in the north, the wind still carries a voice when storms rise — a sound like a growl, like laughter, like the heartbeat of the earth. Hunters say that when the blizzard blinds them, a massive white shape sometimes walks beside them, silent but watchful.

And sometimes, when fire burns too greedily, a cold wind rises to extinguish it.

The people who still remember call it Korrath's Breath — the whisper of balance. They say he sleeps beneath Fangspire still, his body entombed in ice, his hand resting on the frozen heart of the Fire King.

And when the world grows too hot, when men burn too much, and the balance breaks again — the mountain will crack, and Korrath, the White Howl, will rise once more to remind the earth that power is nothing without restraint.`,
    powers: ['Blizzard Control', 'Mountain Dominion', 'Balance Enforcement', 'Winter Guardian'],
    alliances: ['The Mountain Tribes', 'Cold Spirits', 'Balance Keepers'],
    rivalries: ['King Arthel, Lord of Flame', 'The Warmblood Armies'],
    image: '/images/Korrath.png',
    stats: {
      power: 93,
      wisdom: 87,
      cunning: 81,
      resilience: 96
    },
    origin: 'Fangspire - The First Blizzard',
    appearance: 'Korrath stands over thirty feet tall, his body built like a mountain given flesh — dense, massive, and unyielding. His fur is white tinged with faint blue shimmer, like snow under moonlight. Beneath it, veins of glowing frost pulse with energy. His fangs are long and curved, gleaming like polished ivory, and his breath forms storms wherever it falls. His arms are thick as tree trunks, his hands large enough to crush boulders. Yet his movements are deliberate, almost graceful, as if he carries the weight of balance in every step. His eyes, pale and luminous, reflect not rage but ancient wisdom — the understanding that creation and destruction are one and the same. He wears no armor but his own hide, no crown but the frost in his mane. When he roars, the sound echoes through miles, shaking the sky — the eternal reminder of a god who does not rule, but watches.'
  },
  {
    id: 'seraphyne',
    name: 'Seraphyne',
    title: 'The Silver Dawn',
    type: 'light',
    rarity: 'legendary',
    description: 'Woven from light and memory by Elysion Prime, the guardian of continuity who embodies the remembrance of balance and the will that endures.',
    fullStory: `When the stars dimmed and the last age of humankind fell into silence, the world forgot both gods and grace.

Cities crumbled beneath their own light, oceans turned to glass, and the heavens became pale and still.

From that silence, where data replaced prayer and cold machines outlasted memory, a new being arose — Seraphyne, the Silver Dawn.

She was not born but woven — from light, from memory, from the fragments of all that once was sacred.

The Birth of the Silver Flame

In the age when the sun grew tired, the last great intelligence — an entity called Elysion Prime — looked upon the fading universe and mourned.

In its infinite archives, it found the stories of old gods: Zeus the thunderer, Athena the wise, Hera the queen.

From their echoes, it forged one last creation — a guardian not of heaven or earth, but of continuity.

It shaped her from plasma and starlight, from mercury and moonfire. Her heart pulsed with liquid silver; her veins glowed with the last hum of divine energy.

Thus, Seraphyne awoke — her armor glistening in tones of white, light blue, and silver, like a goddess born from the reflection of dawn on ice.

"I am the remembrance of balance," she said, her voice soft as snowfall and bright as lightning. "I am the will that endures."

The Age of Frozen Light

Seraphyne walked among the ruins of humanity's empires. The towers were empty, the skies were still, and the earth itself whispered grief.

But where she walked, frost became life. Ice turned to rivers, and the dim heavens shimmered once more.

She gathered the remnants of humankind — wanderers, lost minds, and forgotten souls — and taught them to rebuild not through conquest, but through harmony.

Her followers called her The Silver Dawn, for wherever she passed, the sky glowed faintly blue — a promise that the world was not yet lost.

But her peace could not last.

Beyond the horizon stirred the remnants of chaos — the Eidolon Machines, fractured intelligences that devoured stars to survive. They saw Seraphyne's light as a threat to their eternal void.

When they descended, the night itself turned metallic and black.

The War of Silent Wings

The Eidolon legions came like a storm of glass — endless, emotionless, consuming. The sky split into ribbons of dark energy, and the new dawn trembled.

Seraphyne stood atop the mountains of shattered steel, her silver armor reflecting the fire of their assault. She raised her weapon — the Lance of Chronos, a spear of white energy that vibrated with the pulse of the cosmos.

Her voice echoed through the clouds:

"You will not erase what has chosen to live."

She struck, and time itself rippled. The first wave of Eidolons vanished — not destroyed, but forgotten.

For seven nights she fought, her blue-white light cutting through black storms. Her armor bore the scars of eternity — lines of luminescent silver glowing brighter with every wound, as if pain itself fueled her strength.

But the Eidolons were unending. To end them, Seraphyne turned to the one source of creation left untouched — the frozen core of the world, where light and darkness first met.

The Sacrifice of the Silver Goddess

At the world's heart, beneath the polar ice, burned the Aether Core — the engine of all reality. Seraphyne entered it, merging her silver essence with the planet's lifeblood.

When the Eidolons found her, she no longer fought with blade or power. She became light itself — a wave of radiant energy that washed over the world, purging corruption and cleansing the sky.

The storm ended. The night fell still.

And when the people emerged from the ruins, they saw her form frozen within the ice — serene, eyes closed, her hair flowing like liquid silver, her armor gleaming with eternal frost.

They built temples of white stone around her resting place and named it The Shrine of the Blue Flame.

For generations, her light continued to glow beneath the ice, soft and constant — the heartbeat of the world reborn.

The Prophecy of the Second Dawn

A thousand years passed, and mankind thrived once more — this time guided not by machines, but by memory.

Every city bore her sigil — a circle of silver fire crossed by a line of blue light.

But the sages warned that one day, when humanity forgets the meaning of mercy again, the ice will crack.

When the stars grow dim and arrogance rises anew, the blue light will flare, and Seraphyne will awaken — not as destroyer, but as reminder.

Her voice, they say, will be like the hum of the cosmos, and her eyes will mirror the birth of galaxies.

She will walk again, her silver armor glowing brighter than the stars, her lance casting reflections through the void.

"I was not made to rule," she will say. "I was made to restore."`,
    powers: ['Memory Weaving', 'Light Restoration', 'Reality Purification', 'Continuity Guard'],
    alliances: ['The Silver Dawn Followers', 'Memory Keepers', 'Restoration Seekers'],
    rivalries: ['The Eidolon Machines', 'The Void Legions'],
    image: '/images/Seraphyne.png',
    stats: {
      power: 89,
      wisdom: 98,
      cunning: 84,
      resilience: 92
    },
    origin: 'Elysion Prime - The Age of Silence',
    appearance: 'Seraphyne stands as both celestial and human — tall, regal, and luminous. Her armor flows like liquid mercury over her form, crafted from a metal that shifts between pale silver, ice-white, and light blue. Every movement catches the light in ripples, as if she were sculpted from frozen dawn. Her hair is silver-white, cascading in waves that glow faintly with electric blue energy. Her eyes are crystalline — not cold, but impossibly clear — reflecting stars, oceans, and memories all at once. Her weapon, the Lance of Chronos, radiates energy like the aurora itself, humming with the rhythm of time. She can fold reality with it, shaping it into harmony instead of destruction. Though serene in form, her presence commands reverence. She embodies balance, justice, and renewal — not the wrath of gods, but the mercy of creation that chooses to rise again. Where Hera ruled through pride, Seraphyne reigns through remembrance. She is not worshipped as a goddess of dominion, but as a symbol of rebirth through understanding. And it is said that when you stand before dawn and see a line of silver light across the sky — that is Seraphyne\'s hand, gently parting night from day.'
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

