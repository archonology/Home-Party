const subscriberFormHandler = async (event) => {
  event.preventDefault();

  const email = document.querySelector('#email-subscribe').value.trim();
  const username = document.querySelector('#username-subscribe').value.trim();

  if (username && email) {
    // do I have the path I need in routes?
    const response = await fetch('/api/subscribers', {
      method: 'POST',
      body: JSON.stringify({ username, email }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to subscribe.');
    }
  }
};

document
  .querySelector('.subscribe-form')
  .addEventListener('submit', subscriberFormHandler);