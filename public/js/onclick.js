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

buttonRadio.addEventListener('click');
