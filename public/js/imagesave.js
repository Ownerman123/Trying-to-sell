document.getElementById('uploadForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const fileInput = document.getElementById('fileInput');
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
      
      // Do something with the uploaded image URL (e.g., display it to the user)
    } catch (error) {
      console.error('Error uploading image:', error);
    }
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