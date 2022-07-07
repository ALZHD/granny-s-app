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
console.log(x);

x.addEventListener('submit', async (e) => {
  e.preventDefault();
  const allformFrom = Object.from(new FormData(x));
  console.log(x);
  const response = await fetch('http://localhost:3000/signup', {
    method: 'post',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify(allformFrom),
  });
  const result = await response.json();

  if (response.status === 501) {
    alert(`ошибка:${result.isFail}`);
  } else if (response.ok) {
    window.location('/main');
  }
});

// buttonRadio.addEventListener('click');
