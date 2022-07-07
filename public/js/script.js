const postForm = document.forms.postform;


function createCard(obj) {
    return `
          <div class='col'>
        <div class='card' style='width: 18rem;'>
          <img src=${obj.url} class='card-img-top' alt=${obj.url} />
          <div class='card-body'>
            <h5 class='card-title'>${obj.text}</h5>
            <button
              data-id=${obj.id}
              type='button'
              class='btn btn-danger'
            >Delete</button>
          </div>
        </div>
      </div>
      `;
  }



postForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const allFromForm = Object.fromEntries(new FormData(postForm));
    /* console.log(allFromForm); */
    const response = await fetch('/pictures', {
        method: 'post',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify(allFromForm),
    });
    if (response.ok) {
        const data = await response.json(); // {newPost:{title:...,img:...,id:...,author:...}}
        const container = document.querySelector('[data-container]');
        container.insertAdjacentHTML('afterbegin', createCard(data.newPictures));
        postForm.reset();
    }
});
