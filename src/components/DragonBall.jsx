import React, { useState } from 'react';
import DbzCard from './DbzCard';
import data from '../assets/DragonBall.json'; // Assuming the JSON data is in a file called data.json
import '../index.css'


const App = () => {
    const [searchTerm, setSearchTerm] = useState('');

    // Function to filter characters based on search term
    const filteredCharacters = data.items.filter(character =>
        character.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="min-h-screen bg-gray-900 text-white p-8">
        <h1 className="text-4xl font-bold text-center m-8">Dragon Ball Wiki</h1>
        <div className="flex justify-center my-10">
            <input
            type="text"
            placeholder="Search characters..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="p-2 rounded-lg text-gray-900 sm:w-[360px] lg:w-[520px]"
            />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredCharacters.map(character => (
                <DbzCard key={character.id} character={character} />
            ))}
        </div>
        </div>
    );
};

export default App;
