// const buttonRadio = document.querySelector('.form-check-input1');
function viewDiv() {
  document.querySelector('.secretclick').style.display = 'block';
  document.querySelector('.secretclick').required = 'required';
}

function closeDiv() {
  console.log(document.getElementById('exampleInputPassword'));
  document.getElementById('exampleInputPassword').value = '';
  document.querySelector('.secretclick').style.display = 'none';
  document.querySelector('.secretclick').textbox = '';
}

const button = document.querySelector('.btn btn-primary');

// const x = document.forms[0].form1;

const x = document.forms.form1;
const y = document.forms.form2;

console.log(x);

if (x) {
  x.addEventListener('submit', async (e) => {
    e.preventDefault();
    const allformFrom = Object.fromEntries(new FormData(x));
    const response = await fetch('http://localhost:3000/signup', {
      method: 'post',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(allformFrom),
    });
    const result = await response.json();

    if (response.ok) {
      // console.log(1);
      window.location.href = '/main';
    } else {
      // console.log(result);
      alert(`ошибка:${result.isFail}`);
    }
  });
}

if (y) {
  y.addEventListener('submit', async (e) => {
    e.preventDefault();
    const allformFrom = Object.fromEntries(new FormData(y));
    const response = await fetch('http://localhost:3000/signin', {
      method: 'post',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(allformFrom),
    });
    const result = await response.json();
    console.log(result);

    if (response.ok) {
      console.log(1);
      window.location.href = '/main';
    } else {
      console.log(2);
      alert(`ошибка:${result.isFail}`);
    }
  });
}
// buttonRadio.addEventListener('click');
