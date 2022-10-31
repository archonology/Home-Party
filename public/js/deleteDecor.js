const deleteDecor = async (event) => {
  event.preventDefault();
  const decor_id = document.querySelector("#decor-id").value;
  
  if (decor_id) {
    const response = await fetch('/api/decor', {
      method: 'DELETE',
      body: JSON.stringify({ decor_id }),
      headers: { 'Content-Type': 'application/json' },
    });
    if (response.ok) {
      alert('decor deleted');
      document.location.replace('/dashboard');
    } else {
      alert('Delete cancelled');
    }
  }
};

document.getElementById("decor-id").addEventListener("click", deleteDecor);