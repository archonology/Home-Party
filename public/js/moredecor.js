const addDecorFormHandler = async (event) => {
    event.preventDefault();

    //how to get the user id in this method?
    const product_name = document.querySelector('#decor-name').value.trim();
    const description = document.querySelector('#decor-desc').value.trim();
    const price = document.querySelector('#decor-price').value;
    const link = document.querySelector('#decor-link').value.trim();
    const home_id = document.querySelector('#home-id').value;
    console.log(home_id);

    if (product_name && description && price && link && home_id) {
        const response = await fetch('/api/decor', {
            method: 'POST',
            body: JSON.stringify({ product_name, description, price, link, home_id }),
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
    .querySelector('.moredecor-form')
    .addEventListener('submit', addDecorFormHandler);