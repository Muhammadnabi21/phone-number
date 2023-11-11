function bos() {
    let davlatlar=document.f.davlat;
    if (davlatlar.value == 'uzb') {
        document.f.code.value = "+998"
    }
  else  if (davlatlar.value == 'rus') {
        document.f.code.value = "+7"
    }
  else  if (davlatlar.value == 'usa') {
        document.f.code.value = "+1"
    }
  else  if (davlatlar.value == 'taj') {
        document.f.code.value = "+992"
    }
  else  if (davlatlar.value == 'afg') {
        document.f.code.value = "+93"
    }
}
let images = ['2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg'];
let qiymati = 0;

function next() {
let uzgar = document.getElementById('imgg');
qiymati = (qiymati + 1) % images.length;
uzgar.src = images[qiymati];
}