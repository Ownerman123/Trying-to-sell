// public/js/modal.js

document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM fully loaded and parsed");
    const modal = document.getElementById("listingModal");
    const closeModalButton = document.getElementById("closeModal");
    const listingCards = document.querySelectorAll(".listing-card");
  
    console.log("Modal:", modal); // Check if modal element is found
    console.log("Close button:", closeModalButton); // Check if close button is found
    console.log("Listing cards:", listingCards); // Check if listing cards are found
  
    listingCards.forEach((card) => {
      console.log("Adding click event to card:", card);
      card.addEventListener("click", () => {
        const listingId = card.dataset.id;
        console.log(`Listing card clicked: ${listingId}`);
        // Fetch the listing data using the listingId
        fetch(`/api/listings/${listingId}`)
          .then((response) => response.json())
          .then((data) => {
            document.getElementById("modal-title").innerText = data.title;
            document.getElementById("modal-description").innerText = data.description;
            document.getElementById("modal-price").innerText = `Price: $${data.price}`;
            document.getElementById("modal-location").innerText = `Location: ${data.location}`;
            document.getElementById("modal-time").innerText = `Posted: ${data.date_created}`;
            modal.classList.remove("hidden");
          })
          .catch(err => console.error("Error fetching listing data:", err));
      });
    });
  
    closeModalButton.addEventListener("click", () => {
      modal.classList.add("hidden");
    });
  });
  