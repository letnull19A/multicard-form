import React, { useEffect } from 'react'

export default function Card(props) {

    const { id, data, handleInput, handleRemove } = props

    return (
        <div className='card'>
            <p>ID: {id}</p>
            <div className="card__body">
                {data.pairs.map((pair, index) =>
                    <div className='card__row'>
                        <span>{index + 1}. от</span>
                        <input
                            onChange={(e) => handleInput(e, id, index)}
                            defaultValue={pair['start']}
                            name='start'
                            className='card__row__input'
                            type="text" />
                        <span>до</span>
                        <input
                            onChange={(e) => handleInput(e, id, index)}
                            defaultValue={data.pairs[index]['end']}
                            name='end'
                            className='card__row__input'
                            type="text" />
                    </div>
                )}
            </div>
            <div className='card__footer'>
                <button onClick={() => handleRemove(data.id)}>Удалить</button>
            </div>
        </div>
    )
}
