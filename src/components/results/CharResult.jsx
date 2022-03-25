import React from 'react';


function CharResult(props) {
    return (

        <div className='result' >
            {

                props.result.map((res) => {

                    if (res.description == '') {
                        res.description = 'Nâo possui';
                    }

                    return (
                        <div key={res.id} className="char">
                            <div className='avatar'>
                                <img src={`${res.thumbnail.path}.${res.thumbnail.extension}`} alt={res.name} />
                            </div>

                            <section>
                                <h3>Nome: </h3>
                                <h3>{res.name}</h3>
                            </section>

                            <section>
                                <h4>Descriçâo: </h4>
                                <h4>{res.description}</h4>
                            </section>

                            <section>
                                <h4>Biografia:</h4>
                                <a href={res.urls[1].url} target="_blank">Clique aqui</a>
                            </section>

                        </div>
                    )
                })

            }

        </div>
    )
}

export default CharResult;