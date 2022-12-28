import { useState, useEffect } from "react";
import "./App.css";
import Card from "./Card";
import { v4 as uuidv4 } from "uuid";
import { TIME_POINT, TIME_UNIT } from "./Enums";

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
    const newList = list;

    if (customName === TIME_POINT.START) {
        newList[card].pairs[row].start = changeTime(newList[card].pairs[row].start, e);
    }

    if (customName === TIME_POINT.END) {
        newList[card].pairs[row].end = changeTime(newList[card].pairs[row].end, e);
    }

    setList([...newList]);
  };

  const changeTime = (timePoint, e) => {
    const origin = timePoint;
    const { name, value } = e.target;

    return (timePoint =
      name === TIME_UNIT.HOUR
        ? value + origin.substring(2, 5)
        : origin.substring(0, 3) + value);
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
