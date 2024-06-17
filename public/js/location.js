document.addEventListener('DOMContentLoaded', () => {
    const fetchLocationButton = document.getElementById('fetchLocation');
    const locationInput = document.getElementById('locationInput');
  
    fetchLocationButton.addEventListener('click', async () => {
      try {
        const response = await fetch('/api/location');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const locationData = await response.json();
        if (locationData && locationData.city && locationData.country_name) {
          locationInput.value = `${locationData.city}, ${locationData.country_name}`;
        } else {
          alert('Unable to fetch location data');
        }
      } catch (error) {
        console.error('Error fetching location data:', error);
        alert('Unable to fetch location data');
      }
    });
  });
  