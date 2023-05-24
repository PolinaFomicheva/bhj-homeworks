const progress = document.getElementById( 'progress' );
const form = document.getElementById('form')
const input = document.getElementById('file');


form.onsubmit = function() {
  if (input) {
    upload(input);
  } 
  return false;
};

function upload(input) {
  const xhr = new XMLHttpRequest();
  xhr.upload.onprogress = function(event) {
    progress.value = event.loaded / event.total;
  }

  xhr.onload = xhr.onerror = function() {
    if (this.status == 200) {
      log('succes')
    } else {
      log('error' + this.status);
    }
  }

  xhr.open("POST", "https://students.netoservices.ru/nestjs-backend/upload");
  xhr.send(input);
}


