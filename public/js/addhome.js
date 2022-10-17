const postFormHandler = async (event) => {
    event.preventDefault();
  
    //how to get the user id in this method?
    const title = document.querySelector('#title').value.trim();
    const post = document.querySelector('#newPost').value.trim();
  
    if (title && post) {
      // do I have the path I need in routes?
      const response = await fetch('/api/posts', {
        method: 'POST',
        body: JSON.stringify({ title, post }),
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
    .querySelector('.new-post')
    .addEventListener('submit', postFormHandler);
const addHomeFormHandler = async (event) => {
    event.preventDefault();

    //how to get the user id in this method?
    const title = document.querySelector('#home-title').value.trim();
    const address = document.querySelector('#home-address').value.trim();
    const price = document.querySelector('#home-price').value;
    const bedrooms = document.querySelector('#home-bedrooms').value;
    const bathrooms = document.querySelector('#home-bathrooms').value;
    const square_feet = document.querySelector('#home-size').value;
    const link = document.querySelector('#home-link').value.trim();

    if (title && address && price && bedrooms && bathrooms && square_feet && link) {
        // do I have the path I need in routes?
        const response = await fetch('/api/homes', {
            method: 'POST',
            body: JSON.stringify({ title, address, price, bedrooms, bathrooms, square_feet, link }),
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
