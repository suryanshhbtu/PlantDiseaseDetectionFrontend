// pages/api/predict.js
import fs from 'fs';
import FormData from 'form-data';
import fetch from 'node-fetch';
import sharp from 'sharp';

// Load the Keras model
const modelPath = 'models/model.h5'; // Update with the correct path
const { loadModel } = require('@tensorflow/tfjs');
const model = await loadModel(`C:\Users\Suryansh Srivastava\Desktop\Kabaad\NEXTJS\plant_disease_frontend\models\model.h5`);

// Define class labels (ref)
const ref = [
  'Apple___Apple_scab',
  'Apple___Black_rot',
  'Apple___Cedar_apple_rust',
  'Apple___healthy',
  // ... (remaining class labels)
];

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      // Get the image file from the request
      const fileBuffer = await new Promise((resolve) => {
        let data = Buffer.alloc(0);
        req.on('data', (chunk) => (data = Buffer.concat([data, chunk])));
        req.on('end', () => resolve(data));
      });

      // Generate a unique filename
      const fileName = `image_${Date.now()}.jpg`;
      const path = `./public/${fileName}`;

      // Save the image file
      fs.writeFileSync(path, fileBuffer);

      // Resize image using sharp
      await sharp(path).resize(256, 256).toFile(path);

      // Load image using tfjs-node
      const img = await loadImage(path);
      const tensorImage = tf.node.encodeJpeg(img);
      const resizedImg = await tf.node.decodeImage(tensorImage);

      // Make predictions
      const prediction = await model.predict(resizedImg);

      // Get the predicted class label
      const predictedClass = ref[prediction.argMax().dataSync()[0]];

      res.status(200).json({ prediction: predictedClass });
    } catch (error) {
      console.error('Error making prediction:', error.message);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}
