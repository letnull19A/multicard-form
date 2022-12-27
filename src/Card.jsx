import React, { useEffect } from "react";
import TimeSelect from "./TimeSelect";

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
              name="start"
              card={id}
              row={index}
              handleSelect={handleSelect}
            />
            <span>до</span>
            <TimeSelect
              data={pair.end}
              name="end"
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
