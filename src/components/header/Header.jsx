import React, { useContext, useEffect } from 'react';

import './header.css';

import Logo from '../../assets/logo.png';

import { DataContext } from '../context/AuthContext';

import { Link } from 'react-router-dom';

import MenuMob from '../menu-mob/MenuMob';

const saved = 'save';

function Header() {

    const { colorMenu1, addColorM1 } = useContext(DataContext);
    const { colorMenu2, addColorM2 } = useContext(DataContext);
    const { colorMenu3, addColorM3 } = useContext(DataContext);

    const { selector, addSelector } = useContext(DataContext);

    useEffect(() => {

        let save = JSON.parse(localStorage.getItem(saved));
        addSelector(save);

        if (save == null) {
            addSelector(1);
        }

    }, [])


    useEffect(() => {

        localStorage.setItem(saved, JSON.stringify(selector));

        addColorM1(selector);
        addColorM2(selector);
        addColorM3(selector);

    }, [selector]);

    return (
        <header>
            <div className='center'>
                <div className='logo'><img src={Logo} alt="logo" /></div>
                <nav className='menu desktop'>
                    <ul>
                        <li><Link to='/heroes' style={{ color: colorMenu1, }} onClick={() => {

                            addSelector(1);


                        }}>Lista de heroes</Link></li>

                        <li><Link to='/comics' style={{ color: colorMenu2, }} onClick={() => {

                            addSelector(2);


                        }}>Comics</Link></li>

                        <li><Link to='/characters' style={{ color: colorMenu3, }}
                            onClick={() => {

                                addSelector(3);

                            }}

                        >Characters</Link></li>

                    </ul>
                </nav>
                <MenuMob />
            </div>
        </header>
    );
}

export default Header;