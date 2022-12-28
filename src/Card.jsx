import React, { useEffect } from "react"
import TimeSelect from "./TimeSelect"
import { TIME_POINT } from "./Enums"

export default function Card(props) {
  const { id, data, handleSelect, handleRemove } = props;

  return (
    <div className="card">
      <p>ID: {id}</p>
      <div className="card__body">
        {data.pairs.map((pair, index) => (
          <div className="card__row">
            <span>{index + 1}. от</span>
            <TimeSelect
              data={pair.start}
              name={TIME_POINT.START}
              card={id}
              row={index}
              handleSelect={handleSelect}
            />
            <span>до</span>
            <TimeSelect
              data={pair.end}
              name={TIME_POINT.END}
              card={id}
              row={index}
              handleSelect={handleSelect}
            />
          </div>
        ))}
      </div>
      <div className="card__footer">
        <button onClick={() => handleRemove(data.id)}>Удалить</button>
      </div>
    </div>
  );
}
