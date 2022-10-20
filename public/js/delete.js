const deleteHomeFormHandler = async (event) => {
  event.preventDefault();
  const confirmDelete = document.querySelector('input[name="confirmDelete"]').value;
  const home_id = document.querySelector("#home-id").value;
  console.log(confirmDelete);
  console.log(home_id);
  if (confirmDelete === "Yes" && home_id) {
    const response = await fetch('api/homes', {
      method: 'DELETE',
      body: JSON.stringify({ confirmDelete, home_id }),
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
document
  .querySelector('.delete-form')
  .addEventListener('submit', deleteHomeFormHandler);