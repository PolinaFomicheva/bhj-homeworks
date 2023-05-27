const progress = document.getElementById( 'progress' );
const form = document.getElementById('form');
const xhr = new XMLHttpRequest();


xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload');
xhr.send();

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const formData = new FormData(form);

  xhr.addEventListener('readystatechange', () => {

      xhr.upload.onprogress = (event) => {
          progress.value = event.loaded / event.total;
      };
  });

  xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload');
  xhr.send(formData);
});






