export function updateDOM(
  location,
  time,
  temperature,
  condition,
  infoDiv,
  data,
  fahrenheit
) {
  location.innerText = data.resolvedAddress;
  time.innerText = data.currentConditions.datetime;

  if (fahrenheit.style.color === 'black') {
    temperature.innerText = `${data.currentConditions.temp} Degree`;
  } else {
    const temperatureNumber = data.currentConditions.temp;
    const roundTemperatureCel = ((temperatureNumber - 32) * (5 / 9)).toFixed(1);
    temperature.innerText = `${roundTemperatureCel} Degree`;
  }

  condition.innerText = data.currentConditions.conditions;
  infoDiv.style.display = 'flex';
}
