import { FC } from 'react';
import { Character } from '../../data/characters';
import { useNavigate } from 'react-router-dom';

interface CharacterCardProps {
  character: Character;
  size?: 'small' | 'medium' | 'large';
}

const CharacterCard: FC<CharacterCardProps> = ({ character, size = 'medium' }) => {
  const navigate = useNavigate();

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'light':
        return 'border-yellow-400 bg-gradient-to-br from-yellow-50 to-amber-100';
      case 'darkness':
        return 'border-red-600 bg-gradient-to-br from-red-50 to-rose-100';
      case 'neutral':
        return 'border-blue-400 bg-gradient-to-br from-blue-50 to-cyan-100';
      default:
        return 'border-gray-400 bg-gradient-to-br from-gray-50 to-gray-100';
    }
  };

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case 'legendary':
        return 'text-amber-600 bg-amber-100';
      case 'epic':
        return 'text-purple-600 bg-purple-100';
      case 'rare':
        return 'text-blue-600 bg-blue-100';
      case 'common':
        return 'text-gray-600 bg-gray-100';
      default:
        return 'text-gray-600 bg-gray-100';
    }
  };

  const sizeClasses = {
    small: 'w-48 h-64',
    medium: 'w-80 h-96',
    large: 'w-80 h-96'
  };

  const handleCardClick = () => {
    navigate(`/character/${character.id}`);
  };

  return (
    <div 
      className={`${sizeClasses[size]} ${getTypeColor(character.type)} rounded-xl border-2 shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 cursor-pointer overflow-hidden`}
      onClick={handleCardClick}
    >
      {/* Character Image */}
      <div className="h-3/5 relative overflow-hidden">
        <img
          src={character.image}
          alt={character.name}
          className="w-full h-full object-cover object-top"
          loading="lazy"
        />
        <div className="absolute top-2 right-2">
          <span className={`px-2 py-1 rounded-full text-xs font-bold ${getRarityColor(character.rarity)}`}>
            {character.rarity.toUpperCase()}
          </span>
        </div>
      </div>

      {/* Character Info */}
      <div className="h-2/5 p-4 flex flex-col justify-between">
        <div>
          <h3 className="font-bold text-lg text-gray-800 mb-1">{character.name}</h3>
          <p className="text-sm text-gray-600 mb-2">{character.title}</p>
          <p className="text-xs text-gray-700 line-clamp-2">{character.description}</p>
        </div>
        
        {/* Stats Bar */}
        <div className="mt-2">
          <div className="flex justify-between text-xs text-gray-600 mb-1">
            <span>Power: {character.stats.power}</span>
            <span>Wisdom: {character.stats.wisdom}</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-1">
            <div 
              className="bg-gradient-to-r from-yellow-400 to-orange-500 h-1 rounded-full" 
              style={{ width: `${(character.stats.power + character.stats.wisdom) / 2}%` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterCard;

