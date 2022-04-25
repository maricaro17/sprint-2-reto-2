import React, { useState } from "react";
import FlipUnitContainer from "../components/FlipUnitContainer";
import { useCountdown } from "../hooks/useCountdown";
const THREE_DAYS_IN_MS = 30 * 24 * 60 * 60 * 1000;
const NOW_IN_MS = new Date().getTime();

const dateTimeAfterThreeDays = NOW_IN_MS + THREE_DAYS_IN_MS;

const FlipClock = () => {
  const [days, hours, minutes, seconds] = useCountdown(dateTimeAfterThreeDays);

  const [dias, setDias] = useState(days);
  const [daysShuffle, setDaysShuffle] = useState(true);

  const [horas, setHoras] = useState(hours);
  const [hoursShuffle, setHoursShuffle] = useState(true);

  const [minutos, setMinutos] = useState(minutes);
  const [minutesShuffle, setMinutesShuffle] = useState(true);
  
  const [segundos, setSegundos] = useState(seconds)
  const [secondsShuffle, setSecondsShuffle] = useState(true);

  if (dias !== days) {
    const shufle = !daysShuffle;
    setDias(days);
    setDaysShuffle(shufle);
  }

  if (horas !== hours) {
    const shufle = !hoursShuffle;
    setHoras(hours);
    setHoursShuffle(shufle);
  }

  if (minutos !== minutes) {
    const shufle = !minutesShuffle;
    setMinutos(minutes);
    setMinutesShuffle(shufle);
  }

  if (segundos !== seconds) {
    const shufle = !secondsShuffle;
    setSegundos(seconds);
    setSecondsShuffle(shufle);
  }


  return (
    <div className="flipClock">
      <FlipUnitContainer digit={dias} unit="days" shuffle={daysShuffle} />
      <FlipUnitContainer digit={horas} unit="hours" shuffle={hoursShuffle} />
      <FlipUnitContainer
        digit={minutos}
        unit="minutes"
        shuffle={minutesShuffle}
      />
      <FlipUnitContainer
        digit={segundos}
        unit="seconds"
        shuffle={secondsShuffle}
      />
    </div>
  );
};

export default FlipClock;
