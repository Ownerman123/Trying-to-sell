// public/js/modal.js

document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM fully loaded and parsed');
    const modal = document.getElementById('listingModal');
    const closeModalButton = document.getElementById('closeModal');
    const listingCards = document.querySelectorAll('.listing-card');

    console.log('Modal:', modal); // Check if modal element is found
  console.log('Close button:', closeModalButton); // Check if close button is found
  console.log('Listing cards:', listingCards); // Check if listing cards are found
  
    listingCards.forEach(card => {
      card.addEventListener('click', () => {
        console.log('Adding click event to card:', card);
        const listingId = card.dataset.id;
        console.log(`Listing card clicked: ${listingId}`);
        // Fetch the listing data using the listingId
        fetch(`/api/listins/${listingId}`)
          .then(response => response.json())
          .then(data => {
            document.getElementById('modal-title').innerText = data.title;
            document.querySelector('#listingModal .text-sm.text-gray-500:nth-child(2)').innerText = data.description;
            document.querySelector('#listingModal .text-sm.text-gray-500:nth-child(3)').innerText = `Price: $${data.price}`;
            document.querySelector('#listingModal .text-sm.text-gray-500:nth-child(4)').innerText = `Location: ${data.location}`;
            document.querySelector('#listingModal .text-sm.text-gray-500:nth-child(5)').innerText = `Posted: ${data.time}`;
            modal.classList.remove('hidden');
          });
      });
    });
  
    closeModalButton.addEventListener('click', () => {
      modal.classList.add('hidden');
    });
  });
  