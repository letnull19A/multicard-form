import { useEffect, useState } from "react"
import { TIME_UNIT } from "./Enums"

export default function TimeSelect(props) {
  const { handleSelect, card, row, name, data } = props;
  const HOURS = [
    "06",
    "07",
    "08",
    "09",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "21",
    "22",
  ];
  const MINUTES = [
    "00",
    "05",
    "10",
    "15",
    "20",
    "25",
    "30",
    "35",
    "40",
    "45",
    "50",
    "55",
  ];
  const [hour, setHour] = useState();
  const [minute, setMinute] = useState();

  useEffect(() => {
    setHour(data.substring(0, 2))
    setMinute(data.substring(3, 5))
  }, [data]);

  return (
    <div className="select">
      <select
        name={TIME_UNIT.HOUR}
        onChange={(e) => handleSelect(e, card, row, name)}
        className="select__option"
        value={hour}
      >
        {HOURS.map((hour) => (
          <option>
            {hour}
          </option>
        ))}
      </select>
      <span>:</span>
      <select
        name={TIME_UNIT.MINUTE}
        onChange={(e) => handleSelect(e, card, row, name)}
        className="select__option"
        value={minute}
      >
        {MINUTES.map((minute) => (
          <option>{minute}</option>
        ))}
      </select>
    </div>
  );
}
