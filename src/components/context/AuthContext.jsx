import React, { createContext, useState, useEffect } from 'react';

import axios from 'axios';

export const DataContext = createContext();

export function AuthProvider(props) {

    const time = '1647469008';
    const publicKey = '12b6f1356ac4d5ac9cadc8936184bd3d';
    const md5Now = 'fb7b74f129c1635d187f7f392458597d';

    const [char, setChar] = useState([]);

    useEffect(() => {

        axios.get(`https://gateway.marvel.com/v1/public/characters?ts=${time}&apikey=${publicKey}&hash=${md5Now}`)

            .then((response) => {
                setChar(response.data.data.results
                );

            })
            .catch((e) => {
                console.log(e)
            })

    }, [])

    const [selector, setSelector] = useState(1);

    const [colorMenu1, setColorMenu1] = useState('');
    const [colorMenu2, setColorMenu2] = useState('');
    const [colorMenu3, setColorMenu3] = useState('');

    const [show, setShow] = useState(false);


    const onShow = (value) => {

        setShow(value == 0 ? false : true);

    }


    const addColorM1 = (value) => {
        setColorMenu1(value == 1 ? 'var(--red)' : 'var(--white)');
    }

    const addColorM2 = (value) => {
        setColorMenu2(value == 2 ? 'var(--red)' : 'var(--white)');
    }

    const addColorM3 = (value) => {
        setColorMenu3(value == 3 ? 'var(--red)' : 'var(--white');
    }

    const addSelector = (value) => {
        setSelector(value);
    }

    return (
        <DataContext.Provider value={{ selector, addSelector, colorMenu1, addColorM1, colorMenu2, addColorM2, colorMenu3, addColorM3, show, onShow, char }}>
            {props.children}
        </DataContext.Provider>
    )
}