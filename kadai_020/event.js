const textBtn = document.getElementById('btn');

textBtn.addEventListener('click', ()=> {
  const newText = document.getElementById('text');
  newText.textContent = 'ボタンをクリックしました';
})