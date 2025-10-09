import { FC } from 'react';
import { characters } from '../../data/characters';
import CharacterCard from './CharacterCard';

const CharacterShowcase: FC = () => {
  return (
    <section id="legends" className="py-16 bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            Myth Memes Origins
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Where legends are born, battles rage across realms of light and darkness, 
            and the future of myth begins today.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-items-center">
          {characters.map((character) => (
            <CharacterCard 
              key={character.id} 
              character={character} 
              size="medium"
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="/aboutus" className="bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 font-bold py-3 px-8 rounded-full hover:from-yellow-500 hover:to-orange-600 transform hover:scale-105 transition-all duration-300 shadow-lg">
            Explore All Legends
          </a>
        </div>
      </div>
    </section>
  );
};

export default CharacterShowcase;

