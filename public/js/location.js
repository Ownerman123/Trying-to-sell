document.addEventListener('DOMContentLoaded', () => {
    const fetchLocationButton = document.getElementById('fetchLocation');
    const locationInput = document.getElementById('locationInput');
  
    fetchLocationButton.addEventListener('click', async () => {
      try {
        const response = await fetch('/api/location/location');
        const data = await response.json();
        if (data && data.city && data.country_name) {
          locationInput.value = `${data.city}, ${data.country_name}`;
        } else {
          console.error('Location data is incomplete:', data);
        }
      } catch (error) {
        console.error('Error fetching location:', error);
      }
    });
  });
  