import { useState, useEffect, useRef } from 'react';
import './App.css';
import Card from './Card';
import { v4 as uuidv4 } from 'uuid';

function App() {

    const [list, setList] = useState([]);

    useEffect(() => {
        setList([
            {
                id: uuidv4(),
                days: [],
                pairs: [
                    { start: '00:00', end: '00:00' },
                    { start: '00:00', end: '00:00' },
                    { start: '00:00', end: '00:00' },
                    { start: '00:00', end: '00:00' },
                    { start: '00:00', end: '00:00' },
                    { start: '00:00', end: '00:00' },
                    { start: '00:00', end: '00:00' },
                    { start: '00:00', end: '00:00' },
                    { start: '00:00', end: '00:00' }
                ]
            }
        ]);
    }, [])

    const handleInput = (e, id, pairId) => {
        const { name, value } = e.target;

        const newValues = list;

        console.log(name, value);

        if (name === 'start')
            newValues[id].pairs[pairId].start = value;

        if (name === 'end')
            newValues[id].pairs[pairId].end = value;

        setList(newValues);
    }

    const handleAdd = () => {
        setList([
            ...list,
            {
                id: uuidv4(),
                days: [],
                pairs: [
                    { start: '00:00', end: '00:00' },
                    { start: '00:00', end: '00:00' },
                    { start: '00:00', end: '00:00' },
                    { start: '00:00', end: '00:00' },
                    { start: '00:00', end: '00:00' },
                    { start: '00:00', end: '00:00' },
                    { start: '00:00', end: '00:00' },
                    { start: '00:00', end: '00:00' },
                    { start: '00:00', end: '00:00' }
                ]
            }
        ]);
    }

    const handleRemove = (id) => {
        setList(prevState => prevState.filter(e => e.id !== id));
    }

    return (
        <>
            <div className="list">
                {list.map((item, index) => (
                    <Card
                        key={index}
                        id={index}
                        data={item}
                        handleRemove={handleRemove}
                        handleInput={handleInput} />
                ))}
                <button onClick={() => handleAdd()}>Добавить</button>
            </div>
            <button>Отправить на сервер</button>
        </>
    );
}

export default App;
