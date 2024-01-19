const fetch = require('node-fetch');
const fs = require('fs');

// Replace 'http://your-python-backend-url' with the actual URL of your Python backend
const backendUrl = 'http://your-python-backend-url/api/predict';

// Replace 'path/to/your/image.jpg' with the path to your image file
const imagePath = 'path/to/your/image.jpg';

// Create a form data object
const formData = new FormData();
formData.append('image', fs.createReadStream(imagePath));

// Make a POST request to the Python backend
fetch(backendUrl, {
  method: 'POST',
  body: formData,
  headers: {
    ...formData.getHeaders(),
  },
})
  .then(response => response.json())
  .then(data => {
    console.log('Prediction:', data.prediction);
  })
  .catch(error => {
    console.error('Error making prediction:', error.message);
  });
