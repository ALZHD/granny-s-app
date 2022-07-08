const { uploadForm } = document.forms;
console.log(uploadForm);
if (uploadForm) {
  uploadForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(uploadForm);

    const response = await fetch('/main/upload', {
      method: 'POST',
      body: formData,
    });
    if (response.ok) {
      window.location.href = 'http://localhost:3000/main';
    }
  });
}

const deleteButton = document.querySelector('[data-container]');
deleteButton.addEventListener('click', async (e) => {
  if (e.target.type === 'button') {
    try {
      const response = await fetch('/main/delete');
      if (response.ok) {
        const currCard = e.target.closest('[data-col]');
        currCard.remove();
      } else {
        const data = await response.json();
        alert(data.message);
      }
    } catch (error) {
      alert(error.message);
    }
  }
});
// uploadForm.addEventListener('submit', async (e) => {
//   e.preventDefault();
//   const formData = new FormData(uploadForm);

//   const response = await fetch('/main/upload', {
//     method: 'POST',
//     body: formData,
//   });
// });
