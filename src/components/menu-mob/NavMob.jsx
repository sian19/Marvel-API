import React, { useState, useEffect, useContext } from 'react';

import styled from 'styled-components';
import './menu-mob.css';

import { DataContext } from '../context/AuthContext';

import { Link } from 'react-router-dom';

const Navi = styled.nav`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 188px;
    background-color: var(--brown);
    transition: 0.7s;
    display: none;
`
const Ul = styled.ul`
    padding-top: 55px;
`

const Li = styled.li`
   &:nth-of-type(1n + 2){
       padding-top: 10px;
   }

    padding-left: 10px;
`

function NavMenu(props) {

    const { selector, addSelector, colorMenu1, colorMenu2, colorMenu3, addColorM3, addColorM1, addColorM2, onShow } = useContext(DataContext);

    const [hide, setHide] = useState('0');

    useEffect(() => {

        setHide(props.show ? '0' : '-100%');

        addColorM1(selector);
        addColorM2(selector);

    }, [props.show, selector]);

    return (
        <Navi className='menu mob' style={{ left: hide }}>
            <Ul>
                <Li><Link to='/heroes' onClick={() => {

                    addSelector(1);

                }}

                    style={{ color: colorMenu1 }}

                >Lista de heroes</Link></Li>

                <Li><Link to='/comics' onClick={() => {

                    addSelector(2);

                }}

                    style={{ color: colorMenu2 }}

                >Comics</Link></Li>

                <Li>
                    <Link to='/characters' onClick={() => {

                        addSelector(3);

                    }}

                        style={{ color: colorMenu3 }}>Characters</Link>
                </Li>
            </Ul>
        </Navi>
    )
}

export default NavMenu;