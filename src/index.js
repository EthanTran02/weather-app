import './style.css';
import { updateDOM } from './dom';

const input = document.querySelector('input');
const searchButton = document.getElementById('search');
const toggleButton = document.getElementById('toggle');
const apiKey = '57GV7C6SHUYNDBU83BSHUSEGQ';
const loading = document.getElementById('loading');

searchButton.addEventListener('click', () => {
  const infoDiv = document.getElementById('info');
  const location = document.getElementById('location');
  const time = document.getElementById('time');
  const temperature = document.getElementById('temperature');
  const condition = document.getElementById('condition');

  const inputLocation = input.value;

  loading.style.display = 'block';
  infoDiv.style.display = 'none';

  async function weatherInfo() {
    try {
      const response = await fetch(
        `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${inputLocation}?key=${apiKey}`
      );
      if (!response.ok) throw new Error(`status: ${response.status}`);
      const data = await response.json();
      console.log(data);

      // update DOM
      updateDOM(location, time, temperature, condition, infoDiv, data);

      loading.style.display = 'none';
    } catch (error) {
      console.error('Error fetching weather:', error.message);
    }
  }
  weatherInfo();

  input.value = '';
});

// WORKING ON THE TOGGLE BUTTON
