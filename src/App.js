import { useState, useEffect, useRef } from "react";
import "./App.css";
import Card from "./Card";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [list, setList] = useState([]);

  useEffect(() => {
    setList([
      {
        id: uuidv4(),
        days: [],
        pairs: [
          { start: "06:00", end: "06:00" },
          { start: "06:00", end: "06:00" },
          { start: "06:00", end: "06:00" },
          { start: "06:00", end: "06:00" },
          { start: "06:00", end: "06:00" },
          { start: "06:00", end: "06:00" },
          { start: "06:00", end: "06:00" },
          { start: "06:00", end: "06:00" },
          { start: "06:00", end: "06:00" },
        ],
      },
    ]);
  }, []);

  const handleSelect = (e, card, row, customName) => {
    console.log(e.target.value, e.target.name, card, row, customName);

    const { name, value } = e.target

    const newList = list;

    if (customName === 'start' && name === 'hour') {
        const startTime = newList[card].pairs[row].start;
        newList[card].pairs[row].start = value + startTime.substring(2, 5);
    }

    if (customName === 'start' && name === 'minutes') {
        const startTime = newList[card].pairs[row].start;
        newList[card].pairs[row].start = startTime.substring(0, 3) + value;
    }

    if (customName === 'end' && name === 'hour') {
        const startTime = newList[card].pairs[row].end;
        newList[card].pairs[row].end = value + startTime.substring(2, 5);
    }

    if (customName === 'end' && name === 'minutes') {
        const startTime = newList[card].pairs[row].end;
        newList[card].pairs[row].end = startTime.substring(0, 3) + value;
    }

    setList([...newList])

  };

  const handleAdd = () => {
    setList([
      ...list,
      {
        id: uuidv4(),
        days: [],
        pairs: [
          { start: "06:00", end: "06:00" },
          { start: "06:00", end: "06:00" },
          { start: "06:00", end: "06:00" },
          { start: "06:00", end: "06:00" },
          { start: "06:00", end: "06:00" },
          { start: "06:00", end: "06:00" },
          { start: "06:00", end: "06:00" },
          { start: "06:00", end: "06:00" },
          { start: "06:00", end: "06:00" },
        ],
      },
    ]);
  };

  const handleRemove = (id) => {
    const newValues = [];

    for (var i = 0; i < list.length; i++) {
      if (list[i].id !== id) newValues.push(list[i]);
    }

    setList([...newValues]);
  };

  return (
    <>
      <div className="list">
        {list.map((item, index) => (
          <Card
            key={uuidv4()}
            id={index}
            data={item}
            handleRemove={handleRemove}
            handleSelect={handleSelect}
          />
        ))}
        <button onClick={() => handleAdd()}>Добавить</button>
      </div>
      <button>Отправить на сервер</button>
    </>
  );
}

export default App;
