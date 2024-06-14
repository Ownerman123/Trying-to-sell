
document.addEventListener('DOMContentLoaded', () => {
  const fileInput = document.getElementById('fileInput');
  const titleInput = document.getElementById('titleInput');
  const descriptionInput = document.getElementById('descriptionInput');
  const priceInput = document.getElementById('priceInput');
  const userInput = document.getElementById('userId');
  const locationInput = document.getElementById('locationInput');

  console.log('fileInput:', fileInput);
  console.log('titleInput:', titleInput);
  console.log('descriptionInput:', descriptionInput);
  console.log('priceInput:', priceInput);
  console.log('userInput:', userInput);
  console.log('locationInput:', locationInput);

  const fileChosen = document.getElementById('file-chosen');
  let filesArray = [];

  fileInput.addEventListener('change', (event) => {
    const files = Array.from(event.target.files);
    filesArray = filesArray.concat(files);
    updateFileList();
  });

  function updateFileList() {
    if (filesArray.length > 0) {
      const fileNames = filesArray.map(file => file.name).join(', ');
      fileChosen.textContent = fileNames;
    } else {
      fileChosen.textContent = 'No files chosen';
    }
  }

  document.getElementById('uploadForm').addEventListener('submit', async (e) => {
    e.preventDefault();

    // Check if elements are properly found
    if (!fileInput || !titleInput || !descriptionInput || !priceInput || !userInput || !locationInput) {
      console.error('One or more input elements are not found in the DOM.');
      return;
    }


    const newlisting = {};    
    const files = fileInput.files;
    const formData = new FormData();
    Array.from(files).forEach((file, index) => {
      formData.append('file', file, file.name);
    });
    
    try {
      const response = await fetch('/api/cloudinary/upload', {
        method: 'POST',
        body: formData
      });
      
      const data = await response.json();
      console.log('Uploaded Image URL:', data.url);
      newlisting.imageUrl = data.url;
    } catch (error) {
      console.error('Error uploading image:', error);
    }

    newlisting.title = titleInput.value;
    newlisting.description = descriptionInput.value;
    newlisting.price = priceInput.value;
    newlisting.user_id = userInput.value;
    newlisting.location = locationInput.value;
    newlisting.date_created = new Date();
    console.log(newlisting.imageUrl);
    
    console.log(newlisting);
    const created = await fetch("/api/listings/listings", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newlisting)
    });
     
    if (created.ok) {
      console.log('Listing created');
    } else {
      console.log('Something went wrong', created);
    }
  });
});

//mdn example
// const input = document.querySelector("input");
// const preview = document.querySelector(".preview");

// input.style.opacity = 0;

// input.addEventListener("change", updateImageDisplay);

// function updateImageDisplay() {
//   while (preview.firstChild) {
//     preview.removeChild(preview.firstChild);
//   }

//   const curFiles = input.files;
//   console.log(curFiles);
//   if (curFiles.length === 0) {
//     const para = document.createElement("p");
//     para.textContent = "No files currently selected for upload";
//     preview.appendChild(para);
//   } else {
//     const list = document.createElement("ol");
//     preview.appendChild(list);

//     for (const file of curFiles) {
//       const listItem = document.createElement("li");
//       const para = document.createElement("p");
//       console.log(file);
//       console.log(URL.createObjectURL(file));
//       if (validFileType(file)) {
//         para.textContent = `File name ${file.name}, file size ${returnFileSize(
//           file.size,
//         )}.`;
//         const image = document.createElement("img");
//         image.src = URL.createObjectURL(file);
//         image.alt = image.title = file.name;

//         listItem.appendChild(image);
//         listItem.appendChild(para);
//       } else {
//         para.textContent = `File name ${file.name}: Not a valid file type. Update your selection.`;
//         listItem.appendChild(para);
//       }

//       list.appendChild(listItem);
//     }
//   }
// }

// // https://developer.mozilla.org/en-US/docs/Web/Media/Formats/Image_types
// const fileTypes = [
//   "image/apng",
//   "image/bmp",
//   "image/gif",
//   "image/jpeg",
//   "image/pjpeg",
//   "image/png",
//   "image/svg+xml",
//   "image/tiff",
//   "image/webp",
//   "image/x-icon",
// ];

// function validFileType(file) {
//   return fileTypes.includes(file.type);
// }

// function returnFileSize(number) {
//   if (number < 1e3) {
//     return `${number} bytes`;
//   } else if (number >= 1e3 && number < 1e6) {
//     return `${(number / 1e3).toFixed(1)} KB`;
//   } else {
//     return `${(number / 1e6).toFixed(1)} MB`;
//   }
// }

// const button = document.querySelector("form button");
// button.addEventListener("click", (e) => {
//   e.preventDefault();
//   const para = document.createElement("p");
//   para.append("Image uploaded!");
//   preview.replaceChildren(para);
// });