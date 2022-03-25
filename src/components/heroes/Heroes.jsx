import React, { useContext } from 'react';

import styled from 'styled-components';

import { DataContext } from '../context/AuthContext';

const Title = styled.h3`
    color: var(--red);
    text-align: center;
    padding-bottom: 12px;

    @media(max-width: 500px){
        font-size: 0.938em;
    }
`

const Container = styled.div`
    max-width: 500px;
    padding: 18px 2%;
    margin: auto;
    background-color: var(--brown);
    border-radius: 10px;
`
const List = styled.p`
    color: var(--white);
    line-height: 27px;
    text-align: center;

    @media(max-width: 500px){
        font-size: 0.75em;
    }

`

function Heroes() {

    const { char } = useContext(DataContext);

    return (
        <>
            <h2>Lista de Heroes</h2>

            <Container className='name-heroes'>
                <Title>Nomes no qual você pode buscar:</Title>
                {
                    char.map((item) => {

                        return (
                            <List key={item.id}>{item.name}</List>
                        )

                    })
                }
            </Container>
        </>
    )
}

export default Heroes;