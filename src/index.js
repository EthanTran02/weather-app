import './style.css';
import { updateDOM } from './dom';

const form = document.querySelector('form');
const input = document.querySelector('#location-input');
const toggleButton = document.getElementById('toggle');
const loading = document.getElementById('loading');
const errorSpan = document.getElementById('error');

const infoDiv = document.getElementById('info');
const location = document.getElementById('location');
const time = document.getElementById('time');
const temperature = document.getElementById('temperature');
const condition = document.getElementById('condition');
const humidity = document.getElementById('humidity');
const wind = document.getElementById('wind');

const fahrenheit = document.getElementById('fahrenheit');
const celsius = document.getElementById('celsius');

const apiKey = '57GV7C6SHUYNDBU83BSHUSEGQ'; // cspell:ignore

form.addEventListener('submit', event => {
  event.preventDefault();
  const inputLocation = input.value;

  loading.style.display = 'block';
  infoDiv.style.display = 'none';
  errorSpan.style.display = 'none';

  async function weatherInfo() {
    try {
      const response = await fetch(
        `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${inputLocation}?key=${apiKey}`
      );

      if (!response.ok) throw new Error(`Invalid location, try again`);
      const data = await response.json();

      // update DOM
      updateDOM(location, time, temperature, condition,humidity,wind, data, fahrenheit);

      loading.style.display = 'none';
      infoDiv.style.display = 'flex';
    } catch (error) {
      errorSpan.innerText = error.message;
      errorSpan.style.display = 'block';
      loading.style.display = 'none';
    }
  }
  weatherInfo();

  input.value = '';
});

toggleButton.addEventListener('click', () => {
  const temperatureNumber = temperature.innerText.split(' ')[0];
  // set color on text
  if (fahrenheit.style.color === 'black') {
    fahrenheit.style.color = 'rgba(0, 0, 0, 0.4)';
    celsius.style.color = 'black';

    // transform the temperature
    const roundTemperatureCel = ((temperatureNumber - 32) * (5 / 9)).toFixed(1);
    temperature.innerText = `${roundTemperatureCel} Degree`;
  } else {
    celsius.style.color = 'rgba(0, 0, 0, 0.4)';
    fahrenheit.style.color = 'black';

    // transform the temperature
    const roundTemperatureFah = (temperatureNumber * (9 / 5) + 32).toFixed(1);
    temperature.innerText = `${roundTemperatureFah} Degree`;
  }
});
