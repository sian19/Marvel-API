import React from 'react';

import './comic-result.css';

function ComiResult(props) {

    return (
        <div className='result hq'>
            {
                props.result.map((res) => {

                    let comic = res.comics.items;
                    let keyComic = 0;
                    let nullComic = comic == '' ? 'Não possui' : '';

                    let event = res.events.items;
                    let keyEvent = 0;
                    let nullEvent = event == '' ? 'Não possui' : '';

                    let serie = res.series.items;
                    let keySerie = 0;
                    let nullSerie = serie == '' ? 'Nâo possui' : '';

                    let storie = res.series.items;
                    let keyStorie = 0;
                    let nullStorie = storie == '' ? 'Não possui' : '';

                    return (
                        <div key={res.id} className="comics">
                            <section>
                                <h3>Quadrinhos:</h3>
                                {comic.map((it) => {

                                    keyComic += 1;

                                    return (
                                        <h4 key={keyComic}>{it.name}</h4>
                                    )

                                })}
                                <p>{nullComic}</p>
                            </section>

                            <section>
                                <h3>Eventos:</h3>
                                {event.map((it) => {

                                    keyEvent += 1;

                                    return (
                                        <h4 key={keyEvent}>{it.name}</h4>
                                    )

                                })}
                                <p>{nullEvent}</p>
                            </section>

                            <section>
                                <h3>Séries:</h3>
                                {serie.map((it) => {

                                    keySerie += 1;

                                    return (
                                        <h4 key={keySerie}>{it.name}</h4>
                                    )

                                })}
                                <p>{nullSerie}</p>
                            </section>

                            <section>
                                <h3>Estória:</h3>
                                {storie.map((it) => {

                                    keyStorie += 1;

                                    return (
                                        <h4 key={keyStorie}>{it.name}</h4>
                                    )

                                })}
                                <p>{nullStorie}</p>
                            </section>
                        </div>

                    )
                })
            }

        </div>
    );

}

export default ComiResult;