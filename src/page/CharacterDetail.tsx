import { FC, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getCharacterById, characters } from '../data/characters';
import CharacterCard from '../components/Characters/CharacterCard';

const CharacterDetail: FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const character = id ? getCharacterById(id) : null;
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Scroll selected character to center
  useEffect(() => {
    if (character && scrollContainerRef.current) {
      const currentIndex = getCurrentCharacterIndex();
      const container = scrollContainerRef.current;
      const itemWidth = 96; // w-24 = 96px
      const gap = 16; // gap-4 = 16px
      const containerWidth = container.clientWidth;
      const scrollPosition = (currentIndex * (itemWidth + gap)) - (containerWidth / 2) + (itemWidth / 2);
      
      container.scrollTo({
        left: Math.max(0, scrollPosition),
        behavior: 'smooth'
      });
    }
  }, [character]);

  // Navigation functions
  const getCurrentCharacterIndex = () => {
    if (!character) return -1;
    return characters.findIndex(char => char.id === character.id);
  };

  const navigateToPrevious = () => {
    const currentIndex = getCurrentCharacterIndex();
    if (currentIndex > 0) {
      navigate(`/character/${characters[currentIndex - 1].id}`);
    } else {
      navigate(`/character/${characters[characters.length - 1].id}`);
    }
  };

  const navigateToNext = () => {
    const currentIndex = getCurrentCharacterIndex();
    if (currentIndex < characters.length - 1) {
      navigate(`/character/${characters[currentIndex + 1].id}`);
    } else {
      navigate(`/character/${characters[0].id}`);
    }
  };

  const navigateToCharacter = (characterId: string) => {
    navigate(`/character/${characterId}`);
  };

  if (!character) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-4xl font-bold mb-4">Character Not Found</h1>
          <button 
            onClick={() => navigate('/')}
            className="bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 font-bold py-3 px-6 rounded-full hover:from-yellow-500 hover:to-orange-600 transform hover:scale-105 transition-all duration-300"
          >
            Return Home
          </button>
        </div>
      </div>
    );
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'light':
        return 'from-yellow-400 to-amber-500';
      case 'darkness':
        return 'from-purple-600 to-indigo-600';
      case 'neutral':
        return 'from-blue-400 to-cyan-500';
      default:
        return 'from-gray-400 to-gray-500';
    }
  };

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case 'legendary':
        return 'bg-amber-600 text-white';
      case 'epic':
        return 'bg-purple-600 text-white';
      case 'rare':
        return 'bg-blue-600 text-white';
      case 'common':
        return 'bg-gray-600 text-white';
      default:
        return 'bg-gray-600 text-white';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 mt-[64px]">
      <div className="container mx-auto px-4 py-12">
        {/* Navigation Controls */}
        <div className="mb-8 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
          {/* Back Button */}
          <button 
            onClick={() => navigate('/')}
            className="bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-400/40 rounded-lg px-5 py-2.5 text-white hover:from-amber-500/30 hover:to-orange-500/30 transition-all duration-300 flex items-center gap-2 hover:scale-105"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span className="font-medium">Back to Legends</span>
          </button>

          {/* Character Navigation */}
          <div className="flex gap-3 items-center">
            <button 
              onClick={navigateToPrevious}
              className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white rounded-lg px-5 py-2.5 transition-all duration-300 flex items-center gap-2 hover:scale-105"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              <span className="font-medium">Previous</span>
            </button>
            <button 
              onClick={navigateToNext}
              className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white rounded-lg px-5 py-2.5 transition-all duration-300 flex items-center gap-2 hover:scale-105"
            >
              <span className="font-medium">Next</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Character Quick Selector */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-white mb-4">Browse All Legends</h3>
          <div ref={scrollContainerRef} className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            {characters.map((char) => (
              <button
                key={char.id}
                onClick={() => navigateToCharacter(char.id)}
                className={`flex-shrink-0 w-20 h-20 sm:w-24 sm:h-24 rounded-xl border-3 transition-all duration-300 hover:scale-110 overflow-hidden ${
                  char.id === character?.id
                    ? 'border-yellow-400 ring-2 ring-yellow-400/50'
                    : 'border-gray-600 hover:border-gray-400'
                }`}
                title={`${char.name} - ${char.title}`}
              >
                <img
                  src={char.image}
                  alt={char.name}
                  className="w-full h-full object-cover object-top"
                />
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Character Card */}
          <div className="lg:col-span-1 flex justify-center">
            <div className="">
              <CharacterCard character={character} size="large" />
            </div>
          </div>

          {/* Character Details */}
          <div className="lg:col-span-2 space-y-8">
            {/* Header */}
            <div className="text-center lg:text-left">
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-4">
                <span className={`px-4 py-2 rounded-full text-sm font-bold ${getRarityColor(character.rarity)}`}>
                  {character.rarity.toUpperCase()}
                </span>
                <span className={`px-4 py-2 rounded-full text-sm font-bold bg-gradient-to-r ${getTypeColor(character.type)} text-white`}>
                  {character.type.toUpperCase()}
                </span>
              </div>
              <h1 className="text-5xl font-bold text-white mb-2">{character.name}</h1>
              <h2 className="text-2xl text-gray-300 mb-4">{character.title}</h2>
              <p className="text-lg text-gray-300 leading-relaxed">{character.description}</p>
            </div>

            {/* Stats */}
            <div className="bg-black/30 rounded-xl p-6 backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">Power Statistics</h3>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="flex justify-between text-white mb-2">
                    <span>Power</span>
                    <span>{character.stats.power}</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-3">
                    <div 
                      className="bg-gradient-to-r from-red-500 to-red-600 h-3 rounded-full transition-all duration-1000" 
                      style={{ width: `${character.stats.power}%` }}
                    ></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-white mb-2">
                    <span>Wisdom</span>
                    <span>{character.stats.wisdom}</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-3">
                    <div 
                      className="bg-gradient-to-r from-blue-500 to-blue-600 h-3 rounded-full transition-all duration-1000" 
                      style={{ width: `${character.stats.wisdom}%` }}
                    ></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-white mb-2">
                    <span>Cunning</span>
                    <span>{character.stats.cunning}</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-3">
                    <div 
                      className="bg-gradient-to-r from-purple-500 to-purple-600 h-3 rounded-full transition-all duration-1000" 
                      style={{ width: `${character.stats.cunning}%` }}
                    ></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-white mb-2">
                    <span>Resilience</span>
                    <span>{character.stats.resilience}</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-3">
                    <div 
                      className="bg-gradient-to-r from-green-500 to-green-600 h-3 rounded-full transition-all duration-1000" 
                      style={{ width: `${character.stats.resilience}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Powers */}
            <div className="bg-black/30 rounded-xl p-6 backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-white mb-4">Powers & Abilities</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {character.powers.map((power, index) => (
                  <div key={index} className="bg-gradient-to-r from-yellow-400/20 to-orange-500/20 border border-yellow-400/30 rounded-lg p-3">
                    <span className="text-yellow-400 font-semibold">{power}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Alliances & Rivalries */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-black/30 rounded-xl p-6 backdrop-blur-sm">
                <h3 className="text-xl font-bold text-white mb-4">Alliances</h3>
                <div className="space-y-2">
                  {character.alliances.map((ally, index) => (
                    <div key={index} className="text-green-400 bg-green-400/10 border border-green-400/30 rounded-lg p-2">
                      {ally}
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-black/30 rounded-xl p-6 backdrop-blur-sm">
                <h3 className="text-xl font-bold text-white mb-4">Rivalries</h3>
                <div className="space-y-2">
                  {character.rivalries.map((rival, index) => (
                    <div key={index} className="text-red-400 bg-red-400/10 border border-red-400/30 rounded-lg p-2">
                      {rival}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Origin & Appearance */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-black/30 rounded-xl p-6 backdrop-blur-sm">
                <h3 className="text-xl font-bold text-white mb-4">Origin</h3>
                <p className="text-gray-300">{character.origin}</p>
              </div>
              <div className="bg-black/30 rounded-xl p-6 backdrop-blur-sm">
                <h3 className="text-xl font-bold text-white mb-4">Appearance</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{character.appearance}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Full Story */}
        <div className="mt-16 bg-black/30 rounded-xl p-8 backdrop-blur-sm">
          <h3 className="text-3xl font-bold text-white mb-6 text-center">The Legend of {character.name}</h3>
          <div className="prose prose-invert max-w-none">
            <p className="text-gray-300 leading-relaxed whitespace-pre-line text-lg">
              {character.fullStory}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterDetail;

