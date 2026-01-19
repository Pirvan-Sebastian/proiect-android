const form = document.getElementById('form-notes');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    // 1. Create the JSON object from input values
    const formData = {
      nume: document.getElementById('nume').value
    };

    try {
      // 2. Send the POST request
      const response = await axios.post('http://localhost:5555/api/card/createCard', formData);
      console.log('Success:', response.data);
      alert('Data sent successfully!');
    } catch (error) {
      console.error('Error:', error);
    }
  });