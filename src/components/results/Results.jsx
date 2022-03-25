import React, { useContext } from 'react';

import { DataContext } from '../context/AuthContext';

import img from '../../assets/Homem-Aranha-Png-1024x1024-removebg-preview.png';

import './results.css';

import CharResult from './CharResult';
import ComiResult from './ComiResult';

let click = '';
let result = null;

function Results(props) {

    const { show, onShow, char, selector } = useContext(DataContext);

    let text = props.text;

    if (show && text != '' && click == '') {

        click = 'clicked';

        result = char.filter((it) => {

            return it.name == text

        })

        if (result == '') {

            return (
                <div className='clear'>
                    <h3>Nada foi encontrado!</h3>
                    <img src={img} alt="img" />

                </div>
            );
        }

        else if (selector == 3) {

            return <CharResult result={result} />

        }

        else {

            return <ComiResult result={result} />

        }

    }

    else if (show && text != '' && click == 'clicked') {

        click = '';
        onShow(0)
        return (
            <></>
        )
    }

    else if (!show && click == '') {

        return (
            <></>
        )
    }

    else if (show && click == 'clicked') {

        onShow(0)
        click = '';

        return (
            <></>
        )
    }

    else if (show && text == '') {
        click = 'clicked';

        return (
            <div className='clear'>
                <h3>Nada foi encontrado!</h3>
                <img src={img} alt="img" />
            </div>
        )


    }


}

export default Results;