import navigation from './navigation.js'
import works from './works.js'
import testimonials from './testimonials.js'
navigation();
works();
testimonials();

document.getElementById('predict-btn').addEventListener('click', async () => {
    const fileInput = document.getElementById('file-upload');
    const resultDiv = document.getElementById('prediction-result');

    if (fileInput.files.length === 0) {
        resultDiv.textContent = 'Please select an image file.';
        return;
    }

    const formData = new FormData();
    formData.append('file', fileInput.files[0]);

    try {
        const response = await fetch('http://127.0.0.1:8000/predict', {
            method: 'POST',
            body: formData,
        });

        if (!response.ok) {
            throw new Error('Prediction failed');
        }

        const data = await response.json();
        resultDiv.textContent = `Prediction: ${data.prediction}`;
    } catch (error) {
        console.error(error);
        resultDiv.textContent = 'Error: Unable to get prediction.';
    }
});


