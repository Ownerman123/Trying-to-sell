document.addEventListener('DOMContentLoaded', () => {
  const fileInput = document.getElementById('fileInput');
  const titleInput = document.getElementById('titleInput');
  const descriptionInput = document.getElementById('descriptionInput');
  const priceInput = document.getElementById('priceInput');
  const userInput = document.getElementById('userId');
  const locationInput = document.getElementById('locationInput');
  const form = document.getElementById('uploadForm');


  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const newListing = {};
    
    const file = fileInput.files[0];
    const formData = new FormData();
    formData.append('file', file);
    
    try {
      const response = await fetch('/api/cloudinary/upload', {
        method: 'POST',
        body: formData
      });
      
      const data = await response.json();
      console.log('Uploaded Image URL:', data.url);
      newListing.imageUrl = data.url;
      
      // Do something with the uploaded image URL (e.g., display it to the user)
    } catch (error) {
      console.error('Error uploading image:', error);
    }

    newListing.title = titleInput.value;
    newListing.description = descriptionInput.value;
    newListing.price = priceInput.value;
    newListing.user_id = userInput ? userInput.value : null; // Update to handle possible null
    newListing.location = locationInput ? locationInput.value : ''; // Update to handle possible null
    newListing.date_created = new Date();

    console.log(newListing);

    const created = await fetch("/api/listings/", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newListing)
    });

    if (created.ok) {
      console.log('Listing created');
    } else {
      console.log('Something went wrong', created);
    }
  });
});
