const deleteHome = async (event) => {
  event.preventDefault();
  const home_id = document.querySelector("#home-id").value;

  console.log("The Home id for deleting is " + home_id);
  if (home_id) {
    const response = await fetch('/api/homes', {
      method: 'DELETE',
      body: JSON.stringify({ home_id }),
      headers: { 'Content-Type': 'application/json' },
    });
    if (response.ok) {
      alert('home deleted');
      document.location.replace('/dashboard');
    } else {
      alert('Delete cancelled');
    }
  }
};

document.getElementById("home-id").addEventListener("click", deleteHome);