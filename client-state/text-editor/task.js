const text = document.getElementById('editor');
const btn = document.querySelector('.btn__delete');

text.value = localStorage.getItem('text');
text.oninput = () => {
      localStorage.setItem('text', text.value)
    };


    btn.onclick = () => {
    text.value = '';
    localStorage.removeItem('text');
    }