import React, { useState, useEffect } from 'react';

import './menu-mob.css';

import NavMob from './NavMob';

function MenuMob() {

    const [show, setShow] = useState(false);

    return (
        <>
            <div className='hamburguer' onClick={() => {

                setShow(!show);

            }}>
                <input type="checkbox" id='menu' />
                <label htmlFor="menu">
                    <span></span>
                    <span></span>
                    <span></span>
                </label>
            </div>

            <NavMob show={show} />
        </>
    );
}

export default MenuMob;