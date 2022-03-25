import React from 'react';

import './charactersText.css';

import Search from '../search/Search';

function CharactersText() {
    return (
        <>
            <h2>Digite na barra abaixo o nome do herói que você quer buscar!</h2>

            <Search />
        </>
    );
}

export default CharactersText;