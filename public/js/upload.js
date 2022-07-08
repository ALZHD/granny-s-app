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
//   console.log(e.target.dataset.delete);
  if (e.target.dataset?.delete) {
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
//   if (e.target.dataset?.audio) {
//     try {
//       const response = await fetch('/listr/delete');
//       if (response.ok) {
//         const currCard = e.target.closest('[data-col]');
//         currCard.remove();
//       } else {
//         const data = await response.json();
//         alert(data.message);
//       }
//     } catch (error) {
//       alert(error.message);
//     }
//   }
});

// const btn = document.querySelector('.btn-success');

// async function speak() {
//   let text = document.getElementById('text').value;
//   const exampleImage = document.getElementById('img').files[0]; // 'https://i.ytimg.com/vi/NoRnGKjedzo/hqdefault.jpg';//'https://tesseract.projectnaptha.com/img/eng_bw.png';
//   console.log(document.getElementById('img').files[0]);
//   if (exampleImage) {
//     // const worker = Tesseract.createWorker({});
//     // await work();

//     const worker = Tesseract.createWorker({
//       logger: (m) => console.log(m),
//     });
//     Tesseract.setLogging(true);
//     await work();

//     async function work() {
//       await worker.load();
//       await worker.loadLanguage('rus+eng');
//       await worker.initialize('rus+eng');

//       result = await worker.recognize(exampleImage);
//       // console.log(result.data);
//       text = result.data.text;
//       await worker.terminate();
//     }
//   }
//   if (text) {
//     const textBox = document.querySelector('#textBox');
//     const newDiv = document.createElement('div');
//     newDiv.style.cssText = `
//       margin top: 10px;
//       min-width: auto;
//       min-height: auto;
//       background-color: rgb(${rand()}, ${rand()}, ${rand()});
//       `;
//     newDiv.innerText = text;
//     textBox.appendChild(newDiv);

//     speechSynthesis.speak(new SpeechSynthesisUtterance(text));
//   }
// }

// btn.addEventListener('click', (e) => { speak(); });

// function rand() {
//   return Math.floor(Math.random() * 255);
// }

// uploadForm.addEventListener('submit', async (e) => {
//   e.preventDefault();
//   const formData = new FormData(uploadForm);

//   const response = await fetch('/main/upload', {
//     method: 'POST',
//     body: formData,
//   });
// });
