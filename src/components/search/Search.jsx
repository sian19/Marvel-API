import React, { useState, useContext } from 'react';

import { DataContext } from '../context/AuthContext';

import searchImg from '../../assets/pesquisa.png';

import './search.css';

import Results from '../results/Results';

function Search() {

    const { onShow } = useContext(DataContext);

    const [text, setText] = useState('');

    function addText(e) {

        let eve = e.target.value;
        setText(eve);
    }

    return (
        <>

            <div className='search'>

                <input type="text" onChange={addText} />

                <button onClick={() => {

                    onShow(1);

                }}><img src={searchImg} alt="search" /></button>

            </div>

            <Results text={text} />
        </>
    );

}

export default Search;
