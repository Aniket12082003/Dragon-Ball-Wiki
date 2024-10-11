import React from 'react';
import '../index.css'

const DbzCard = ({ character }) => {
    return (
        <div className="relative h-80 w-full perspective">
            {/* Flip Card Container */}
            <div className="relative h-full w-full transition-transform duration-500 transform-style-3d hover:rotate-y-180">
                
                {/* Front side of the card */}
                <div className="absolute inset-0 bg-gray-800 rounded-lg shadow-lg backface-hidden p-4 text-center">
                    <h2 className="text-2xl font-bold mb-8 ">{character.name}</h2>
                    <p className='text-xl'><span className="font-semibold text-xl">Ki:</span> {character.ki}</p>
                    <p className='text-xl'><span className="font-semibold text-xl">Max Ki:</span> {character.maxKi}</p>
                    <p className='text-xl'><span className="font-semibold text-xl">Race:</span> {character.race}</p>
                    <p className='text-xl'><span className="font-semibold text-xl">Affiliation:</span> {character.affiliation}</p>
                </div>

                {/* Back side of the card (Description) */}
                <div className="absolute inset-0 bg-gray-700 rounded-lg shadow-lg backface-hidden transform rotate-y-180 p-4">
                    <h2 className="text-2xl font-bold mb-8 text-center">{character.name}</h2>
                    <p className='text-xl'>{character.description}</p>
                </div>
            </div>
        </div>
    );
};

export default DbzCard;
