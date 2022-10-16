const addHomeFormHandler = async (event) => {
    event.preventDefault();
  
    //how to get the user id in this method?
    const title = document.querySelector('#home-title').value.trim();
    const address = document.querySelector('#home-address').value.trim();
    const price = document.querySelector('#home-price').value.trim();
    const bedrooms = document.querySelector('#home-bedrooms').value.trim();
    const bathrooms = document.querySelector('#home-bathrooms').value.trim();
    const square_feet = document.querySelector('#home-size').value.trim();
    const link = document.querySelector('#home-link').value.trim();
  
    if (title && address && price && bedrooms && bathrooms && square_feet && link) {
      // do I have the path I need in routes?
      const response = await fetch('/api/homes', {
        method: 'POST',
        body: JSON.stringify({ title, address, price, bedrooms, bathrooms, square_feet }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert('Failed to post.');
      }
    }
  };
  
  document
    .querySelector('.addhome-form')
    .addEventListener('submit', addHomeFormHandler);