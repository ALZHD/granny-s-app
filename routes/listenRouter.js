const router = require('express').Router();

// const btn = document.querySelector('.btn-success');

// router.post('/upload', speak(), async (req, res) => {
//   const { user_id } = req.session;
//   await Picture.create({
//     granny_id: user_id, url: req.file.path.replace('public', ''),
//   });

//   console.log('test');
//   console.log('asd', req.file);
//   res.json({ message: 'ok' });
// });

// router.post('/load', async (req, res) => {

// });

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
//     margin top: 10px;
//     min-width: auto;
//     min-height: auto;
//     background-color: rgb(${rand()}, ${rand()}, ${rand()});
//     `;
//     newDiv.innerText = text;
//     textBox.appendChild(newDiv);

//     speechSynthesis.speak(new SpeechSynthesisUtterance(text));
//   }
// }

// btn.addEventListener('click', (e) => { speak(); });

// function rand() {
//   return Math.floor(Math.random() * 255);
// }

module.exports = router;
