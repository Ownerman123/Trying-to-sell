document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM fully loaded and parsed');
    const fetchLocationButton = document.getElementById('fetchLocation');
    const locationInput = document.getElementById('locationInput');
  
    if (fetchLocationButton) {
      console.log('Fetch Location button found');
    } else {
      console.log('Fetch Location button not found');
    }
  
    fetchLocationButton.addEventListener('click', async () => {
      console.log('Fetch Location button clicked');
  
      try {
        const response = await fetch('/api/location/location');
        console.log('Fetch response received');
  
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
  
        const locationData = await response.json();
        console.log('Location data:', locationData);
  
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
  