export function updateDOM(
  location,
  time,
  temperature,
  condition,
  infoDiv,
  data
) {
  location.innerText = data.resolvedAddress;
  time.innerText = data.currentConditions.datetime;
  temperature.innerText = `${data.currentConditions.temp} Degree`;
  condition.innerText = data.currentConditions.conditions;
  infoDiv.style.display = 'flex';
}
