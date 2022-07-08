const { uploadForm } = document.forms;
console.log(uploadForm);
uploadForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const formData = new FormData(uploadForm);

  const response = await fetch('/main/upload', {
    method: 'POST',
    body: formData,
  });
});