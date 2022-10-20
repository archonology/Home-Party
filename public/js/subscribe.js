const subscriberFormHandler = async (event) => {
  event.preventDefault();

  const subscriber = document.querySelector('#subscriber').value.trim();
  const email = document.querySelector('#email-subscribe').value.trim();
  const user_id = document.querySelector('#users').value;

  console.log("The value of user_id for the subscriber js is " + user_id);

  if (subscriber && email && user_id) {
    const response = await fetch('/api/subscribers', {
      method: 'POST',
      body: JSON.stringify({ subscriber, email, user_id }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/');
      alert("You are subscribed!");
    } else {
      alert('Failed to subscribe.');
    }
  }
};

document
  .querySelector('.subscribe-form')
  .addEventListener('submit', subscriberFormHandler);