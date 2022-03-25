import React from 'react';

import './main.css';
import Header from '../header/Header';

import CharactersText from '../characters-text/CharactersText';
import ComicsText from '../comics-text/ComicsText';
import Heroes from '../heroes/Heroes';

import styled from 'styled-components';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const Center = styled.div`
    max-width: 1480px;
    margin: auto;
    padding: 40px 2%;
    padding-top: 140px;
`

function Main() {

    return (
        <main className="container">
            <Router>

                <Header />

                <Center className='center'>

                    <Routes>

                        <Route path='/heroes' element={<Heroes />}></Route>
                        <Route path='/' element={<Heroes />}></Route>

                        <Route path='/comics' element={<ComicsText />}></Route>

                        <Route path='/characters' element={<CharactersText />}></Route>

                    </Routes>

                </Center>
            </Router>

        </main>
    );
}

export default Main;