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