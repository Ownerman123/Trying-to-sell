document.addEventListener('DOMContentLoaded', () => {
    const deleteButtons = document.querySelectorAll('.delete-listing');
  
    deleteButtons.forEach(button => {
      button.addEventListener('click', async (event) => {
        const listingId = event.target.dataset.id;
        const confirmed = confirm('Are you sure you want to delete this listing?');
  
        if (confirmed) {
          try {
            const response = await fetch(`/api/listings/${listingId}`, {
              method: 'DELETE'
            });
  
            if (response.ok) {
              alert('Listing deleted successfully.');
              location.reload();
            } else {
              alert('Failed to delete listing.');
            }
          } catch (error) {
            console.error('Error deleting listing:', error);
            alert('An error occurred while deleting the listing.');
          }
        }
      });
    });
  });
  